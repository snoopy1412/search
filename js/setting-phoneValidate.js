define(['jquery'], function() {

	//绑定手机号的逻辑

	// 点击出现handle界面
	$('#binding-mobile').on('click', function(e) {
		e.preventDefault();

		showHandle();

		var str = $('#phone-str').text(); //手机号显示值

		if (typeof parseInt(str) !== 'number' || !parseInt(str)) {
			$('#confirm_phone').val('');
		} else {
			$('#confirm_phone').val(parseInt(str));
		}
	})

	$('#success-mobile').on('click', function(e) {
		e.preventDefault();

		showResult();

		var str = $('#confirm_phone').val();

		// 判断str的值是否符合手机号的格式
		var num = parseInt(str, 10);

		if (isPhone(num)) {
			// ajax区域预留

			$('#phone-str').text(str);
		} else {
			alert('手机号格式错误！')
		}
	})

	$('#cancel-mobile').on('click', function(e) {
		e.preventDefault();
		showResult();
		$('#confirm_phone').val('');
	});

	// 显示操作区
	function showHandle() {
		$('.phone-show').hide();
		$('.phone-handle').show();
	}

	// 显示绑定结果
	function showResult() {
		$('.phone-show').show();
		$('.phone-handle').hide();
	}

	//手机号的正则表达式
	function isPhone(num) {
		var re = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
		return re.test(num) ? true : false;
	}
})