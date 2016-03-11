define(['jquery', 'validate'], function($, validate) {
	// var dismiss = '[data-dismiss="alert"]';


	$(document).on('click', '[data-dismiss="alert"]', function() {
		$(this).parent().hide();
	})


	$('#login-form').on('invalid-form.validate', function() {
		$('.login-error').show();
	}).validate({
		rules: {
			username: {
				required: true,
				remote: "check.php",
			},
			password: {
				required: true,
				remote: "check.php",
			}
		},
		messages: {
			username: {
				required: "",
				remote: ''
			},
			password: {
				required: "",
				remote: ''
			},
		},
	})
})