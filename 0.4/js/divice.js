//判断设备
function check_mobile(){
    var ua = navigator.userAgent;ua = ua ? ua.toLowerCase().replace(/-/g, "") : "";
    if((/4399GameCenter/gi).test(navigator.userAgent) && (/iphone|ipad|ipod/gi).test(navigator.appVersion)){return "iphone";}
    if((/4399GameCenter/gi).test(navigator.userAgent) && (/android/gi).test(navigator.appVersion)){return "guest4399";}
    if (ua.match(/(Android)/i)){return "android";}
    if (ua.match(/(iPhone|iPod)/i)){return "iphone";}
    if (ua.match(/(iPad)/i)){return "ipad";}
    //UC Browser
    if (ua.match(/(U;)/i)){if (ua.match(/(Adr)/i)){return "android";}}
    if (ua.match(/(U;)/i)){if (ua.match(/(iPh)/i)){return "iphone";}}
    if (ua.match(/(U;)/i)){if (ua.match(/(iPd)/i)){return "ipad";}}
}

//判断微信
function is_weixn(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}

//读cookies
function rC(n) {
    var c = (('; '+document.cookie).split('; '+n+'=')[1] || '') + ';';
    return decodeURIComponent(c.substring(0, c.indexOf(';')));
};

//写cookies
function wC(n, v, d, t) {//wC(key, value, '4399.com', 9999)
    var e;
    if (t) {
        var dt = new Date();
        dt.setTime(dt.getTime() + (t * 86400000));
        e = "; expires=" + dt.toGMTString()
    } else {
        e = ""
    }
    document.cookie = n + "=" + encodeURIComponent(v) + e + "; path=/; domain=." + d
};

//开始游戏
function playH5Game(_gameId,_gameName,_gameUrl,_isLandscape){
	// _isLandscape 0 随系统  1 横屏 2竖屏
	try{
		if(parseInt(_gameUrl.replace("/play/","").replace(".htm",""))>0){
			_gameUrl = "http://"+window.location.host+_gameUrl.replace("http://h.4399.com","");
		}
		if (navigator.userAgent.indexOf("4399wan") != -1) {//在线玩app
			try{
				window.h5wanLoginInterfaces.gotoGame(_gameId);
				return false;
			}catch(e){return true;}
		}
		if((/4399GameCenter/gi).test(navigator.userAgent) && (/android/gi).test(navigator.appVersion)){//安卓游戏盒
			var __gameinfo = {
				gameUrl:_gameUrl,
				gameId:_gameId,
				gameName:_gameName,
				landscape:_isLandscape
			}
			try{window.android.onJsToPlayH5Game(JSON.stringify(__gameinfo));}catch(e){return true;}
			return false;
		}else if((/4399GameCenter/gi).test(navigator.userAgent) && (/iphone|ipad|ipod/gi).test(navigator.appVersion)){//苹果游戏盒
			try{
				window.onJsToPlayH5Game(_gameUrl,_isLandscape);
				return false;
			}catch(e){return true;}
		}
	}catch(e){}
	return true;
}