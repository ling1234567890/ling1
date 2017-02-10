requirejs.config({
	//		baseUrl:'js',
	paths: {
		// 别名
		"jquery": "jquery-3.1.1",
		"index": "index-jq"
	},
	shim: {
		"bootstrap.min": {
			deps: ["jquery"],
			exports: "jQuery.fn.min"
		}
	}
});

define(['config'], function() {

	requirejs(['jquery', 'bootstrap.min'], function($, b) {
		$(function() {
			//顶部开始
			//	我的帐号鼠标移入效果
			$('#one_li').hover(function() {
				$('#mem_d1').slideToggle(100);
			});

			//	微博，微信图标鼠标移入效果
			$('#sha_wb').hover(function() {
				$('.heade-wb').toggle();
			});
			$('#sha_wx').hover(function() {
				$('.heade-wx').toggle();
			});
			//顶部结束

			//主体轮播开始
			function lunbo() {
				var _index = 0;
				var playTime = null;
				$(".but ul li").hover(function() { //鼠标滑到上面要做的事
					clearInterval(playTime); //清除定时器，停止自动轮展
					$(this).addClass("hover").siblings().removeClass("hover");
					//鼠标放上去的那个li添加 class="hover"
					_index = $(this).index(); //鼠标放上去的那个li的序列号
					$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();
				}, function() { //鼠标移开时要做的事
					auto_Play(); //起动自动播放
				});
				//自动轮播
				function auto_Play() {
					playTime = setInterval(function() {
						_index++; //序列号加 index+1
						if (_index > 9) {
							_index = 0;
						}
						$(".but ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
						$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();
					}, 4000);
				}
				auto_Play(); //调用
			}
			lunbo();
			//主体轮播结束

			//限时特卖倒计时开始
			function count_down() {
				//获取元素
				var hour = $('.hour');
				var minute = $('.minute');
				var second = $('.second');
				//		console.log(hour.jquery)
				// 设置开始购买的时间  每天的09：00
				// var endDate = new Date('2016/12/12')
				var end = Date.parse('2017/2/20/09:00');
				var count_down_timer = setInterval(function() {
					var now = Date.now();

					// 计算时间差(s)
					// 剩余时间
					var offset = parseInt((end - now) / 1000);

					// 转换格式：xx时xx分xx秒
					// 剩余时间
					var secLeft = offset % 60; //秒
					var minLeft = parseInt(offset / 60 % 60); //分
					var hourLeft = parseInt(offset / 60 / 60 % 24); //时

					//小于两位数前面补0    补0操作
					if (secLeft < 10) {
						secLeft = '0' + secLeft;
						second.html(secLeft);
					} else {
						second.html(secLeft);
					}
					if (minLeft < 10) {
						minLeft = '0' + minLeft;
						minute.html(minLeft);
					} else {
						minute.html(minLeft);
					}
					if (hourLeft < 10) {
						hourLeft = '0' + hourLeft;
						hour.html(hourLeft);
					} else {
						hour.html(hourLeft);
					}
					//				console.log(hourLeft)
				}, 1000);
			};
			count_down();
			//限时特卖倒计时结束

			//左边锚链接开始
			function floor_location() {

				/*
					思路：
						1）获取页面元素
						2）滚动
							1>滚动距离大于200，显示楼层导航，小于600时隐藏
							2>滚动到某一楼层时，高亮显示导航对应楼层
								计算当前楼层的索引值
						3）点击楼层导航，跳转到相应楼层
				 */
				// 1）获取页面元素
				var $nav = $('#nav');
				var $floor = $('.floor');

				// 2）滚动
				$(window).on('scroll', function() {
					// 获取滚动过的距离
					var scrollTop = $(window).scrollTop();

					// 1>滚动距离大于200，显示楼层导航，小于600时隐藏
					if (scrollTop > 200) {
						$nav.fadeIn();
					} else {
						$nav.fadeOut();
					}

					// 2>滚动到某一楼层时，高亮显示导航对应楼梯
					$floor.each(function(idx, ele) {
						// 当滚动过的距离大于等于当前ele的offsetTop,说明我已经滚动到这个楼层
						/*if(scrollTop >= $(ele).offset().top - $(ele).outerHeight()/3 && scrollTop < $(ele).offset().top + $(ele).outerHeight()/2){
							$nav.find('li').eq(idx).addClass('hover').siblings('li').removeClass('hover');
						}*/
						if ($(ele).offset().top - scrollTop < $(window).height() / 2) {
							$nav.find('li').eq(idx).addClass('current').siblings('li').removeClass('current');
							// return false;
						}

					})
				});

				// 3）点击楼层导航，跳转到相应楼层
				$nav.on('click', 'li', function() {
					var index = $(this).index();
					//保证在正中央:scrollTop = floor.offsetTop - (window.height-floor.height)/2
					var scrollTop = $floor.eq(index).offset().top - ($(window).height() - $floor.eq(index).outerHeight()) / 10;
					$('html,body').animate({
						scrollTop: scrollTop
					});
				});

			};
			floor_location()
				//左边锚链接结束

			//右侧边栏开始
			//我的账户鼠标移入效果
			function show() {
				var $sidebar = $('.sidebar-link');
				var $tab_tip = $('.mui-mbar-tab-tip');
				var $tab = $('.sidebar-link');
				$sidebar.each(function(idx, ele) {
					$(ele).hover(function() {
						$tab_tip.eq(idx).animate({
							right: '38px',
							opacity: 1
						});
					});
				});
				$tab.each(function(idx, ele) {
					$(ele).mouseleave(function() {
						$tab_tip.eq(idx).animate({
							right: '70px',
							opacity: 0,
						}, 200);
					})

				});

			};
			show();

			//购物车点击出现的框开始
			function sidecart_cont(e) {
				$('.sidecart-text').on('click', function() {
					$('.sidecart-cont').css({
						display: ' block'
					})
				});
				//		e.preventDefault();
				//		e.stopPropagation();
				$('.icon-remove-circle').on('click', function() {
					$('.sidecart-cont').css({
						display: ' none'
					})
					console.log(111)
				});

			};
			sidecart_cont();

			function tab_top() {
				var $tab_top = $('.mbar_top');
				$(window).on('scroll', function() {
					// 获取滚动过的距离
					var scrollTop = $(window).scrollTop();

					// 1>滚动距离大于200，显示楼层导航，小于600时隐藏
					if (scrollTop > 200) {
						$tab_top.fadeIn();
					} else {
						$tab_top.fadeOut();
					}
				});
				$tab_top.on('click', function() {
					$('html,body').animate({
						scrollTop: 0
					});
				});

			};
			tab_top();

			//右侧边栏结束
		});
	})

});