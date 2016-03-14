define(['jquery'], function($) {

	function Suggest(node, options) {
		this.node = node;
		this.options = $.extend({}, Suggest.DEFAULT, options);
		this.init();
	}

	Suggest.DEFAULT = {
		url: ''
	}

	Suggest.prototype = {
		constructor: Suggest,

		init: function() {
			this.render();
		},

		render: function() {
			var self = this,
				$node = $(this.node),
				$suggest = $node.next(),
				$parentNode = $node.parent();

			// 相对定位
			if ($parentNode) {
				$parentNode.css('position', 'relative');
			}

			var timer = null;

			// keyup事件
			$node.on('keyup', function(event) {
				event.stopPropagation();
				clearTimeout(timer);
				timer = setTimeout(function() {
					self.keyup();
				}, 500);
			});

			// document取消事件
			$(document).on('click', function(event) {
				$suggest.html('').hide();
			});

			// 阻止事件冒泡
			$node.on('click', function(event) {
				event.stopPropagation();
			})
		},

		keyup: function() {

			// 调用ajax
			this.ajax();
		},
		ajax: function() {
			var self = this;

			$.ajax({
				url: self.options.url,

				success: function(response) {
					self.success(response);
				},
				error: function(err) {
					console.error("状态码" + err.status + "， 未找到网页");
				}
			})
		},
		success: function(response) {

			var self = this,
				data = JSON.parse(response).data,
				$node = $(this.node),
				template = '',
				$ul = '',
				$suggest = $node.next(),
				resopnseStr = $node.val();

			// 初始化先清空suggest结果

			$suggest.html('').hide();

			if (resopnseStr.trim()) {
				for (var i = 0, fn; fn = data[i]; i++) {
					if (fn['text'].indexOf(resopnseStr) !== -1) {
						template += '<li><a href="">' + fn['text'] + '</a></li>'
					}
				}

				if (template != '') {
					$ul = "<ul>" + template + "</ul>";
					$suggest.html($ul).show();
				}
			}

		}
	}

	// jquery插件
	$.fn.extend({
		suggest: function(options) {
			this.each(function() {
				new Suggest(this, options);
			});
			return this;
		}
	});
})