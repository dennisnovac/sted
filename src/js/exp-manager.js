/*jshint esversion: 6 */


var $ = require("jquery");
var ko = require("knockout");
var console = require("console");

$(document).ready(function(){
// -------- Extensions
/**
* Custom KnockOut handler: handles key press event, when user presses Enter key
*/
ko.bindingHandlers.anyKeyPress = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        element.addEventListener('keyup', function (event) {
            allBindings.anyKeyPress.call(viewModel);
            return false;
        });
    }
};

/**
* Custom KnockOut handler: handles key press event, when user presses Enter key
*/
ko.bindingHandlers.enterPress = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        element.addEventListener('keydown', function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                allBindings.enterPress.call(viewModel);
                return false;
            }
            return true;
        });
    }
};

/**
* Custom KnockOut handler: handles key press event, when user presses Escape key
*/
ko.bindingHandlers.escPress = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        element.addEventListener('keydown', function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 27) {
                allBindings.escPress.call(viewModel);
                return false;
            }
            return true;
        });
    }
};

/**
* Custom knockout extender: required field validation
*/
ko.extenders.required = function (target) {
    // add some sub-observables to our observable
    target.hasError = ko.observable();

    // define a function to do validation
    function validate(newValue) {
        target.hasError(newValue ? false : true);
    }

    // initial validation
    validate(target());

    // validate whenever the value changes
    target.subscribe(validate);

    // return the original observable
    return target;
};


// -------- ListViewModel
// Enumerators
var directions = {
    ascending: 1,
    descending: 2
},
    defaultDirection = directions.ascending,
    defaultSortColumn = 'Title';

/**
* Items list view model
*/
function ListViewModel() {
    var self = this;

    // Create observable array for items
    self.allItems = ko.observableArray();
    self.items = ko.observableArray();
    self.path = ko.observableArray();

    // Search and sort parameters
    self.searchQuery = ko.observable(''); // Empty search query by default
    self.sortColumn = ko.observable(defaultSortColumn); // By default, sorting by title
    self.sortDirection = ko.observable(defaultDirection); // By default, sorting in ascending direction

    // Selected folder
    self.folderId = ko.observable(''); // Root folder by default

    // Date
    self.date = ko.observable(''); 

    /**
    * Set current date
    */
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var currentDate = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


    /**
    * Adds new folder to the list
    */
    self.addNewFolder = function () {
        addNewItem(true);
    };

    /**
    * Adds new file
    */
    self.addNewFile = function () {
        addNewItem(false);
    };

    /**
    * Searches a folder for given search query
    */
    self.searchItems = function () {
        // Saves or cancels all edits
        self.saveOrCancelAllEdits();

        setItems();
    };

    /**
    * Sorts folder by given column
    */
    self.sortItems = function (column) {
        // Saves or cancels all edits
        self.saveOrCancelAllEdits();

        var columnBefore = self.sortColumn(),
            wasDescending = self.sortDirection() == directions.descending;
        if (columnBefore == column) {
            self.sortDirection(wasDescending ? directions.ascending : directions.descending);
        } else {
            self.sortDirection(directions.ascending);
        }
        self.sortColumn(column);

        setItems();
    };

    /**
    * Selects folder, by given id
    */
    self.changeFolder = function (id) {
        // Saves or cancels all edits
        self.saveOrCancelAllEdits();

        self.folderId(id);

        // Add folder to path
        var i, folder;
        for (i = 0; i < self.allItems().length; i++) {
            if (self.allItems()[i].id() == id) {
                folder = self.allItems()[i];
                break;
            }
        }
        setPathFolder(folder || self.path()[0]);

        // Clear sort and search query
        self.sortDirection(defaultDirection);
        self.sortColumn(defaultSortColumn);
        self.searchQuery('');

        setItems();
    };

    /**
    * Opens folder's parent folder
    */
    self.openParentFolder = function () {
        // Saves or cancels all edits
        self.saveOrCancelAllEdits();

        var parentId = '',
            currentId = self.folderId();

        for (var l = 0; l < self.allItems().length; l++) {
            if (self.allItems()[l].id() == currentId) {
                parentId = self.allItems()[l].folderId;
                break;
            }
        }

        self.changeFolder(parentId);
    };

    /** 
    * Helper method. Return true if data is sorted by specified column ascending.
    */
    self.isSortedAscending = function (column) {
        return column == self.sortColumn() && self.sortDirection() == directions.ascending;
    };

    /**
    * Helper method Return true if data is sorted by specified column descending.
    */
    self.isSortedDescending = function (column) {
        return column == self.sortColumn() && self.sortDirection() == directions.descending;
    };

    /**
    * Computed KnockOut function, returns true, if current folder is root folder
    */
    self.isRootFolder = ko.computed(function () {
        return !self.folderId();
    });

    /**
    * Gets next items id
    */
    self.getNewId = function() {
        var id = 0;

        for (var m = 0; m < self.allItems().length; m++) {
            if (self.allItems()[m].id() > id) {
                id = self.allItems()[m].id();
            }
        }

        return id + 1;
    };

    /**
    * Saves or cancels all current edits
    */
    self.saveOrCancelAllEdits = function() {
        // Stop editing, if some item is in edit mode
        for (var i = 0; i < self.items().length; i++) {
            var item = self.items()[i];
            if (item.isActive()) {
                item.saveOrCancelEdit();
            }
        }
    };

    /**
    * Private method, adds new item to grid
    */
    function addNewItem(isFolder) {
        // Saves or cancels all edits
        self.saveOrCancelAllEdits();

        var newItem = new ItemViewModel(self, isFolder);
        newItem.folderId = self.folderId();
        newItem.date(currentDate);
        newItem.value(0);

        // Set item as active (editable)
        newItem.isActive(true);

        // Add new item to the top of showing items
        self.items.unshift(newItem);
    }

    /**
    * Private method, adds folder to path, or removes folders from path
    */
    function setPathFolder(folder) {
        var i,
            remove;

        // If root folder, remove all from the root
        if (!folder.id()) {
            remove = 1;
        } else {
            // Get folders to pop out from the path
            for (i = 0; i < self.path().length; i++) {
                if (self.path()[i].id() == folder.id()) {
                    remove = i + 1;
                    break;
                }
            }
        }

        // If folder already exists in the list, remove all childs from path
        if (remove) {
            for (i = remove; i < self.path().length; i++) {
                self.path.pop();
            }
        } else {
            // Add folder to path 
            self.path.push(folder);
        }
    }

    /**
    * Private method, fills items observable array with items, filtered by folder,
    * search query, and sorted by given parameters
    */
    function setItems() {
        var query = (self.searchQuery() || '').toLowerCase(),
            currentFolderId = self.folderId() || '';

        self.items.removeAll();

        for (var i = 0; i < self.allItems().length; i++) {
            var item = self.allItems()[i],
                folderId = item.folderId || '';

            // Filter items out by folder id
            if (currentFolderId != folderId) {
                continue;
            }

            // Filter items out by search query
            if (query && item.title().toLowerCase().indexOf(query) < 0) {
                continue;
            }

            self.items.push(item);
        }

        // Sort items
        if (self.items().length > 0) {
            self.items.sort(sortItemsList);
        }
    }

    /**
    * Private method, sorts an items array
    */
    function sortItemsList(left, right) {
        var column = self.sortColumn(),
            isAscending = self.sortDirection() == directions.ascending,
            leftValue = column == 'Title' || left.isFolder == left.title().toLowerCase(),
            rightValue = column == 'Title' || right.isFolder == right.title().toLowerCase();

        // Folder always wins in ascending mode
        if (left.isFolder != right.isFolder) {
            if (left.isFolder) {
                return isAscending == -1;
            } else {
                return isAscending == 1;
            }
        }

        // Sort by name, depenging on sort direction
        return leftValue == rightValue ? 0 : (leftValue < rightValue ? (isAscending == -1) : (isAscending == 1));
    }

    /**
    * Funtion initializes list view models
    */
    self.initialize = function() {
        // Clear path
        self.path.removeAll();

        // Add root folder to path
        var rootFolder = new ItemViewModel(self, true);
        rootFolder.title('');
        self.path.push(rootFolder);

        // Set current folder to root
        self.folderId('');

        // Fill observable items array with current folder items
        setItems();
    };
}


// -------- ItemViewModel
/**
* Item view model
*/
var toDelete = [];

function ItemViewModel(parent, isFolder, id, title, date, value, folderId) {
  var self = this;

  // Observable properties
  self.id = ko.observable();
  self.extension = ko.observable();
  self.isActive = ko.observable(false);

  // Create title
  self.title = ko.observable().extend({ required: true });

  // Creaet date
  self.date = ko.observable().extend({ required: true });

  // Creaet value
  self.value = ko.observable().extend({ required: false });

  // Properties, that never changes dinamically, can be created non-observable
  self.parent = parent;
  self.folderId = '';
  self.isFolder = isFolder;

  // Temporary properties for keeping old values, when editing row
  self.oldTitle = null;

  // Subscribe to title value change events
  self.title.subscribe(function () {
      if (!self.isActive()) {
          self.oldTitle = self.title();
      }
  });

  /**
  * Set current date
  */
  var d = new Date();

  var month = d.getMonth()+1;
  var day = d.getDate();

  var currentDate = d.getFullYear() + '/' +
  ((''+month).length<2 ? '0' : '') + month + '/' +
  ((''+day).length<2 ? '0' : '') + day;

  /**
  * Computed KnockOut function, returns class name for row, depending on item type and active status
  */
  self.rowClassNames = ko.computed(function () {
      var classes;
      if (self.isFolder) {
          classes = 'exp-item folder-box';
          if (self.isActive()) {
              classes += ' folder-box-active';
          }
      } else {
          classes = 'exp-item file-box';
          if (self.isActive()) {
              classes += ' file-box-active';
          }
      }

      return classes;
  });

  /**
  * Computed KnockOut function, returns class name for div, which displays file's or folders icon
  */
  self.iconClassNames = ko.computed(function () {
      var classes;

      if (self.isFolder) {
          classes = 'system-folder';
      } else {
          classes = 'system-file';
      }

      return classes;
  });

  /** 
  * Saves an item
  */
  self.saveItem = function () {
      if (self.title.hasError()) {
          return;
      }

      // Add item to all items list and set new id
      if (!self.id()) {
          self.parent.allItems.push(self);
          self.id(self.parent.getNewId());
      }

      

      self.isActive(false);

      // Setting old values
      self.date(currentDate);
      self.oldTitle = self.title();
  };

  /**
  * Deletes an item
  */
  self.deleteItem = function (parentViewModel) {
      // Saves or cancels all edits
      self.parent.saveOrCancelAllEdits();
      var deletingItem = this;
      
      $('#delete-exp-modal').modal('show').focus();
      $('#delete-exp-modal').on('keyup', function(e){
        if(e.keyCode == 13) {
          $('.delete-exp-items').trigger('click');
        }
      });

      $('#delete-exp-modal .delete-exp-items').on('click', function(){
          parentViewModel.items.remove(deletingItem);
          parentViewModel.allItems.remove(deletingItem);
          $('#delete-exp-modal').modal('hide');
      });
  };

  /**
  * Check items to delete
  */
  

  self.checkItem = function (parentViewModel, event) {
      var index = parentViewModel.allItems().indexOf(this);
      var indexID = parentViewModel.allItems()[index].id();
      var newToDelete = toDelete.filter(function(e){return e !== indexID;});
      

      for(var i = 0; i < parentViewModel.allItems().length; i++) {
          if(parentViewModel.allItems()[i].id() == indexID) {
              if(toDelete.indexOf(indexID) < 0){
                  toDelete.push(indexID);
              } else {
                  toDelete = newToDelete;
              }
          }
      }
  };

  /**
  * Delete checked items
  */
  deleteChecked = function (parentViewModel) {
    $('#delete-exp-modal').modal('show');

    $('#delete-exp-modal .delete-exp-items').on('click', function(){
      for(var i = 0; i < toDelete.length; i++) {
            for(var j = 0; j < parentViewModel.allItems().length; j++){
                if(parentViewModel.allItems()[j].id() == toDelete[i]){
                    var deletingItem = parentViewModel.allItems()[j];
                    parentViewModel.items.remove(deletingItem);
                    parentViewModel.allItems.remove(deletingItem);
                }
            }
        }
      $('#delete-exp-modal').modal('toggle');
    });  
  };

  /**
  * Starts inline editing of an item
  */
  self.editItem = function () {
      // Saves or cancels all edits
      self.parent.saveOrCancelAllEdits();

      self.isActive(true);
  };

  /*
  * Opens item, depending on it's type
  */
  self.openItem = function () {
      if (self.isFolder) {
          self.parent.changeFolder(self.id());
      } else {
          //self.editItem();
      }
  };

  /**
  * Cancels inline editing of an item
  */
  self.cancelEditItem = function () {
      if (!self.id()) {
          // If item was new, remove it from grid
          self.parent.items.remove(self);
      } else {
          // Restore old values
          self.title(self.oldTitle);

          self.isActive(false);
      }
  };

  /**
  * Saves an item or cancels edit mode, depending on title.hasError()
  */
  self.saveOrCancelEdit = function() {
      if (self.isActive()) {
          if (self.title.hasError()) {
              self.cancelEditItem();
          } else {
              self.saveItem();
          }
      }
  };

  // Set properties with chain syntax
  self.id(id).title(title).date(date).value(value);
  self.folderId = folderId;}

// -------- Initialize
/**
* Initializes view model and apply bindings
*/
function initializeexpData(expData) {
      // Get container for binding view model
  var container = document.getElementById('file-explorer-content');


      // Create list view model
  var listViewModel = new ListViewModel();
  

    // Add folders to list
  if (expData.Folders) {
      for (var j = 0; j < expData.Folders.length; j++) {
          var folder = expData.Folders[j],
                  folderViewModel = new ItemViewModel(listViewModel, true, folder.Id, folder.Title, folder.Date, folder.Value, folder.ParentId);

          listViewModel.allItems.push(folderViewModel);
      }
  }

    // Add files to list
  if (expData.Files) {
      for (var k = 0; k < expData.Files.length; k++) {
          var file = expData.Files[k],
                  fileViewModel = new ItemViewModel(listViewModel, false, file.Id, file.Title, file.Date, file.Value, file.FolderId);

          listViewModel.allItems.push(fileViewModel);
      }
  }

    // Set grid options
  if (expData.GridOptions) {
      listViewModel.searchQuery(expData.GridOptions.SearchQuery);
      listViewModel.sortColumn(expData.GridOptions.Column);
      listViewModel.sortDirection(expData.GridOptions.Direction);
  }

    // Initialize list view model
  listViewModel.initialize();

  // Bind view model to view
  ko.applyBindings(listViewModel, container);
  }
  
 if(typeof expData == 'object'){
  initializeexpData(expData);
 }

});
