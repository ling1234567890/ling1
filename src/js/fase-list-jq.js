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
	
	
	//列表
	function tabulated_data(){
		$.ajax({
			type:"get",
			url:"../html/data/tabulated_data.json",
			dataType: 'json', //数据类型 
			success:function(data){
				console.log(data)
//				创建一个ul
				var $datalist = $('.garry-show').html('');
				var $page = $('#page');
				var $ul = $('<ul/>').addClass('arrivalslist').appendTo($datalist);
					$.each(data, function(index1,values) {
	//				for(var i=0; i<9 && i<data.length; i++){
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
						console.log(values.guojia)
				    });
				    
				    
				    //点击添加到购物车
					$('.arrivalslist').on('click','.btngw',function(e){
							console.log(111)	
						 var title1 = $(e.target).parent().parent().children(".arrivals-info").children(".infoconts").find('.des03').html();//产品名称
					
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
							})
						
							
							if(bGood==false){
								//生成新的商品信息
								var newGood = {"title1":title1,data:obj,num:1}//新的完整的产品信息
								oCookie.push(newGood);
							}
						}
						console.log(oCookie);		
				//						//重新设置cookie
						$.cookie("good",JSON.stringify(oCookie),{expires:7 , path:"/"});
						console.log(oCookie);
						console.log(JSON.stringify(oCookie));
				//						
						console.log($.cookie("good") );
						
						alert('添加成功');
					})
			}
		});
	};
	tabulated_data();
	
//	

	
	//倒计时开始
	function count_downlist(){
		//获取元素
		var day = $('.day')
		var hour =$('.hour');
		var minute = $('.minute');
		var second = $('.second');
//		console.log(day)
//		console.log(hour.jquery)
		// 设置开始购买的时间  每天的09：00
		// var endDate = new Date('2016/12/12')
		var end = Date.parse('2017/2/20/09:00');
		var count_down_timer = setInterval(function(){
				var now = Date.now();

				// 计算时间差(s)
				// 剩余时间
				var offset = parseInt((end - now)/1000);

				// 转换格式：xx时xx分xx秒
				// 剩余时间
				var secLeft = offset%60;  //秒
				var minLeft = parseInt(offset/60%60);  //分
				var hourLeft = parseInt(offset/60/60%24);  //时
				var dayLeft = parseInt(offset/60/60/24%24);  //时
				
				//小于两位数前面补0    补0操作
				if(secLeft < 10){
					secLeft = '0' + secLeft;
					second.html(secLeft);
				}else{
					second.html(secLeft);
				}
				if(minLeft < 10){
					minLeft = '0' + minLeft;
					minute.html(minLeft);
				}else{
					minute.html(minLeft);
				}
				if(hourLeft < 10){
					hourLeft = '0' + hourLeft;
					hour.html(hourLeft);
				}else{
					hour.html(hourLeft);
				}
//				console.log(hourLeft)
		},1000);
	};
	count_downlist();
	//限时特卖倒计时结束
});











































































































