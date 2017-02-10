define(['config'], function() {
	requirejs(['jquery', 'index', 'bootstrap.min', 'login'], function($) {
		$(function() {
			$('#btn').click(function() {
				$.post('php/login.php', {
					email: $('#email').val(),
					password: $('#password').val()
				}, function(response) {
					var $obj = eval('(' + response + ')');
					if ($obj.state) {
						window.location.href = '../index.html';
					} else {
						alert($obj.message);
					}
				});
			});
		});
	});
});