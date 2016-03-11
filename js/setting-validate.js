define(['jquery', 'validate'], function() {
	$('#change-password').validate({
		submitHandler:function(form) {
			$(form).ajaxSubmit();  
		},
		rules: {
			old_password: {
				required: true,
				remote: 'check.php'
			},
			password: {
				required: true,
			},
			confirm_password: {
				required: true,
				equalTo: "#password"
			}
		},
		messages: {
			old_password: {
				required: "当前密码不能为空",
				remote: '当前密码错误'
			},
			password: {
				required: "新密码不能为空"
			},
			confirm_password: {
				required: '请再次确认新密码',
				equalTo: '两次密码不一致'
			}
		},
		errorPlacement: function(error, element) {
			// Add the `help-block` class to the error element
			error.addClass("validate-msg-error");

			// Add `has-feedback` class to the parent div.form-group
			// in order to add icons to inputs

			if (element.prop("type") === "checkbox") {
				error.insertAfter(element.parent("label"));
			} else {
				error.insertAfter(element);
			}
		},

		highlight: function(element, errorClass, validClass) {
			$(element).parent().addClass("has-error").removeClass("has-success");
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parent().addClass("has-success").removeClass("has-error");
		}
	});

	// $('#phone-validate').validate()
})