define(['jquery'], function($) {
	var Collapse = function(options) {
		this.node = '[data-toggle="collapse"]';
		this.options = $.extend({}, Collapse.default, options);
		this.init()
	}
	Collapse.default = {
		childNum: 5
	}

	Collapse.prototype = {
		constructor: Collapse,
		init: function() {
			var self = this;
			$(this.node).each(function(index, element) {
				var isCollapse = false,
					target = $(element).data('target'),
					targetChildren = $(target).find('.directory-item'),
					originHeight = $(target).outerHeight(), // 总高度
					childrenHeight = $(targetChildren[0]).outerHeight(); // 子元素高度

				// 初始化样式
				$(target).css({
					height: childrenHeight * self.options.childNum,
					overflow: 'hidden'
				})

				// 点击赋值
				$(element).on('click', function(event) {
					event.preventDefault();

					if (!isCollapse) {
						$(target).animate({
							height: originHeight
						});
						$(element).text('收起……');
						isCollapse = true;
					} else {
						$(target).animate({
							height: childrenHeight * self.options.childNum
						});

						$(element).text('更多……');
						isCollapse = false;
					}
				})
			})
		},
	}

	new Collapse()
})