define(['jquery'],function($){
	var $loginCheck = $('#login-check'),
		dismiss = '[data-dismiss="alert"]';

	$loginCheck.on('click',function(){
		
		$(dismiss).parents('.login-error').show();
		console.log($(dismiss).parents('.login-error'))
	})

	$(document).on('click',dismiss,function(){
		$(this).parent().hide();
	})
})