var model = [
		{ clickable : "mysteryMachine" , click: 0},
		{ clickable : "pokemon1" , click: 0},
		{ clickable : "pokemon2" , click: 0},
		{ clickable : "krustyCrab" , click: 0},
		{ clickable : "flinstoneCar" , click: 0},
		{ clickable : "pulpFiction" , click: 0},
		{ clickable : "pole" , click: 0},
		{ clickable : "forestBillboard" , click: 0},
		{ clickable : "notificationSpeakers" , click: 0},
		{ clickable : "updatesSlider" , click: 0},
		{ clickable : "mamo" , click: 0},
		{ clickable : "parachute" , click: 0},
		{ clickable : "phoneBooth" , click: 0},
		{ clickable : "oasisQuiz" , click: 0},
		{ clickable : "tent3" , click: 0},
		{ clickable : "tent4" , click: 0},
		{ clickable : "tent5" , click: 0},
		{ clickable : "dramaBoard" , click: 0},
		{ clickable : "archiveslog" , click: 0},
		{ clickable : "fashpBoard" , click: 0},
		{ clickable : "amulAd" , click: 0},
		{ clickable : "treasure" , click: 0},
		{ clickable : "sponsorBoard" , click: 0},
		{ clickable : "centralPerk" , click: 0},
		{ clickable : "oasislogo" , click: 0},
		{ clickable : "concert" , click: 0},
		{ clickable : "rocktaves" , click: 0},
		{ clickable : "2013mainsite" , click: 0},
		{ clickable : "2013introsite" , click: 0},
		{ clickable : "2014introsite" , click: 0},
		{ clickable : "promovideo" , click: 0},
		{ clickable : "aftermovie" , click: 0},
		{ clickable : "facebook" , click: 0},
		{ clickable : "twitter" , click: 0},
		{ clickable : "youtube" , click: 0},
		{ clickable : "blog" , click: 0},
		{ clickable : "fblike" , click: 0},
		{ clickable : "twitterfollow" , click: 0},
		
	];

var quesTrack = [
		{ qback : 9 , show : 0 , completed: 0},
		{ qback : 9 , show : 0 , completed: 0},
		{ qback : 9 , show : 0 , completed: 0},
		{ qback : 9 , show : 0 , completed: 0},
		{ qback : 9 , show : 0 , completed: 0},
		{ qback : 9 , show : 0 , completed: 0},
		{ qback : 9 , show : 0 , completed: 0},
	];

var totalScore = 0;

var quesVisible = 0;

function setQues() {
	for(var j=0;j<=6;j++) {
		var alloted = 0;
		var random = Math.floor(Math.random()*7);
		for (var k=0;k<=6;k++) {
			if(quesTrack[k].qback == random) {
				alloted = 1;
				break;
			}
		}
		if (alloted == 1 ) {
			j = j-1;
			continue;
		}
		else
			quesTrack[j].qback = random;
	}
}

function blinkQues(q) {
	if(quesTrack[q].show == 0) {
		var id=".ques"+q;
		$(id).css("display","block");
		quesTrack[q].show = 1;
	}
	else {
		//ignore
	}
}

function displayQues(qno) {
	var backQues = quesTrack[qno].qback;
	$.ajax({
        url : '/2014test/fq/',
        type : "GET", 
        data : $.param({question_no : backQues}),
        success : function(data) {
            $("#ebayQuestion").html(data);
            $("#ebayQn").val(backQues);
            $("#scq").val(qno);
            $("#questionBox, .black-back").fadeIn(400);
        }
    });
}


function catchClick(clickable_passed, points, page_id,is_event) {
	var steps = model.length;
	for (var i = 0;i<steps;i++) {
		if(model[i].clickable == clickable_passed) {
			if(model[i].click == 0) {
				model[i].click = 1;
				totalScore += 5;
				gain_point();
				setTimeout(function(){document.getElementById("score").innerHTML = "Score: " + totalScore;},1000);
				if(is_event == 1)
				{	
					if(totalScore == 90)
						setTimeout(function(){ youGotLucky(); },1000);
					else
						setTimeout(function(){ $('.header').animate({top: -50},400);showeventpage(page_id);$('.black-back').fadeIn(400);},1000);
				}
				else
				{	return;
				}
				return;
			}
		}
	}
	$('.header').animate({top: -50},400);
	showeventpage(page_id);
	$('.black-back').fadeIn(400);
	return;
}

function pseudoClick() {
    catchClick('concert',5,0,0);
    if(totalScore == 90)
        setTimeout(function(){ youGotLucky(); },1000);
}

