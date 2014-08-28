var move;				//Handles setInterval to move character on continuous scrolling
var motion = 0;			//Handles whether or not animation of character is in progress
var motion_time = 600;	//Time for character animation in ms


//======================SCROLL EVENT CALLING ANIMATING FUNCTIONS=====================//
$(window).scroll(function scrollevent() {
	curr_scroll = $(window).scrollTop();
	var scrolldiff = curr_scroll - prev_scroll;
	if(scrolldiff == 0)
	{	clearInterval(move);
		//$("#main_character").css("background-position-x","0px");
		return;
	}

	//Animate Character
	if(scrolldiff > 0)
	{	$("#main_character").css("background-position-y","0px");
	}
	if(scrolldiff < 0)
	{	$("#main_character").css("background-position-y","-200px");
	}

	if(motion == 0)
	{	animate_main_character();
		move = setInterval(function(){animate_main_character()},motion_time);
	}
	
	//Move Background
//	if(scrolldiff != 0)
	//$(".ground").css("left",-curr_scroll*backgroundSpeed + "px");
	
	//Updating Scroll Information
	prev_scroll = curr_scroll;
	scrollevent();

});

//=============================ANIMATING CHARACTER==================================//
function animate_main_character()
{	if(1)//Run main character
	{	motion = 1;
		setTimeout(function(){$("#main_character").css("background-position-x","-200px");},0);
		setTimeout(function(){$("#main_character").css("background-position-x","-400px");},motion_time/1.6);
		setTimeout(function(){$("#main_character").css("background-position-x","0px");},motion_time);
		setTimeout(function(){motion = 0},motion_time);
	}
	
}

