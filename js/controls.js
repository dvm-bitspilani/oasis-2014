var touchPageX;
var scrollPageX;
var scrollSpeed = 20;

var browserName;
var browserVersion;

var deviceName;

var woodenDockOffset;

var isBoardingShip = false;
var boarded = false;

document.addEventListener("keydown", function (e) {
    if([219,221,33,34,35,36,37,38,39,40].indexOf(e.keyCode) > -1) { 
        e.preventDefault();
        if(isBoardingShip == true)
		{	
			var toMoveLayer1 = (800)*layerMinus1Speed/layerMinus3Speed - 1020 + window.innerWidth/2 + 250;
			var toMoveLayer3 = toMoveLayer1*layerMinus3Speed/layerMinus1Speed;
			for(var i=0;i<(toMoveLayer3/scrollSpeed);i++)
			{	setTimeout(function(){scrollPageX = window.scrollBy(0,scrollSpeed)},i*60);
			}
			isBoardingShip = false;
			boarded = true;
			setTimeout(function(){$('#ship').css({position:'fixed',left:(window.innerWidth/2 - 300)})},(toMoveLayer3/scrollSpeed)*25);
			
			return;	
		}
		
		if (e.keyCode == 39) {
    	  
		  woodenDockOffset = (scene5Offset+2300)*layerMinus1Speed/layerMinus3Speed + 1020 - window.innerWidth/2;
		  if(layerMinus1Speed*scrollPageX >= woodenDockOffset && layerMinus1Speed*scrollPageX <= (woodenDockOffset + 30))
			{	console.log(layerMinus1Speed*scrollPageX);
				isBoardingShip = true;
				return;
			}
			if(layerMinus1Speed*scrollPageX >= woodenDockOffset && layerMinus1Speed*scrollPageX <= (woodenDockOffset + (800)*layerMinus1Speed/layerMinus3Speed - 1020 + window.innerWidth/2 + 250))
			{	return;
			}
		// forward scrolling by right arrow key
    	   window.scrollBy(0,scrollSpeed);
    	   scrollPageX = $(window).scrollTop();
		   
		   
				
        }
        if (e.keyCode == 37) {
  		    //backward scrolling by left arrow key
    	   window.scrollBy(0,-scrollSpeed);
    	   scrollPageX = $(window).scrollTop();
        }
        if (e.keyCode == 221) {
            // Increases the scrolling speed
            scrollSpeed += 10;
            console.log(scrollSpeed);
        }
        if (e.keyCode == 219) {
            // decreases the scrolling speed
            if(scrollSpeed > 10) 
                scrollSpeed -= 10;
            console.log(scrollSpeed);
        }
    }
}, false);

function setupTouch() {
	document.addEventListener("touchstart", handleStart, false);
  	document.addEventListener("touchend", handleEnd, false);
 	document.addEventListener("touchcancel", handleCancel, false);
  	document.addEventListener("touchleave", handleEnd, false);
  	document.addEventListener("touchmove", handleMove, false);
}

function handleStart(evt) {
}

function handleEnd(evt) {	
}

function handleMove(e) {
	e.preventDefault();
	var touches = e.changedTouches;
	touchPageXPrev = touchPageX;
	touchPageX = touches[0].pageX;
	scrollevent();
}

function handleCancel(evt) {
}

function detectBrowser() {
  //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
  if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browserName = "firefox";
    var ffversion=new Number(RegExp.$1) 
    browserVersion = Math.floor(ffversion);
  }
  //test for MSIE x.x; 
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
    browserName = "internet explorer";
    var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
    browserVersion = Math.floor(ieversion);
  }
  //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
  if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))  {
    browserName = "opera";
    var oprversion=new Number(RegExp.$1) // capture x.x portion and store as a number
    browserVersion = Math.floor(oprversion);
  }
  if((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && (navigator.userAgent.toLowerCase().indexOf('safari') !=-1)) {
    browserName = "chrome";
    browserVersion = "";
  }
  if((navigator.userAgent.toLowerCase().indexOf('chrome') == -1) && (navigator.userAgent.toLowerCase().indexOf('safari') !=-1)) {
    browserName = "safari";
    browserVersion = "";
  }
}

function detectDevice() {
  if
  ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)))
    deviceName = "iosdevice";
  else if (navigator.userAgent.match(/Android/i))
    deviceName = "android";
  else if (navigator.userAgent.match(/BlackBerry/i)) 
    deviceName = "blackberry";
  else if (navigator.userAgent.match(/IEMobile/i)) 
    deviceName = "iemobile";
  else if (navigator.userAgent.match(/Silk/i)) 
    deviceName = "kindle";
  else
    deviceName = "computer";
}