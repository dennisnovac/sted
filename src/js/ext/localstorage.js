"use strict";
/* global global: false */
var console = require("console");
var ko = require("knockout");
var $ = require("jquery");

// Set current date
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var currentDate = d.getFullYear() + '/' +
((''+month).length<2 ? '0' : '') + month + '/' +
((''+day).length<2 ? '0' : '') + day;

var lsLoader = function(hash_key, emailProcessorBackend) {
  var mdStr = global.localStorage.getItem("metadata-" + hash_key);
  if (mdStr !== null) {
    var model;
    var td = global.localStorage.getItem("template-" + hash_key);
    if (td !== null) model = JSON.parse(td);
    var md = JSON.parse(mdStr);
    return {
      metadata: md,
      model: model,
      extension: lsCommandPluginFactory(md, emailProcessorBackend)
    };
  } else {
    throw "Cannot find stored data for "+hash_key;
  }
};

var lsCommandPluginFactory = function(md, emailProcessorBackend) {
  var commandsPlugin = function(mdkey, mdname, viewModel) {

    // console.log("loading from metadata", md, model);
    var saveCmd = {
      name: 'Save', // l10n happens in the template
      enabled: ko.observable(true)
    };
    saveCmd.execute = function() {
      saveCmd.enabled(false);
      viewModel.metadata.changed = Date.now();
      if (typeof viewModel.metadata.key == 'undefined') {
        console.warn("Unable to find key in metadata object...", viewModel.metadata);
        viewModel.metadata.key = mdkey;
      }
      var edits = JSON.parse(global.localStorage.getItem('edits'));
      var templates = global.localStorage.getItem('templates');

      if (edits.indexOf(mdkey) < 0 || typeof edits !== 'object' || templates.indexOf(mdkey) > 0){

        var newKey = Math.random().toString(36).substr(2, 7);

        global.localStorage.setItem('edits', JSON.stringify(edits));
        global.localStorage.setItem("metadata-" + newKey, viewModel.exportMetadata());
        global.localStorage.setItem("template-" + newKey, viewModel.exportJSON());
      
        if($('#main-wysiwyg-area').html().length && $('.code-editor').length){
          
          var savedEdit = JSON.parse(global.localStorage.getItem("metadata-" + newKey, viewModel.exportMetadata()));
          savedEdit.desc = 'Code your own';
          savedEdit.key = newKey;
          viewModel.edits.push({ created: currentDate, title: 'Untitled draft', key: newKey, name: 'versafix-1', template: 'templates/versafix-1/template-versafix-1.html', desc: 'Code your own' });

          global.document.location = 'code-campaign.html#'+newKey;
        } else {
          global.document.location = 'advanced-campaign.html#'+newKey;
        }
        
      } else {
          global.localStorage.setItem("metadata-" + mdkey, viewModel.exportMetadata());
          global.localStorage.setItem("template-" + mdkey, viewModel.exportJSON());
      }
      
      saveCmd.enabled(true);
    };
    var testCmd = {
      name: 'Test', // l10n happens in the template
      enabled: ko.observable(true)
    };
    var downloadCmd = {
      name: 'Download', // l10n happens in the template
      enabled: ko.observable(true)
    };
    testCmd.execute = function() {
      testCmd.enabled(false);
      var email = global.localStorage.getItem("testemail");
      if (email === null || email == 'null') email = viewModel.t('Insert here the recipient email address');
      email = global.prompt(viewModel.t("Test email address"), email);
      if (email.match(/@/)) {
        global.localStorage.setItem("testemail", email);
        console.log("TODO testing...", email);
        var postUrl = emailProcessorBackend ? emailProcessorBackend : '/dl/';
        var post = $.post(postUrl, {
          action: 'email',
          rcpt: email,
          subject: "[test] " + mdkey + " - " + mdname,
          html: viewModel.exportHTML()
        }, null, 'html');
        post.fail(function() {
          console.log("fail", arguments);
          viewModel.notifier.error(viewModel.t('Unexpected error talking to server: contact us!'));
        });
        post.success(function() {
          console.log("success", arguments);
          viewModel.notifier.success(viewModel.t("Test email sent..."));
        });
        post.always(function() {
          testCmd.enabled(true);
        });
      } else {
        global.alert(viewModel.t('Invalid email address'));
        testCmd.enabled(true);
      }
    };
    downloadCmd.execute = function() {
      downloadCmd.enabled(false);
      viewModel.notifier.info(viewModel.t("Downloading..."));
      viewModel.exportHTMLtoTextarea('#downloadHtmlTextarea');
      var postUrl = emailProcessorBackend ? emailProcessorBackend : '/dl/';
      global.document.getElementById('downloadForm').setAttribute("action", postUrl);
      global.document.getElementById('downloadForm').submit();
      downloadCmd.enabled(true);
    };

    viewModel.save = saveCmd;
    viewModel.test = testCmd;
    viewModel.download = downloadCmd;
  }.bind(undefined, md.key, md.name);

  return commandsPlugin;
};

module.exports = lsLoader;
