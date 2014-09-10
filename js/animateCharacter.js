var prev_scroll = 0;
var curr_scroll = 0;

var runCaller;				//Handles setInterval to move character on continuous scrolling
var isRunning = false;			//Handles whether or not animation of character is in progress
var runningTime = 600;	//Time for character animation in ms

var swimDownCaller;
var scrollStopCheckDuration = 200;
var swimUpTime = 1300;
var swimDownTime = 1200;
var swimming = false;
var swimFramChangeTime = 1000;
var swimMotionIntervalSet;

//======================SCROLL EVENT CALLING ANIMATING FUNCTIONS=====================//
$(window).scroll(scrollevent);

function scrollevent() {
	if(deviceName != 'computer')
		curr_scroll = touchPageX;
	else
		curr_scroll = $(window).scrollTop();
	var scrolldiff = deviceName != 'computer' ? -(curr_scroll - prev_scroll) : -(prev_scroll - curr_scroll);
	if(scrolldiff == 0)
	{	
		if(jumpDown == false)	clearInterval(runCaller);
		else if(jumpDown == true) swimDownCaller = setTimeout(function(){swimDown();},scrollStopCheckDuration);
		return;
	}

	//Animate Character
	if(scrolldiff > 0)
	{	$("#main_character").css("background-position-y","0px");
	}
	if(scrolldiff < 0)
	{	$("#main_character").css("background-position-y","-200px");
	}

	if(isRunning == false && jumpDown == false)
	{	animate_main_character();
		runCaller = setInterval(function(){animate_main_character()},runningTime);
	}
	
	if(jumpDown == true)
	{	//console.log("Interval cleared");
		clearInterval(swimDownCaller);
		if(swimming == false)
			swimUp();
	}
	prev_scroll = curr_scroll;
	scrollevent();
}

//=============================POSITIONING CHARACTER================================//
function position_character()
{	$("#main_character").css("bottom",groundOffset - 25);//Height of player is 175
	$("#main_character").css("left",0.5*window.innerWidth -100);//Width of player is 100
}

//=============================ANIMATING CHARACTER==================================//
function animate_main_character()
{	if(jumpDown == false)//Run main character
	{	isRunning = true;
		setTimeout(function(){$("#main_character").css("background-position-x","-200px");},0);
		setTimeout(function(){$("#main_character").css("background-position-x","-400px");},runningTime/1.6);
		setTimeout(function(){$("#main_character").css("background-position-x","0px");},runningTime);
		setTimeout(function(){isRunning = false},runningTime);
	}	
}

function swimUp()
{	console.log("swimupCalled");
	$("#main_character").stop();
	$("#main_character").animate({bottom:"300px"},swimUpTime);
	swimFrameChange();
	swimMotionIntervalSet = setInterval(function(){swimFrameChange()},swimFramChangeTime);
	swimming = true;
}

function swimFrameChange()
{	setTimeout(function(){$("#main_character").css("background-position-x","-600px");},swimFramChangeTime/4);
	setTimeout(function(){$("#main_character").css("background-position-x","-800px");},2*swimFramChangeTime/4);
	setTimeout(function(){$("#main_character").css("background-position-x","-1000px");},3*swimFramChangeTime/4);
	
}

function swimDown()
{	$("#main_character").stop();
	$("#main_character").animate({bottom:groundOffset - 25},swimDownTime,function(){resetCharacter();});
	clearInterval(swimMotionIntervalSet);
	swimming = false;
}

function resetCharacter()
{	$("#main_character").css("background-position-x","0px");
}