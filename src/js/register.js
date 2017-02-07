$(function(){
	
	
	//验证码部分
 	$.idcode.setCode();   //加载生成验证码方法
    
    $("#Txtidcode").blur(function(){
    	 $("#yzTip").css({"display": "block"})
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        
        if(IsBy){
            $("#yzTip").text("验证码正确");
        }else {
            $("#yzTip").text("验证码有误");
        }
    });
});
