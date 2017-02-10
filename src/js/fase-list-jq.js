define(['config'], function() {
	requirejs(['jquery', 'index', 'bootstrap.min','jquery.cookie','fase-list-jq'], function($,i,b,j,f) {
		$(function() {

			//产品分类点击效果
			function tianjia() {
				var $rvmu = $('.rvmu');
				var $rvmu_ul = $('.rvmu ul');
				$rvmu.each(function(idx, ele) {
					$(ele).on('click', function() {
						$(ele).toggleClass('ahover'); //添加/删除类
						$rvmu_ul.eq(idx).toggle(); //显示隐藏切换
					});
				});

			};
			tianjia();

			//可见的分类
			function classify_show() {
				$.ajax({
					type: "get", //方法类型
					url: "../html/data/classify_show.json", //请求地址    
					dataType: 'json', //数据类型 
					success: function(data) {
						$.each(data, function(index1, values) { // 解析出data对应的Object数组 
							$.each(values, function(index2, value) { // 遍历Object数组 ，每个对象的值存放在value ，index2表示为第几个对象
								//						console.log(values)
								var $a = $('<a/>');
								$a.html(value).addClass('action-cat-filter').appendTo('#entries1');
							});
						});
					}
				});
			};
			classify_show();

			//隐藏的分类
			function classify_hide() {
				$.ajax({
					type: "get", //方法类型
					url: "../html/data/classify_hide.json", //请求地址    
					dataType: 'json', //数据类型 
					success: function(data) {
						var $span = $('<span/>').appendTo('.filter-entries-values');
						$span.addClass('filter-item-hide');
						$.each(data, function(index1, values) { // 解析出data对应的Object数组 
							$.each(values, function(index2, value) { // 遍历Object数组 ，每个对象的值存放在value ，index2表示为第几个对象
								//						console.log(values)
								var $a = $('<a/>');
								$a.html(value).addClass('action-cat-filter').appendTo($span);
							});
						});
					}
				});
			};
			classify_hide();

			//点击隐藏的分类显示隐藏切换
			function cut() {
				var $entries = $('.filter-entries-more');
				var $cut = $('.filter-entries-values span');
				var $text = $('.text');
				var $icon = $('.icon-caret-down');
				console.log($cut);
				$entries.each(function(idx, ele) {
					$(ele).on('click', function() {
						$icon.toggleClass('icon-caret-up')
					});
				});
			};
			cut();

			//可见的品牌
			function brand_show() {
				$.ajax({
					type: "get", //方法类型
					url: "../html/data/brand_show.json", //请求地址    
					dataType: 'json', //数据类型 
					success: function(data) {
						$.each(data, function(index1, values) { // 解析出data对应的Object数组 
							$.each(values, function(index2, value) { // 遍历Object数组 ，每个对象的值存放在value ，index2表示为第几个对象
								var $a = $('<a/>');
								$a.html(value).addClass('action-cat-filter').appendTo('#entries2');
							});
						});
					}
				});
			};
			brand_show();

			//可见的功效
			function effect_show() {
				$.ajax({
					type: "get", //方法类型
					url: "../html/data/effect_show.json", //请求地址    
					dataType: 'json', //数据类型 
					success: function(data) {
						$.each(data, function(index1, values) { // 解析出data对应的Object数组 
							$.each(values, function(index2, value) { // 遍历Object数组 ，每个对象的值存放在value ，index2表示为第几个对象
								var $a = $('<a/>');
								$a.html(value).addClass('action-cat-filter').appendTo('#entries3');
							});
						});
					}
				});
			};
			effect_show();
			
			
			;(function($) {
				var num = 12; //每页显示的个数
				var n = 0;
				var m = -num;

				function ajax(pageType) {
					var oul = $(".garry-show").find("ul");
					var ohtml = "";
					$.ajax({
						type: "get",
						url: "data/tabulated_data.json",
						dataType: "json",
						success: function(data) {
							$(oul).empty();//empty(); 清空内容
							if (n < data.length && pageType == "next") { //上一页
								n += num;
								m += num;
							} else if (m > 0 && pageType == "prev") { //下一页
								n -= num;
								m -= num;
							} else if (pageType == "first") { //第一页
								n = num;
								m = 0;
							} else if (pageType == "last") { //最后一页
								n = data.length + (data.length % num) - 1;
								m = data.length + (data.length % num) - 6;
							}
							$.each(data, function(i, values) {
								if (i >= m && i < n) {
//									ohtml += "<li>" + values['news'] + "</li>";
									var $li = $('<li/>').addClass('clear').appendTo('.arrivalslist');
									var $div1 = $('<div/>').addClass('formall').appendTo($li);
									var $div2 = $('<div/>').addClass('formallcont').addClass('clear').appendTo($div1);
									var $div3 = $('<div/>').addClass('arrivals-pic').addClass('clear').appendTo($div2);
									var $dl = $('<dl/>').appendTo($div3).addClass('dl').addClass('clear');
									//国家品牌
									var $dd = $('<dd/>').appendTo($dl).addClass('dd').html(values.guojia);
									//小图国旗
									var $i = $('<i/>').addClass('icountry').appendTo($dd).html('<img src=' + values.guoqi +'/>');
									//大图商品
									var $a = $('<a/>').appendTo($div3).addClass('a').html('<img class="ccc" src=' + values.man_img +'/>');
									//倒计时
				//					var $p = $('<p/>').addClass('time').appendTo($li).html('<i class="icon-time"></i> 剩余 <span class="day"></span> 天 <span class="hour"></span> 时 <span class="minute"></span> 分<span class="second"></span>秒 ');
									var $div_price = $('<div/>').addClass('sale-price ').addClass('clear').appendTo($div2);
									//现价
									var $div_pricesp1 = $('<span/>').addClass('price').html(values.current_price).appendTo($div_price);
									//原价
									var $div_pricesp2 = $('<span/>').html('<del>'+ values.original_price +'<del/>').appendTo($div_price);
									//折扣
									var $div_pricesp3 = $('<span/>').addClass('count').html(values.discount).appendTo($div_price);
									var $div_info= $('<div/>').addClass('arrivals-info').addClass('clear').appendTo($div2);
									var $div_info1= $('<div/>').addClass('infoconts').addClass('clear').appendTo($div_info);
									//保税仓直送
									var $div_info1_01 = $('<div/>').addClass('des02 ').addClass('clear').appendTo($div_info1).html('<b class="yew">'+ values.direct_sending +'</b><a>' + values.zimu +'</a>');
									//产品名字，系列
									var $p_info_01 = $('<p/>').addClass('des03').appendTo($div_info1).html('<a>'+values.name +'</a>');
									//数量
									var $p_info_02 = $('<p/>').appendTo($div_info1).html('<a>'+values.count +'</a>');
									//已售
									var $p_info1= $('<p/>').addClass('salenum').addClass('clear').appendTo($div_info).html(values.Sold_Out);
			                        //添加购物车
			                        var $sp = $('<div/>').html('<button class="btngw">' + values.tianjia +'</button>').appendTo($div2).addClass('sp');
								}
							});

							//点击添加到购物车
							$('.arrivalslist').on('click','.btngw',function(e){
										
								 var title1 = $(e.target).parent().parent().children(".arrivals-info").children(".infoconts").find('.des03').html();//产品名称
							console.log(title1)
								 //price
								 var price =$(e.target).parent().parent().children(".sale-price ").find('.price').html();//产品价格
						//					     console.log(price);
								 //img
								 var img =$(e.target).parent().parent().children(".arrivals-pic ").children("a").find('img').attr('src');//产品图片
						//					
								 var obj = {"title1":title1,"price":price,"img":img};
								 console.log(obj);
								 var strCookie =  $.cookie("good");    //strCookie 是存在cookie里面的产品信息	 
								 console.log(strCookie);
						//					
								var  bGood = false;  //代表没有信息
								if(strCookie == undefined || strCookie =="" || strCookie.length==0){
									var oCookie = [];
									var newGood = {"title1":title1,data:obj,num:1}//新的完整的产品信息
									oCookie.push(newGood);
						
								}else{
									 //有另外的产品信息，不是要添加的产品信息，所有要生成所添加的产品信息
									var oCookie = JSON.parse(strCookie);
									$.each(oCookie,function(){
										if(this.title1 ==title1){
											var num = parseInt(this.num)+1;  
											this.num = num;
											bGood =true  ;  //表示产品有信息
										}
									});
									if(bGood==false){
										//生成新的商品信息
										var newGood = {"title1":title1,data:obj,num:1}//新的完整的产品信息
										oCookie.push(newGood);
										alert('添加成功');
									}
								}
								console.log(oCookie);		
						//						//重新设置cookie
								$.cookie("good",JSON.stringify(oCookie),{expires:7 , path:"/"});
								console.log(oCookie);
								console.log(JSON.stringify(oCookie));
						//						
								console.log($.cookie("good") );
								
								
							});
						}
					});
				};
				$(".next").click(function() {
					ajax("next");
				});
				$(".prev").click(function() {
					ajax("prev");
				});
				$(".first").click(function() {
					ajax("first");
				});
				$(".last").click(function() {
					ajax("last");
				});
				$(function() { //初始化
					ajax("next");
				});
			}(jQuery));
		});

	});
});