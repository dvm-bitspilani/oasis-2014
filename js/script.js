//=============================GLOBAL VARIABLES======================================//

var multiplier32 = 1.15;
var multiplier31 = 1.3;

var layerMinus3Length = 13500;
var layerMinus2Length = layerMinus3Length*multiplier32;
var layerMinus1Length = layerMinus3Length*multiplier31;

var layerMinus3Speed = 0.40;
var totalScroll;

var layerMinus1Speed = 0;
var layerMinus2Speed = 0;

var scene1Offset = 0;
var scene2Offset = 1600;
var scene3Offset = 3200;
var scene4Offset = 6900;
var scene5Offset = 11100;

var multiplier32; 
var multiplier31;

function openLightbox() {
    $('#blackout').fadeIn();
    $('#blackoutContent').delay(400).fadeIn();
}

function closeLightbox() {
    $('#blackout').fadeOut();
    $('.blackoutContent').fadeOut();
}

function setVitals() {
	totalScroll = (layerMinus3Length - window.innerWidth)/layerMinus3Speed;
	layerMinus2Speed = (layerMinus2Length - window.innerWidth)/totalScroll;
	layerMinus1Speed = (layerMinus1Length - window.innerWidth)/totalScroll;

	//$("#ground").attr("data-0","left:0px;");
	//$("#ground").attr("data-12400","left:-200px;");
	$("#layer-3").attr("data-0","left:0px;");
	$("#layer-3").attr("data-"+totalScroll,"left:-"+ (totalScroll*layerMinus3Speed) +"px;");
	$("#layer-2").attr("data-0","left:0px;");
	$("#layer-2").attr("data-"+totalScroll,"left:-"+ (totalScroll*layerMinus2Speed) +"px;");
	$("#layer-1").attr("data-0","left:0px;");
	$("#layer-1").attr("data-"+totalScroll,"left:-"+ (totalScroll*layerMinus1Speed) +"px;");
	$("#layer1").attr("data-0","left:0px;");
	$("#layer1").attr("data-"+totalScroll,"left:-"+ (totalScroll*layerMinus1Speed) +"px;");

}

//==============================POSITIONING ELEMENTS FROM BOTTOM =============================//
function position_elements()
{	$(".layer img").css("bottom",$("#ground").height());
}

//==============================RENDER SCENE 1======================================//
function renderScene1()
{	
	//layer-3
	$("#backgroundPyramids").css("left",scene1Offset+"px");
	
	//layer-2
	$("#frontPyramids").css("left",scene1Offset+"px");
	
	//layer-1
	$("#singlePyramid").css("left",scene1Offset+600*layerMinus1Speed/layerMinus3Speed+"px");
	$("#thisWay").css("left",scene1Offset+700*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusBig1").css("left",scene1Offset+150*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusBig2").css("left",scene1Offset+1300*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusSmall3").css("left",scene1Offset+900*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusSmall4").css("left",scene1Offset+300*layerMinus1Speed/layerMinus3Speed+"px");
	$("#desertBoard").css("left",scene1Offset+1000*layerMinus1Speed/layerMinus3Speed+"px");
}

function renderScene2() {
	//layer-3
	$("#blueMountain").css("left",scene2Offset+"px");
	
	//layer-2
	$("#bigWind").css("left",(scene2Offset+1060)*layerMinus2Speed/layerMinus3Speed+"px");
	
	//layer-1
	$("#wind1").css("left",(scene2Offset)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan1").css("left",(scene2Offset*layerMinus1Speed/layerMinus3Speed - 70)+"px");
	$("#wind2").css("left",(scene2Offset+240)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan2").css("left",((scene2Offset+240)*layerMinus1Speed/layerMinus3Speed - 70)+"px");
	$("#farmHouse").css("left",(scene2Offset+350)*layerMinus1Speed/layerMinus3Speed+"px");	
}

function renderScene3() {
	//layer-3
	$("#mountain").css("left",(scene3Offset+100)+"px");
	$("#mountain2").css("left",(scene3Offset+800)+"px");
	$("#hillTree1").css("left",(scene3Offset+0)+"px");	
	$("#treeLayer-31").css("left",(scene3Offset+800)+"px");	
	$("#treeLayer-32").css("left",(scene3Offset+1200)+"px");
	$("#forestBillboard").css("left",(scene3Offset+2900)+"px");	
	//layer-2
	$("#forestHut").css("left",(scene3Offset+2300)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#hillTree2").css("left",(scene3Offset+2100)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#plateau").css("left",(scene3Offset+800)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#treeLayer-21").css("left",(scene3Offset+900)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#treeLayer-22").css("left",(scene3Offset+1500)*layerMinus2Speed/layerMinus3Speed+"px");
	//layer-1
	$("#treeLayer-11").css("left",(scene3Offset+500)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#treeLayer-12").css("left",(scene3Offset+1300)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#noTrespassing").css("left",(scene3Offset+700)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#wind3").css("left",(scene3Offset-250)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan3").css("left",((scene3Offset-250)*layerMinus1Speed/layerMinus3Speed - 70)+"px");
	$("#wind4").css("left",(scene3Offset+200)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan4").css("left",((scene3Offset+200)*layerMinus1Speed/layerMinus3Speed - 70)+"px");	
}

function renderScene4() {
	//layer-3
	$("#build3").css("left",(scene4Offset+1000)*layerMinus2Speed/layerMinus3Speed+"px");
	
	//layer-2
	$("#build1").css("left",(scene4Offset+1150)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#build2").css("left",(scene4Offset+3200)*layerMinus2Speed/layerMinus3Speed+"px");

	//layer-1
	$("#phoneBooth1").css("left",(scene4Offset+1020)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#phoneBooth2").css("left",(scene4Offset+3700)*layerMinus1Speed/layerMinus3Speed+"px");	
	//$("#swingStand1").css("left",(scene5Offset+500+90)*layerMinus1Speed/layerMinus3Speed+"px");	
	
	//layer1
	$("#bridgeRope").css("left",(scene4Offset)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#bridgeTower1").css("left",(scene4Offset+219)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#bridgeTower2").css("left",(scene4Offset+670)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp1").css("left",(scene4Offset+1090)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp2").css("left",(scene4Offset+1440)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp3").css("left",(scene4Offset+1790)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp4").css("left",(scene4Offset+2140)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp5").css("left",(scene4Offset+2490)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp6").css("left",(scene4Offset+2840)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp7").css("left",(scene4Offset+3190)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp8").css("left",(scene4Offset+3540)*layerMinus1Speed/layerMinus3Speed+"px");	
}

function renderScene5() {
	//layer-3
	$("#tent3").css("left",(scene5Offset+1550)+"px");	
	$("#tent5").css("left",(scene5Offset+1850)+"px");	
	
	//layer-2
	$("#horseSwing").css("left",(scene5Offset+950)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#tent2").css("left",(scene5Offset+600)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#tent4").css("left",(scene5Offset+1580)*layerMinus2Speed/layerMinus3Speed+"px");	
	
	//layer-1
	$("#booth").css("left",(scene5Offset+200)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swing2").css("left",(scene5Offset+650)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swingStand2").css("left",(scene5Offset+650+60)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swing1").css("left",(scene5Offset+1050)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swingStand1").css("left",(scene5Offset+1050+90)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#tent1").css("left",(scene5Offset+400)*layerMinus1Speed/layerMinus3Speed+"px");	
	
	//layer1
	$("#carnivalRailing").css("left",(scene5Offset+50)*layerMinus1Speed/layerMinus3Speed+"px");	
}


//=========================ADD GRADIENTS==============================================//
function addGradients(main_container)
{	main_container.attr("data-0","background: linear-gradient(rgb(243,148,66),rgb(247,174,108));");
	main_container.attr("data-"+((scene2Offset-200) - window.innerWidth)/layerMinus3Speed,"background: linear-gradient(rgb(243,148,66),rgb(238,159,90));");
	main_container.attr("data-"+((scene2Offset+600) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	main_container.attr("data-"+((scene5Offset-400) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	main_container.attr("data-"+((scene5Offset+800) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(16,22,38),rgb(16,22,38));");
	main_container.attr("data-"+totalScroll,"background:linear-gradient(rgb(16,22,38),rgb(16,22,38));");
}


//============================DOCUMENT READY AND WINDOW RESIZE========================//

window.onload = function(){
	detectBrowser();
	detectDevice();

	if (deviceName != "computer") {
		setupTouch();
	}

	// position all the elements of the layer
	position_elements();

	// set the layer speeds and layer travel lengths
	setVitals();
	
	// position the main character
	prev_scroll = scrollPageX;
	curr_scroll = scrollPageX;
	position_character();

	// add the gradient of the background
	addGradients($("#main_container"));
	
	// render scenes
	renderScene1();
	renderScene2();
	renderScene3();
	renderScene4();
	renderScene5();

	var s = skrollr.init();
};

$(window).resize( function(){
	position_elements();
	position_character();
	totalScroll = (layerMinus3Length - window.innerWidth)/layerMinus1Speed;
});