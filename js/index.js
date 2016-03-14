define(['jquery','suggest'],function($,suggest){

	// ajax响应格式约定为 
	// [{ "text" : "甲醛" }]，可修改
	$('#js-suggest').suggest({
		url : 'http://localhost:2015/data.json'
	});
})