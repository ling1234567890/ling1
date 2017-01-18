
document.addEventListener('DOMContentLoaded',function(){
	
	//公告轮播开始
   	function notice_lunbo(){
		var focus = document.getElementsByClassName('sasa_notice_content')[0];
		var ul = focus.children[0];
		var lis = ul.children;
		
		var index = 0;
		setInterval(function(){
			index++;
	
			// 速度
			var speed = -1;
	
			if(index >= lis.length-1){
				index = 1;
				ul.style.top = 0 + 'px';		
			}
	
			// 目标值
			var target = -index*28;
			clearInterval(ul.timer);
	
			ul.timer = setInterval(function(){
				var _top = ul.offsetTop;
//				console.log(_top)
				// 当top值到达目标值后，停止定时器
				if(_top == target ||_top < target){
					// _top = target + speed;
					clearInterval(ul.timer);
				}else{
					ul.style.top = _top + speed + 'px';
				}
	
			},30);
			
		},4000);
	};
	notice_lunbo();
	//公告轮播结束
	
	
});











































