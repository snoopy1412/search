define(['jquery'],function($){
	$('#help-tab').on('click',' .pure-menu-item',function(e){
		e.preventDefault();
		$('.pure-menu-item').removeClass('active');
		$(this).addClass('active');
		$('.help-content .help-item').removeClass('active');
		$('.help-content .help-item').eq($(this).index()).addClass('active');
		console.log($(this).index())
	})
})