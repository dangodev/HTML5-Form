HTML5-Form
==========

JS-fallback for HTML5-style validation (version 0.2)

Description
-----------
This is a JS fallback for IE8 / IE9 that requires no modification to your HTML5. It requires all elements with `required="required"` to be filled out.

It validates based on an input's `type` attribute. Currently it only supports email, but support for the `tel` type will be added in the next version.


Dependencies
------------
- jQuery


Usage
-----
Call

	$('form').html5form();

to initialize. It will then require every input element with a `required` attribute to be filled out and pass validation.

The selector can be a form element, or any other element that contains the elements to be validated.


Options
-------
* `email` - The default error message for an invalid email (default: `Please enter a valid email address`)
* `empty` - The default error message for an empty element (default: `Please fill out this field`)
* `errorClass` - CSS class hook for error messages (default: `error`)
* `errorID` - ID prefix to apply to error messages (default: `errormsg`)
* `invalidClass` - CSS class hook for invalid form elements (default: `invalid`)
* `invalidCSS` - inline style to apply to invalid form elements (default: `{boxShadow: '0 0 4px #f20'}`)
* `showErrors` - set to `1` or `true` to display form errors; set to `0` or `false` to hide them (default: `true`)
* `validCSS` - inline style to override the `invalidCSS` setting (default: `{boxShadow: 'none'`)