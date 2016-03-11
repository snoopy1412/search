define(['jquery','setting-validate'],function($){
	$('.setting-bar a').on('click',function(e){
		e.preventDefault();
		$('.setting-bar a').removeClass('active');
		$('.setting-content-item').removeClass('active');
		$(this).addClass('active');
		$('.setting-content-item').eq($(this).index()).addClass('active');
	})


	$('#binding-mobile').on('click',function(e){
		e.preventDefault()
		$('.phone-show').hide();
		$('.phone-handle').show();
		var str = $('#phone-str').text();

		console.log(parseInt(str),typeof parseInt(str))
		if( typeof parseInt(str) !== 'number' || !parseInt(str)){
			$('#confirm_phone').val('');
		}else{
			$('#confirm_phone').val(parseInt(str));
		}
	})
	$('#cancel-mobile').on('click',function(e){
		e.preventDefault();
		$('.phone-show').show();
		$('.phone-handle').hide();
		$('#confirm_phone').val('');
	});

	$('#success-mobile').on('click',function(e){
		e.preventDefault()
		$('.phone-show').show();
		$('.phone-handle').hide();
		var str = $('#confirm_phone').val();
		$('#phone-str').html(str);
	})

})