# [STEDB](https://sted.herokuapp.com)
All available pages:

 - [Some re-usable elements](https://sted.herokuapp.com/view-reports%20copy.html)
 - [Login](https://sted.herokuapp.com/login.html)
 - [Index - Simple dashboard](https://sted.herokuapp.com)
 - [Basic dashboard](https://sted.herokuapp.com/basic.html)
 - [Create a campaign](https://sted.herokuapp.com/simple-campaign.html)
 - [View reports](https://sted.herokuapp.com/view-reports.html)
 - [Create a signup form](https://sted.herokuapp.com/create-signup-form.html)
 - [List management](https://sted.herokuapp.com/list-management.html)
 - [Create fields](https://sted.herokuapp.com/create-fields.html)
 --
 - [Advanced dashboard](https://sted.herokuapp.com/dashboard.html)
 - [Advanced list management](https://sted.herokuapp.com/advanced-list-management.html)
 - [Generate counts](https://sted.herokuapp.com/generate-counts.html)
 - [Campaign management](https://sted.herokuapp.com/campaign-management.html)
 - [Create a campaign - advanced](https://sted.herokuapp.com/advanced-campaign.html)
 - [Reports](https://sted.herokuapp.com/reports.html)

  
Basically I tried to have as few elements as possible, in the pages listed above, that could be re-usable all over stedb.com, so we don't have the same enormous html stuff again and again.
Almost the entire code is commented either by me or by initial developers and based on that below will be mainly explanatory text, so I'll link you to main functions, therefore you won't have to spend too much time on figuring it all out.

### Mosaico - The email editor
Mosaico editor is heavily relying on [knockout.js](http://knockoutjs.com/).
More info about Mosaico, [https://github.com/voidlabs/mosaico](https://github.com/voidlabs/mosaico).

##### > How Mosaico works (It's all in the localStorage for now!)
Basically we have a bunch of pre-created templates, add them to objects, Mosaico checks the localStorage to see if there are any and loads them.
When a template is clicked, it creates a **new hash key and a draft linked to it**, and the user gets redirected based on the hash key. Every action further is based on that hash key, however it may get deleted in certain cases, to avoid duplicate case like e.g: Sent campaign and a draft sharing the same hash key will.
##### > localStorage objects
- templates -- contains template related data (source, title etc...)
- edits -- contains hash keys of Drafts
- campaigns -- contains hash keys of Sent Campaigns
- metadata-******* -- based on hash key -- contains related data to edit,campaign or template.
- template-******* -- based on has key -- contains actualy content of the email template (blocks,text)

##### > Main things changed or added
*According to the current functioanly of stedb.com, added additional functionality to the mosaico editor: **save templates** (initially it saved only drafts(edits)), **send campaigns, delete campaigns**.*
    However these are affecting only the email templates (not the entire campaign, including inputs, because you have a bunch of server-side validation that has to be added to them, so there was no point in going further).
    
  - **src/tmpl** -- significantly modified html template pages (not email templates) to adjust them to the layout of our website. These templates are linked to main html page through *src/js/app.js*.
  - **src/js/bindings/wysiwygs.js** -- reponds for TinyMCE -- Changed the inline view to look like regular textarea (mainly css changes) and adjusted the code accordingly for both views, *advanced* and *simple*
  - **src/js/ext/localstorage.js** -- saves, tests and downlods templates -- Save function slightly modified to avoid duplicating templates, drafts or campaigns ( test and download are still there if we may need them in future, but not used anywhere)
  - **src/js/viewmodel.js** -- Mainly added function to **save templates**, **send campaigns**, and **change template while creating a campaign**.
  - **src/js/converter/editor.js** -- Restricted functionality to show styling options only for **['buttonStyle', 'bigButtonStyle', 'buttonColor', 'backgroundColor', 'radius']**.
  - **index.html**, **basic.html** -- these two are exactly similar in terms of JS code -- The knockout.js model here isn't linked to the one from campaing creating pages. Improved and added validation for getting **edits, campaigns and templates** as well creating **edits** and deleting **edits and campaigns**.
  - **simple-campaign.html**, **advanced-campaign.html** -- renders the Mosaico editor -- when a hash key is not detected, instead of redirecting to main page, it now loads the first template from the list. There is some additional validation and TinyMCE related code.
 
*Everything described above affects only the drag & drop Mosaico builder and saves changes to localStorage*


##### > Explorer manager
Since we have Mosaico heavily relying on knockout.js, I decided another main factor should be built on top of it as well.
    - **src/js/exp-manager.js** -- responds for folder and files manager -- The entire code is commented inside the .js file. Doesn't save to localStorage (not sure if it was worth the effort since we won't be saving to it anyway).
    
    
##### > Other JS code
There are casual functions inside each page, responding for different stuff on their page.
    - **custom.js** -- respons mainly for styling and validation -- Everything is briefly commented as well, however validation is just for to show the functionality, it obviously needs to be server-side.



### Main used plugins
These are the main ones you'd have to work with (I won't include all the supplementary Mosaico dependencies, since it's a lot and useless for you.)
* [bootstrap](https://v4-alpha.getbootstrap.com/getting-started/introduction/) - doesn't need description.
* [bootstrap-datepicker](https://github.com/uxsolutions/bootstrap-datepicker/blob/master/docs/index.rst) - for datepicker and ranges
* [ChartJS](http://www.chartjs.org/) - Used for charts, very flexible
* [intl-tel-input](https://intl-tel-input.com/) - To validate phone numbers


## Styling
It's basically bootstrap with a couple additions, so just in case I didn't include something, it's because bootstrap already has it and it matches our UI. 
    - **src/css/stedb-src.css** -- Main styling file that has the styles for almost everything
    - **src/css/"all other files"** -- Rest of the files are used to style the Mosaico editor and it's components. These are heavily modified and overwritten, but you won't even need them, because they only respond for the style of the Mosaico.


### Default page layout
A portion of re-usable elements (which need some JS to be shown): [Here](https://sted.herokuapp.com/view-reports%20copy.html)

Another portion is here down below, but first a couple of classes that need to be know:

- `body.mobile-view` changes layout to mobile,
- `.l-sidebar.collapsed` collapses sidebar
- ---
- `<div class="spacing-xs"></div>` - Vertical spacing (also availabe `sm`,`md`, and `xl`)
- `th.grayed-out` - Should be applied only to table heading (inside thead) and will gray out the entire column
- ---
- `#tinymce-area.simple-editor` - Simple editor with one line of tools
- `#tinymce-area.advanced-editor` - Advanced editor with two lines of tools
- `#tinymce-area.advanced-editor.no-blocks-editor` -  Advanced editor without floating Drag & Drop controls, to give it the look of a plain text editor

```
<!-- Main container -->
<div class="container-main d-flex justify-content-between">
    <!-- Left sidebar -->
    <div class="l-sidebar d-inline-flex flex-column">
        <!-- Left sidebar content, to hide inner scrollbar -->
        <div class="l-sidebar__content">
        </div>
    </div>
    <!-- Main content (middle of the page) -->
    <div class="m-content d-inline-flex flex-column">
        <!-- Header (toggle sidebar button, logo, phone) -->
        <div class="header row">
        </div>
        <!-- Actual content of the page -->
        <div class="content">
        </div>
    </div>
    <!-- Right sidebar placeholder (so layout doesn't break) -->
    <div class="r-sidebar r-sidebar-placeholder d-inline-flex flex-column"></div>
    <!-- Right sidebar -->
    <div class="r-sidebar d-inline-flex flex-column">
      <!-- Right sidebar content, to hide inner scrollbar -->
      <div class="r-sidebar-inner" id="r-sidebar"></div>
    </div>
</div>
```

#### Right sidebar layout
- `.r-sidebar` is 300px wide
- `.r-sidebar.create-camp-adv` is 330px wide and used for some advanced view page which require more sidebar pace
- `.r-sidebar-inner.no-dd` hides the drag and drop blocks, content and gallery. 
```
<!-- Right sidebar placeholder (so layout doesn't break) -->
<div class="r-sidebar r-sidebar-placeholder d-inline-flex flex-column"></div>
<!-- Right sidebar -->
<div class="r-sidebar d-inline-flex flex-column">
  <!-- Right sidebar content, to hide inner scrollbar -->
  <div class="r-sidebar-inner" id="r-sidebar">
    <div class="sidebar-list">
      <div class="sidebar-list__title">
      <!-- Title goes here -->
      </div>
      <div class="sidebar-list__content">
        <div class="sidebar-list__item d-flex w-100 justify-content-between align-items-center">
            <h5> <!-- Text on left --> </h5>
            <small> <!-- Text on right --> </small>
        </div>
        </div>
    </div>
  </div>
</div>
</div>
```

#### Right sidebar list items
##### Select date range
```
<div class="sidebar-list__item d-flex w-100 align-items-center flex-column checkbox-dependency-container">
  <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="form-check">
      <label class="form-check-label checkbox-dependency">
      <input class="form-check-input" type="checkbox"> <h5> Title </h5> 
      </label>
    </div>
    <small class="caret-dropdown"><i class="fa fa-caret-down"></i></small>
  </div>    
  <div class="sidebar-list__dropdown w-100">
    <h6>Info</h6>
      <div class="collapse flex-column">
        <div class="w-100 d-flex">
          <div class="form-group">
            <small> Small info </small> 
            <div class="spacing-xs"></div>
            <input class="form-control form-control-sm">
          </div>
        </div>
        <div class="d-flex w-100">
        <div class="form-group w-100">
          <label class="no-margin"> Opened during specific period </label>
          <small class="form-text text-muted"> From </small>
          <input class="form-control form-control-sm" type="datetime-local" value="2012-08-19T13:45:00" id="example-datetime-local-input">
          <small class="form-text text-muted"> to </small>
          <input class="form-control form-control-sm" type="datetime-local" value="2017-08-19T13:45:00" id="example-datetime-local-input">
          <div class="spacing-xs"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

##### Regular input 
```
<div class="sidebar-list__item d-flex w-100 align-items-center flex-column checkbox-dependency-container">
  <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="form-check">
      <label class="form-check-label checkbox-dependency">
      <input class="form-check-input" type="checkbox"> <h5> Title </h5> 
      </label>
    </div>
    <small class="caret-dropdown"><i class="fa fa-caret-down"></i></small>
  </div>    
  <div class="sidebar-list__dropdown w-100">
    <h6>Text </h6>
    <div class="collapse flex-column">
      <div class="d-flex w-100">
        <div class="form-group w-100">
        <small> Small text </small>
        <div class="spacing-xs"></div>
        <input type="text" class="form-control form-control-sm" placeholder="">
        </div>
      </div>
    </div>
  </div>
</div>
```

##### Inputs with include/exclude select
```
<div class="sidebar-list__item d-flex w-100 align-items-center flex-column checkbox-dependency-container">
  <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="form-check">
      <label class="form-check-label checkbox-dependency">
      <input class="form-check-input" type="checkbox"> <h5> Datafield targeting </h5> 
      </label>
    </div>
    <small class="caret-dropdown"><i class="fa fa-caret-down"></i></small>
  </div>    
  <div class="sidebar-list__dropdown w-100">
    <h6>Select desired field(s) and filtering rules to configure data-field targeting</h6>
    <div class="collapse">
      <div class="d-flex w-100 flex-column">
        <div class="spacing-xs"></div>
        <div class="form-group form-inline d-flex w-100 no-margin">
          <input type="text" class="form-control form-control-sm col-3" placeholder="">
          &nbsp;
          <select class="form-control form-control-sm col-4">
            <option value="0">don`t use</option>
            <option value="1">exact match</option>
          </select>
          &nbsp;
          <input type="text" class="form-control form-control-sm col-4" placeholder="">
          <br>            
        </div>    
      </div>
    </div>
  </div>
</div>
```

##### Regular text and button
```

<div class="sidebar-list__item d-flex w-100 align-items-center flex-column checkbox-dependency-container">
  <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="form-check">
      <label class="form-check-label checkbox-dependency">
        <input class="form-check-input" type="checkbox"> 
        <h5> Select from list </h5> 
      </label>
    </div>
    <small class="caret-dropdown"><i class="fa fa-caret-down"></i></small>
  </div>
  <div class="sidebar-list__dropdown w-100 justify-content-start align-items-center collapse">
    <a class="btn btn-secondary btn-sm" href="#">Email Lists </a> &nbsp;
    <h6 class="no-margin">0 selected</h6>
  </div>
</div>
```
##### Regular input/textarea send
```
<div class="sidebar-list__item d-flex w-100 align-items-center flex-column checkbox-dependency-container">
  <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="form-check">
      <label class="form-check-label checkbox-dependency">
        <input class="form-check-input" type="checkbox"> 
        <h5> Send a test campaign </h5> 
      </label>
    </div>
    <small class="caret-dropdown"><i class="fa fa-caret-down"></i></small>
  </div>   
  <div class="sidebar-list__dropdown w-100 justify-content-start align-items-center">
    <h6>Provide email addresses for testing</h6>
      <div class="collapse">
        <div class="form-group w-100">
          <input type="email" class="form-control form-control-sm" placeholder="Enter email">
          <small class="form-text text-muted">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox"> <h6 class="no-margin"> Send a test campaign </h6> 
            </label>
          </small>
          <div class="spacing-xs"></div>
          <a class="btn btn-sm btn-success" href="#"> Send </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

####  Templates, campaigns, edits
```
<div class="campaigns templates">
  <div class="campaigns-header d-flex align-items-center justify-content-between">
    <div class="campaigns-title">
      Templates
    </div>
    <div class="sort campaigns-sort select-dropdown">
      Sort by:
      <select class="inline-select">
        <option value="camp-lat">Latest</option>
        <option value="camp-fav" selected="">Favorite</option>
        <option value="camp-alp">Alphabetical</option>
      </select>
    </div>
  </div>
  <div class="d-flex align-content-around flex-wrap justify-content-between templates-container">
  <div class="template template-xx">
    <div class="template-image">
      <img/>
    </div>
    <div class="template-info d-flex justify-content-between">
      <div class="text-left align-center">
        <h5></h5>
        <h6></h6>
      </div>
        <i class="like fa fa-heart-o"></i>
      </div>
    </div>  
  </div>
</div>
```

#### Modal example

- `.modal-dialog.modal-wide` - Wider max-width
- `.modal-content.modal-border` - Add gray border to modal, in case it's not used with a backdrop (e.g Login page)
- `.modal-content` - White header
- `.modal-content.modal-danger` - Red header
- `.modal-content.modal-success` - Green header
- `.modal-content.modal-primary` - Blue header
```
<div id="delete-template-modal" class="modal" data-backdrop="static" tabindex="0">
  <div class="modal-dialog" role="document">
    <div class="modal-content modal-danger">
      <div class="modal-header">
        <span class="modal-title">Confirm delete</span>
      </div>
      <div class="modal-body">
        <h5>Are you sure you want to delete the selected template?</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger delete-template">Delete</button>
      </div>
    </div>
  </div>
</div>
```

#### Tabs 

##### Horizontal
```
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" href="#area1" role="tab" data-toggle="tab"><span class="fa fa-remove fa-code fa-lg fa-m-r"></span> Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#area2" role="tab" data-toggle="tab"><span class="fa fa-remove fa-columns fa-lg fa-m-r"></span>Tab 2</a>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="area1">
    Content 1
  </div>
  <div class="tab-pane" id="area2">
    Content 2
  </div>
</div>
```

##### Vertical
```
<div class="vertical-tabs-container row">
  <ul class="nav nav-tabs vertical-tabs col-3" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" href="#area1" role="tab" data-toggle="tab"><span class="fa fa-remove fa-code fa-lg fa-m-r"></span> Tab 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="#area2" role="tab" data-toggle="tab"><span class="fa fa-remove fa-columns fa-lg fa-m-r"></span>Tab 2</a>
    </li>
  </ul>
  <div class="tab-content col-9">
    <div class="tab-pane active" id="area1">
      Content 1
    </div>
    <div class="tab-pane" id="area2">
      Content 2
    </div>
  </div>
</div>
```
