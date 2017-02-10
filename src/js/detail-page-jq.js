define(['config'], function() {
	requirejs(['jquery', 'index', 'bootstrap.min','detail-page-jq','jquery.gdszoom'], function($, i, b ,d,j) {
			
			//滚动条事件 顶部悬浮
			$(function() {
				//获取要定位元素距离浏览器顶部的距离
				var navH = $("#xuanting").offset().top;
				$(window).scroll(function() {
					//获取滚动条的滑动距离
					var scroH = $(this).scrollTop();
					//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
					if (scroH >= navH) {
						$("#xuanting").css({
							"position": "fixed",
							"top": 0
						});
						$("#xuanting").addClass('ss');
					} else{
						$("#xuanting").css({
							"position": "static"
						});
						$("#xuanting").removeClass('ss');
					}
				});
				//放大镜
				$('.product-pic').gdszoom();
			});
		
		
	});
});
