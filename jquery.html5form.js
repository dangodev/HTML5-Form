$.fn.html5form = function(options) {

	// Default Settings (don't adjust here!)
	var settings = $.extend({
		email			:	'Please enter a valid email address',
		empty			:	'Please fill out this field',
		errorClass		:	'error',
		errorID			:	'errormsg',
		invalidClass	:	'invalid',
		invalidCSS		:	{boxShadow: '0 0 4px #f20'},
		showErrors		:	true,
		validCSS		:	{boxShadow: 'none'}
	}, options);
	
	var container = this;
	var invalid = [];
	var boxshadows = [];
	container.submit(function() {
		invalid = [];
		$(this).find('input[required], select[required], textarea[required]').each(function(i, e) {
			switch($(this).attr('type')) {
				case 'email' :
					var exp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i; 
					if(!exp.test($(this).val())) errorDisplay(i, e, settings.email);
					break;
				default :
					if($(this).val().length == 0) errorDisplay(i, e, settings.empty);
					break;
			}
		});
		if(invalid.length > 0) {
			$(invalid[0]).focus();
			return false;	
		}
	});
	
	
	function errorDisplay(i, e, msg) {
		if($('#'+settings.errorPrefix+'-'+i).length == 0 && settings.showErrors) {
			$(e).after('<div id="'+settings.errorID+'-'+i+'" class="'+settings.errorClass+'">'+msg+'</div>');
		}
		$(e).addClass(settings.invalidClass).css(settings.invalidCSS).live('keyup change', function() {
			if($(e).val().length > 0) {
				$('#'+settings.errorID+'-'+i).hide(300).remove();
				$(this).removeClass(settings.invalidClass).css(settings.validCSS);
			}
		});
		invalid.push(e);
	}
}