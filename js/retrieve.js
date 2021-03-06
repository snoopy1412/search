define(['jquery','validate'],function($,validate){

	$("#retrieve-password-form").validate({
		rules: {
			email: {
				required: true,
				remote:"check.php",
				minlength: 6
			},
			verification :{
				remote:"check.php",
				required: true
			},			
			password: {
				required: true,
				minlength: 6
			},
			confirm_password: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			},

		},
		messages: {
			username: {
				required: "请输入用户名",
				minlength: "用户名必需至少由六个字母组成",
				remote : '用户名已经存在'
			},
			password: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母"
			},
			confirm_password: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母",
				equalTo: "两次密码输入不一致"
			},
			email: {	
				required : "请输入邮箱地址",
				remote : "该邮箱已经存在",
				email : '请输入有效的邮箱地址'
			},
			verification : {
				required : '验证码不能为空',
				remote : '验证码错误'
			},

		},
		errorElement: "div",
			errorPlacement: function ( error, element ) {
				// Add the `help-block` class to the error element
				error.addClass( "validate-msg-error");

				// Add `has-feedback` class to the parent div.form-group
				// in order to add icons to inputs

				if ( element.prop( "type" ) === "checkbox" ) {
					error.insertAfter( element.parent( "label" ) );
				} else {
					error.insertAfter( element );
				}
			},

			highlight: function ( element, errorClass, validClass ) {
				$( element ).parent().addClass( "has-error" ).removeClass( "has-success" );
			},
			unhighlight: function ( element, errorClass, validClass ) {
				$( element ).parent().addClass( "has-success" ).removeClass( "has-error" );
			}
	});
})