requirejs.config({
//	baseUrl:'js',
    paths : {
    	// 别名
        "jquery": "jquery-3.1.1",
        "index":"index-jq",
        "list":"fase-list-jq",
        "detail":"detail-page-jq",
        "register":"register",
        "login":"login"
    },
    shim:{
    	"bootstrap.min":{//图标
    		deps: ["jquery"],
    		  exports: "jQuery.fn.min"
    	},
    	"jquery.cookie":{//购物车
    		deps: ["jquery"],
    		  exports: "jQuery.fn.cookie"
    	},
    	"jquery.gdszoom":{//放大镜
    		deps: ["jquery"],
    		  exports: "jQuery.fn.gdszoom"
    	},
    	"jquery.idcode":{//验证码
    		deps: ["jquery"],
    		  exports: "jQuery.fn.idcode"
    	}
    }
});


/*requirejs(['a','jquery','moduleC'],function(a,$,c){
	console.log(a,$,c);

	c.getStyle()
});*/