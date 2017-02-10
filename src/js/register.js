
define(['config'], function() {
	requirejs(['jquery','index','register','bootstrap.min','jquery.idcode'], function($) {
		$(function() {
			
			//验证码部分
			$.idcode.setCode(); //加载生成验证码方法
			$("#Txtidcode").blur(function() {
				$("#yzTip").css({
					"display": "block"
				})
				var IsBy = $.idcode.validateCode() //调用返回值，返回值结果为true或者false

				if (IsBy) {
					$("#yzTip").text("验证码正确");
				} else {
					$("#yzTip").text("验证码有误");
				}
			});
			
			$(function(){
				$('#submit').click(function() {
					$.post('php/register.php', {
						email: $('#email').val(),
						password: $('#password').val(),
						phone: $('#phone').val()
					}, function(response) { //response返回的是php函数的结果集，是一个字符串
						var $obj = eval('(' + response + ')');
						if ($obj.state) {
							alert('注册成功！');
						} else {
							alert($obj.message);
						}
					});
				});
			});
			
			
		});
	});
});