//=============================GLOBAL VARIABLES======================================//
var prev_scroll = 0;
var curr_scroll = 0;

var multiplier32 = 1.2;
var multiplier31 = 1.4;

var layerMinus3Length = 3200;
var layerMinus2Length = layerMinus3Length*multiplier32;
var layerMinus1Length = layerMinus3Length*multiplier31;

var layerMinus3Speed = 0.20;
var totalScroll;


var layerMinus1Speed = 0;
var layerMinus2Speed = 0;


var multiplier32; 
var multiplier31;

var scrollDone;
var sceneLength = 4300;

//==============================POSITIONING OF CHARACTER=============================//
function position_elements()
{	var bottomOffset = $("#ground").height();
	$("#main_character").css("bottom",bottomOffset - 25);//Height of player is 175
	$("#main_character").css("left",0.5*window.innerWidth -100);//Width of player is 100
	$(".layer img").css("bottom",bottomOffset);
}

//==============================RENDER SCENE 1======================================//
function renderScene1()
{	$("#backgroundPyramids").css("left","0px");
	$("#blueMountain").css("left","1600px");
	
	$("#frontPyramids").css("left","0px");
	$("#bigWind").css("left",2660*layerMinus2Speed/layerMinus3Speed+"px");
	
	$("#singlePyramid").css("left",635*layerMinus1Speed/layerMinus3Speed+"px");
	$("#thisWay").css("left",750*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusBig1").css("left",150*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusBig2").css("left",500*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusSmall3").css("left",900*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusSmall4").css("left",1100*layerMinus1Speed/layerMinus3Speed+"px");
	$("#wind1").css("left",1600*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan1").css("left",(1600*layerMinus1Speed/layerMinus3Speed - 70)+"px");
	$("#wind2").css("left",1840*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan2").css("left",(1840*layerMinus1Speed/layerMinus3Speed - 70)+"px");
	$("#farmHouse").css("left",1950*layerMinus1Speed/layerMinus3Speed+"px");	
}

//=========================ADD GRADIENTS==============================================//
function addGradients(main_container)
{	main_container.attr("data-0","background: linear-gradient(rgb(243,148,66),rgb(247,174,108));");
	main_container.attr("data-"+(900 - window.innerWidth)/layerMinus3Speed,"background: linear-gradient(rgb(243,148,66),rgb(238,159,90));");
	main_container.attr("data-"+(2000 - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	main_container.attr("data-"+totalScroll,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	//main_container.attr("data-8400","background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	//main_container.attr("data-12400","background:linear-gradient(rgb(16,22,38),rgb(16,22,38));");
}


//============================DOCUMENT READY AND WINDOW RESIZE========================//

window.onload = function(){
	position_elements();
	prev_scroll = $(window).scrollTop();
	curr_scroll = $(window).scrollTop();
	
	totalScroll = (layerMinus3Length - window.innerWidth)/layerMinus3Speed;
	layerMinus2Speed = (layerMinus2Length - window.innerWidth)/totalScroll;
	layerMinus1Speed = (layerMinus1Length - window.innerWidth)/totalScroll;
	
	addGradients($("#main_container"));
	
	//$("#ground").attr("data-0","left:0px;");
	//$("#ground").attr("data-12400","left:-200px;");
	$("#layer-3").attr("data-0","left:0px;");
	$("#layer-3").attr("data-"+totalScroll,"left:-"+ (totalScroll*layerMinus3Speed) +"px;");
	$("#layer-2").attr("data-0","left:0px;");
	$("#layer-2").attr("data-"+totalScroll,"left:-"+ (totalScroll*layerMinus2Speed) +"px;");
	$("#layer-1").attr("data-0","left:0px;");
	$("#layer-1").attr("data-"+totalScroll,"left:-"+ (totalScroll*layerMinus1Speed) +"px;");

	renderScene1();
	var s = skrollr.init();
};

$(window).resize( function(){
	position_elements();
	totalScroll = (sceneLength - window.innerWidth)/layerMinus1Speed;
});