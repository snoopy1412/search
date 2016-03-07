define([],function(){
	//弹出一个页面层
	$('#js-register').on('click', function(){
	    layer.open({
	        type: 1,
	        area: ['600px', '400px'],
	        shadeClose: true, //点击遮罩关闭
	        content: $('.user-login')
	    });
	});
})