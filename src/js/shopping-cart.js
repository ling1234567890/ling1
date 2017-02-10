define(['config'], function() {
	requirejs(['jquery', 'index', 'bootstrap.min', 'jquery.cookie'], function($, i, b, d, j) {
		$(function() {
			var strCookie1 = $.cookie("good");
			if (strCookie1 == undefined || strCookie1 == "" || strCookie1.length == 0) {
				return;
			} else {
				var CartCookie = JSON.parse($.cookie("good"));
				console.log(CartCookie);
				$.each(CartCookie, function() {
					var self = this;
					//加入购物车的样式
					var $li = $('<li/>');
					var $Title1 = $("<span class='tit'>" + this.data.title1 + "</span>").appendTo($li);
					var $img = $("<img src=" + '../html/' + this.data.img + " />").appendTo($li);
					//					var $Price =$( "<span class='Price'>"+this.data.price+"</span>").appendTo($li);
					var $dele = $("<span class='dele'>删除</span>").appendTo($li);
					//加减
					var $tab = $("<table id='tab'></table>");
					var $tr = $("<tr></tr>").appendTo($tab);
					var $td = $('<td></td>').appendTo($tr);
					var $price = $('<span class="price">' + this.data.price + '</span>').appendTo($td);
					var $min = $('<input class="min" name="" type="button" value="-" /> ').appendTo($td);
					var $tbox = $('<input class="text_box" name="" type="text" value="1" /> ').appendTo($td);
					var $add = $('<input class="add" name="" type="button" value="+" />').appendTo($td);
					$tab.appendTo($li);
					$li.appendTo($('#mycart'));
					//		            var obj = {"title1":this.data.title1,"price":this.data.price,"img":this.data.img};

					//总价
					//购物车加减 
					$(".add").click(function() {
						var t = $(this).parent().find('.text_box');
						t.val(parseInt(t.val()) + 1)
						setTotal();

					})
					$(".min").click(function() {
						var t = $(this).parent().find('.text_box');
						t.val(parseInt(t.val()) - 1)
						if (parseInt(t.val()) < 0) {
							t.val(0);
						}
						setTotal();
					});

					//总价加减	
					function setTotal() {
						var s = 0;
						$("#tab td").each(function() {
							//											console.log(($(this).find('.text_box').val()));
							//											console.log(($(this).find('.price').text()));
							s += parseInt($(this).find('.text_box').val()) * parseFloat($(this).find('.price').text());
							//										     console.log(s);
						});

						$("#total").html(s.toFixed(2));
					}
					setTotal();

				});
				$(".dele").click(function(e) {
					$(this).closest('li').remove();
					var title11 = $(e.target).parent().find('.tit').html();
					$.each(CartCookie, function(index, ele) {
						if (this.title1 == title11) {
							CartCookie.splice(index, 1);
						}
					})
					$.cookie("good", JSON.stringify(CartCookie), {
						expires: 7,
						path: "/"
					});
					console.log($.cookie('good'))
				});
			}
		});
	});
});