define(['jquery'],function($){
	$('.setting-bar a').on('click',function(e){
		e.preventDefault();
		$('.setting-bar a').removeClass('active');
		$('.setting-content-item').removeClass('active');
		$(this).addClass('active');
		$('.setting-content-item').eq($(this).index()).addClass('active');
	})
})