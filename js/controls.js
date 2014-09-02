var touchPageX;
var scrollPageX;

document.addEventListener("keydown", function (e) {
  if([33,34,35,36,37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();
    if (e.keyCode == 39) {
    	// forward scrolling by right arrow key
    	window.scrollBy(0,30);
    	scrollPageX = $(window).scrollTop();
  	}
  	if (e.keyCode == 37) {
  		//backward scrolling by left arrow key
    	window.scrollBy(0,-30);
    	scrollPageX = $(window).scrollTop();
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
