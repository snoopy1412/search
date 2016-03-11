define(['layerInit'],function(){

	var width = $(window).width(),
		height = $(window).height();


	if(width >= 768){
		resultWidth = '600px';
		resultHeight = '400px';
	}else{
		resultWidth = (width - 30) + 'px';
		resultHeight = 'auto';
	}

	//弹出一个页面层
	$('#js-register').on('click', function(){
	    layer.open({
	        type: 1,
	        title :'登录',
	        area: [resultWidth, resultHeight],
	        scrollbar: false,
	        shadeClose: true, //点击遮罩关闭
	        content: $('.user-login')
	    });

	});
})