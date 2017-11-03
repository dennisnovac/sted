// Switch to mobile/desktop view
function renderLogo(){
	if($('.l-sidebar').hasClass('collapsed')){
		$('.logo').css('left', ($('.m-content').outerWidth() / 2) - 62);
	} else {
		$('.logo').css('left', ($('.m-content').outerWidth() / 2) - 62 + 230);
	}
}

function renderView(){
	var sidebarToggle = '<div class="r-sidebar-toggle"><i class="fa fa-spin fa-gear"></i></div>';
	if($(window).width() < 980){
		$('body').addClass('mobile-view');
		$('.r-sidebar').not('.r-sidebar-placeholder').prepend(sidebarToggle);
	} else {
		$('body').removeClass('mobile-view');
		$('.r-sidebar').find('.r-sidebar-toggle').remove();
	}
	renderLogo();
}

// Toggle support icon
function toggleSupport(){
	if($('.m-content').width() < 670){
		$('.support-phone .support').hide();
	} else {
		$('.support-phone .support').show();
	}
}

// Toggle delete all button
function deleteCheckedButton(){
	if($('.remove-checkboxes .remove-checkbox-placeholder').is(':checked')){
    $('.delete-checked').show();
  } else {
    $('.delete-checked').hide();
  }
}

// Toggle all checkboxes status
function toggleAllCheckboxesStatus(){
	var all = $('.remove-checkboxes .remove-checkbox-placeholder').length;
	var checked = $('.remove-checkboxes .remove-checkbox-placeholder:checked').length;
	var targetCheckbox = $('.all-remove-checkboxes');
	 if (checked == 0) {
		targetCheckbox.prop('checked', false);
		targetCheckbox.css('opacity', '1');
	} else if (checked > 0 && checked < all){
		targetCheckbox.prop('checked', true);
		targetCheckbox.css('opacity', '0.5');
	} else if (all <= checked) {
		targetCheckbox.prop('checked', true);
		targetCheckbox.css('opacity', '1');
	}
}

// Resize template previews
function resizeTemplates(){
	var contentWidth = $(".m-content").width();

	if (contentWidth < 715) {
		$(".template, .template-placeholder").css({"width": "100%", "min-width": "0"});
	}
	else if (contentWidth < 900) {
		$(".template, .template-placeholder").css({"width": "calc(33.3% - 15px)", "min-width": "230px"});
	}
	else if (contentWidth < 1180) {
		$(".template, .template-placeholder").css("width", "calc(25% - 15px)");
	} 
	else if (contentWidth < 1414) {
		$(".template, .template-placeholder").css("width", "calc(20% - 15px)");
	}
	else if( contentWidth > 1414) {
		$(".template, .template-placeholder").css("width", "calc(16.6% - 15px)");	
	}
}

// Change table to horizontally scrollable when it gets too wide
function tableScrollable(){
	$('.table-responsive').each(function(){
		if($(this).width() > $('.m-content .content').width()){
			$(this).addClass('table-scrollable');
		} else {
			$(this).removeClass('table-scrollable');
		}
	});
}

// Gray out table columns (for admins/users)
function grayoutColumn(){
	$.each($('table thead .grayed-out'), function(){
		var column = $(this);
		var columnIndex = $(this).index();
		var columnTable = column.closest('table');
		columnTable.find('tbody tr').each(function(){
			$(this).children(':eq('+columnIndex+')').addClass('grayed-out-content');
		});
	});
}

// Validate regular and email inputs, forms
var verifyEmail = $("<h5 class='form-text warning-feedback'>Since replies to your campaign will go to this email address, let's verify <a id='verify-email'><u>this email</u></a></h5>");
var verifySuccess = $("<h5 class='form-text valid-feedback'>An email has been sent to this email address.<br> Please check your inbox and confirm the 'From Email' of your campaign.</h5>");
var emailError = $("<h5 class='form-text invalid-feedback'>Please enter a valid email address</a></h5>");
var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
var isInvalid = $(this).siblings('.invalid-feedback').length;
var isValid = $(this).siblings('.valid-feedback').length;
var isWarning = $(this).siblings('.warning-feedback').length;
var DMARC = false;

function emailValidation(id){
	$('#'+id).addClass('is-invalid');
	if(!isInvalid.length){
		$('#'+id).siblings('h5.form-text').remove();
		emailError.insertAfter($('#'+id));
	}
}

function regularValidation(id){
	if($('#'+id+'.required').val() == ''){
		$('#'+id).addClass('is-invalid');
	} else {
		$('#'+id).removeClass('is-invalid');
	}
}

function validateForm(form, validateButton){
		var has_empty = false;
  	form.find('.required').each(function () {
      if (!$(this).val() || $(this).hasClass('is-invalid')) {
       	validateButton.prop('disabled', true);
        has_empty = true; 
        return false; 
	    } 
	  });

   if (has_empty){ 
   	  validateButton.prop('disabled', true);
   	  return false; 
   } else {
   		validateButton.prop('disabled', false);
   }
}

function validateCampaignForm(){
	if($('#campaignName').hasClass('is-invalid') || $('#campaignSubject').hasClass('is-invalid') || 
		!$('#fromEmail').hasClass('is-valid') || 
		$('#fromName').hasClass('is-invalid') || 
		!$('#replyToEmail').hasClass('is-valid')){
		$('#send-campaign').prop('disabled', true);
		return false;
	} else {
		$('#send-campaign').prop('disabled', false);
	}
}

function validateSimpleCampaignForm(){
	if($('#fromName').hasClass('is-invalid') || $('#campaignSubject').hasClass('is-invalid') || 
		!$('#fromEmail').hasClass('is-valid')){
		$('#send-simple-campaign').prop('disabled', true);
	} else {
		$('#send-simple-campaign').prop('disabled', false);
	}
}

function validateTemplateForm(){
	if($('#templateName').hasClass('is-invalid') || $('#templateDesc').hasClass('is-invalid') || $('#templateName').val() == '' || $('#templateDesc').val() == ''){
		$('#save-template-confirm').prop('disabled', true);
		return false;
	} else {
		$('#save-template-confirm').prop('disabled', false);
	}
}

function clearInputs(path){
	$('form#'+path+' input').val('');
	$('form#'+path+' input').removeClass('is-valid');
	$('form#'+path+' input').removeClass('is-invalid');
	$('form#'+path+' input').prop('readonly', false);
	$('form#'+path+' input').siblings('h5.form-text').remove();
}


// On resize
$(window).resize(function(){
	renderView();
	setTimeout(function(){
		toggleSupport();
		tableScrollable();
		resizeTemplates();
	},300);
});

// On ready
$(document).ready(function(){

	grayoutColumn();
	renderView();
	setTimeout(function(){
		toggleSupport();
		tableScrollable();
		resizeTemplates();
	},300);

	// Check if sidebar should be collapsed or not
  if (document.cookie.replace(/(?:(?:^|.*;\s*)sidebarCollapsed\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    $(".l-sidebar").addClass("collapsed");
  }

	setTimeout(resizeTemplates, 180);

	$(".collapse-sidebar").on('click', function(){
		if($('.l-sidebar').hasClass('collapsed')){
			document.cookie = "sidebarCollapsed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
		} else {
			document.cookie = "sidebarCollapsed=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
		}
		$(".l-sidebar").toggleClass('collapsed');
		renderLogo();
		setTimeout(resizeTemplates, 210);
	});

	$(document).on('click', '.r-sidebar-toggle', function(){
		$(".r-sidebar").toggleClass('visible');
	});

	// Keep nav li expanded and active if child is active;
  if ($('.nav-link-inner').hasClass('active')){ 
  	$('.nav-link-inner.active').parent('.collapse').addClass('show');
  }

  // Settings modal opt
  $('.nav-user-settings').on('click', function(){
		$('#settings-modal').modal('toggle');
		$('#settings-modal .nav-item a').trigger('click');
	});

	$('#add-sub-user').on('click', function(){
		$('#add-sub-user-table').show();
		$('#sub-users-table').hide();
	});

	$('#add-sub-user-table button[type="reset"]').on('click', function(){
		$('#add-sub-user-table').hide();
		$('#sub-users-table').show();
	});


	//Sidebar checkbox depency for dropdowns & caret rotate
	$(".r-sidebar .checkbox-dependency").on('click', function(evt){
		if(evt.target.tagName == 'INPUT'){
			if($(this).children(".form-check-input").prop('checked') == true) {
				$(this).closest(".checkbox-dependency-container").find(".collapse").addClass("show");
				$(this).closest(".checkbox-dependency-container").find(".caret-dropdown").addClass("show-dropdown");
			} else {
				$(this).closest(".checkbox-dependency-container").find(".collapse").removeClass("show");
				$(this).closest(".checkbox-dependency-container").find(".caret-dropdown").removeClass("show-dropdown");
			}
		}
	});

	$(".r-sidebar .checkbox-dependency-container .caret-dropdown").on('click', function(){
		$(this).closest(".checkbox-dependency-container").find(".collapse").toggleClass("show");
		if($(this).hasClass("show-dropdown")){
			$(this).removeClass("show-dropdown");
		}
		else {
			$(this).addClass("show-dropdown");
		}
	});

	// Adjust preview height for iFrame
	$("#previewFrameToggle").on('click', function(){
		if(!$(this).hasClass("active")){
			$("#preview-frame").contents().find('html').css('background-color', '#fff');
			$("#preview-frame").height(1000);
			$("#preview-frame").css('max-height', '635px');

			$("#preview-toolbar").on('click', function(){
				if($('#frame-container').hasClass('desktop')){
					$("#preview-frame").css('max-height', '635px');
				} else if ($('#frame-container').hasClass('tablet')){
					$("#preview-frame").css('max-height', '555px');
				} else if ($('#frame-container').hasClass('mobile')){
					$("#preview-frame").css('max-height', '465px');
				}
			});
		}
	});

	// File Explorer check checkboxes	
	$('#file-explorer').on('click', '.remove-checkbox', function(){
		$(this).next().trigger('click');
		toggleAllCheckboxesStatus();
		deleteCheckedButton();
	});

	// Prevent focusing checkboxes
	$('#file-explorer').on('focus', 'input:checkbox', function(){
		$(this).blur();
	});

	// Toggle all checkboxes
	$('.all-remove-checkboxes').on('click', function(){
		if($('.remove-checkboxes .remove-checkbox-placeholder').is(':checked')){
			$('.remove-checkboxes .remove-checkbox-placeholder').prop('checked', true);
			$('.remove-checkboxes .remove-checkbox').trigger('click');
			toggleAllCheckboxesStatus();
			deleteCheckedButton();
		} else {
			$('.remove-checkboxes .remove-checkbox-placeholder').prop('checked', false);
			$('.remove-checkboxes .remove-checkbox').trigger('click');
			toggleAllCheckboxesStatus();
			deleteCheckedButton();
		}
	});

	// Forms validation
	$('button[type="reset"]').on('click', function(){
		clearInputs($(this).closest('form').prop('id'));
	});

	$('form#advanced-campaign-form input').on('keyup blur', function(){
		regularValidation($(this).prop('id'));
		validateCampaignForm();
	});

	$('form#simple-campaign-form input').on('keyup blur', function(){
		regularValidation($(this).prop('id'));
		validateSimpleCampaignForm();
	});

	$('form#save-template-form input').on('keyup blur', function(){
		regularValidation($(this).prop('id'));
		validateTemplateForm();
	});

	$('form#settings-form input').on('keyup blur', function(){
		regularValidation($(this).prop('id'));
		validateForm($('form#settings-form'), $('#settings-form-save'));
	});

	$('form#first-login-address-form input').on('keyup blur', function(){
		regularValidation($(this).prop('id'));
		validateForm($('form#first-login-address-form'), $('#first-login-address-form-save'));
	});

	$('#save-template-cancel').on('click', function(){
		clearInputs('save-template-form');
	});

	// Clear inputs and scroll to top
	$('#clear-inputs').on('click', function(){
		clearInputs('advanced-campaign-form');
		validateCampaignForm();
		$('html,body').animate({ scrollTop: 0 }, 'slow');
	});

	// Validate "reply to" email address 
	$("#replyToEmail").on('keyup blur click', function(){
		if(!email_regex.test($(this).val())){
			emailValidation($(this).prop('id'));
			$(this).removeClass('is-valid');
			$(this).addClass('is-invalid');
		} else {
			$(this).removeClass('is-invalid');
			$(this).addClass('is-valid');
			$(this).siblings('h5.form-text').remove();
		}
	});

	// Validate "from" email
	$("#fromEmail").on('keyup blur click', function(){
		if(!email_regex.test($(this).val())){
			emailValidation($(this).prop('id'));
		} else {
			$(this).removeClass('is-invalid');
			if (!isWarning && isValid){
				return false;
			} else if(!isWarning) {
				$(this).siblings('h5.form-text').remove();
				verifyEmail.insertAfter(this);
			}
			
			$('#verify-email').on('click', function(){
				$(this).parent().siblings('#fromEmail').prop('readonly', true);
				$(this).parent().siblings('#fromEmail').addClass('is-valid');
				$(this).parent().siblings('small.form-text').remove();
				verifyEmail.replaceWith(verifySuccess);
				if($('form#simple-campaign-form').length){
					validateSimpleCampaignForm();
				} else if ($('form#advanced-campaign-form').length){
					validateCampaignForm();
				}
			});
		}
	});

	// DMARC Email (edit accordingly to filter required emails)
	$('#fromEmail').on('blur', function(){
		if(DMARC == false){
			if($(this).val().indexOf('.com') > -1){
				$('#DMARC-modal').modal('show');
				DMARC = true;
			}
		}
	});

});

// File explorer key controll
$(document).keydown(function(e){
  var currentSelected = $('.exp-item.key-selected');
  if(!$(e.target).is('input, textarea, .modal')){
    // Keyup
    if (e.keyCode == 40 && !currentSelected.is(':last-child')) {
      e.preventDefault();
      currentSelected.removeClass('key-selected');
      currentSelected.next().addClass('key-selected');
      if(!currentSelected.length){
        $('.exp-item-container').find('.exp-item:first-child').addClass('key-selected');
      }
    }
    // Keydown
    else if (e.keyCode == 38 && !currentSelected.is(':first-child')) {
      e.preventDefault();
      if(!currentSelected.length){
        $('.exp-item-container').find('.exp-item:first-child').addClass('key-selected');
      }
      currentSelected.removeClass('key-selected');
      currentSelected.prev().addClass('key-selected');
    }
    // Enter
    else if (e.keyCode == 13){
      currentSelected.find('.media-items-block div:first-child').trigger('click');
    }
    // Back
    else if (e.keyCode == 8){
      $('.parent-folder').trigger('click');
    }
    // Delete
    else if (e.keyCode == 46){
      currentSelected.find('.delete-item').trigger('click');
    }
    // Space (checkbox)
    else if (e.keyCode == 32){
      currentSelected.find('.remove-checkbox').trigger('click');
      if(currentSelected.find('.remove-checkbox').next().prop('checked') == true){
        currentSelected.find('.remove-checkbox').next().prop('checked', true);
      } else {
        currentSelected.find('.remove-checkbox').next().prop('checked', false);
      }
      toggleAllCheckboxesStatus();
      deleteCheckedButton();
    }
   }
});