define(['jquery'],function($){

	function Tab() {
		this.class = '[data-toggle="tab"]';
		this.init()
	}

	Tab.prototype = {
		constructor: Tab,
		init: function() {
			this.tab();
		},
		tab: function() {
			var $tabs = $(this.class);
			$tabs.each(function(index, element) {
				$(this).on('click', function(event) {
					// 阻止默认事件，防止a target 的跳转；
					event.preventDefault();

					var id = $(this).attr('href').substring(1);
					
					$tabs.removeClass('active');
					$(this).addClass('active');
					
					$('.tab-content .tab-pane').removeClass('active');
					$('#' + id).addClass('active');
				})
			})
		}
	}

	// 全局初始化
	new Tab();

})