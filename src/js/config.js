requirejs.config({
//	baseUrl:'js',
    paths : {
    	// 别名
        "jquery-3.1.1": "jquery-3.1.1",
        "index-jq":"index-jq",
        "fase-list-jq":"fase-list-jq",
        "detail-page-jq":"detail-page-jq",
        "register":"register""
    },
    shim:{
    	"bootstrap.min":{//图标
    		deps: ["jquery"],
    		  exports: "jQuery.fn.min"
    	};
    	"jquery.cookie":{//购物车
    		deps: ["jquery"],
    		  exports: "jQuery.fn.cookie"
    	};
    	"jquery.gdszoom":{//放大镜
    		deps: ["jquery"],
    		  exports: "jQuery.fn.gdszoom"
    	};
    	"jquery.idcode":{//验证码
    		deps: ["jquery"],
    		  exports: "jQuery.fn.idcode"
    	}
    };
});


/*requirejs(['a','jquery','moduleC'],function(a,$,c){
	console.log(a,$,c);

	c.getStyle()
});*/