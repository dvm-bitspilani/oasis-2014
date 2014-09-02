document.addEventListener("keydown", function (e) {
  if([33,34,35,36,37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();

    if (e.keyCode == 39) {
    	// forward scrolling by right arrow key
    	window.scrollBy(0,30);
  	}
  	if (e.keyCode == 37) {
  		//backward scrolling by left arrow key
    	window.scrollBy(0,-30);
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
	//console.log('start');
}

function handleEnd(evt) {
	//console.log('end');
}
var a,b,dif;
function handleMove(e) {
	e.preventDefault();
	//console.log('move');
	var touches = e.changedTouches;
	for (var i=0;i<touches.length;i++) {
		b = a;
		a = touches[i].pageX;
		//console.log('a : '+a+' && b :'+b);
		if (a > b) {
			dif = a-b;
			console.log(dif);
			window.scrollBy(0,-30);
		}
		//console.log(touches[i].pageX);
	}
}
function handleCancel(evt) {
	console.log('cancel');
}
