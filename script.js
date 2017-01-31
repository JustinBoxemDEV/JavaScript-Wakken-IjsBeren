var random;

var dbs = document.getElementById("dbs");
var context = dbs.getContext("2d");

var xPos;

var userWakken;
var userIJsberen;
var userPinguins;

var wakken;
var ijsberen;
var pinguins;

var goed;
var fout;

var user;
var buert = 0;

var scoreList = [];
if (readCookie("scoreListCookie")) {
	scoreList.push(readCookie("scoreListCookie"));
	scoreList.reverse();
	document.getElementById('scores').innerHTML = readCookie("scoreListCookie").replace(/,/g, '');
}

function start() {
	beurt = 0;
	document.getElementById('uitleg').style.display = "none";
	document.getElementById('dbs').style.display = "block";
	document.getElementById('antwoord').style.display = "block";
	document.getElementById('antwoorden').style.display = "block";
	document.getElementById('checkAntwoord').style.display = "block";
}

function stop() {
	document.getElementById('uitleg').style.display = "block";
	document.getElementById('dbs').style.display = "none";
	document.getElementById('antwoord').style.display = "none";
	document.getElementById('antwoorden').style.display = "none";
	document.getElementById('checkAntwoord').style.display = "none";
}

stop();

// Create cookies
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

// Read Cookies
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Erase Cookies
function eraseCookie(name) {
  createCookie(name,"",-1);
}
//End cookies

function resetAnswer() {
		wakken = 0;
		ijsberen = 0;
		pinguins = 0;

		document.getElementById('antwoord').innerHTML = "";

		document.getElementById('wakken').value = "";
		document.getElementById('ijsberen').value = "";
		document.getElementById('pinguins').value = "";
	}

function resetDice() {
	context.clearRect(0, 0, dbs.width, dbs.height);
}

// Function Dobbelsteen
function drawDice(i) {
	if (i == 1) {
		xPos = 0;
	}
	else if (i == 2) {
		xPos = 140;
	}
	else if (i == 3) {
		xPos = 280;
	}
	else if (i == 4) {
		xPos = 420;
	}
	else if (i == 5) {
		xPos = 560;
	}
	else if (i == 6) {
		xPos = 700;
	}
	sqaure();

	function sqaure() {3
		context.beginPath();
		context.fillStyle = "#5B3930";
		// context.fillRect(xPos, 0, 100, 100);
		roundRect(context, xPos, 0, 100, 100, 20, true);
		context.closePath();
	}

	// Rectangle with Rouned Corners
	function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
	  if (typeof stroke == "undefined" ) {
	    stroke = true;
	  }
	  if (typeof radius === "undefined") {
	    radius = 5;
	  }
	  ctx.beginPath();
	  ctx.moveTo(x + radius, y);
	  ctx.lineTo(x + width - radius, y);
	  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
	  ctx.lineTo(x + width, y + height - radius);
	  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	  ctx.lineTo(x + radius, y + height);
	  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
	  ctx.lineTo(x, y + radius);
	  ctx.quadraticCurveTo(x, y, x + radius, y);
	  ctx.closePath();
	  if (stroke) {
	    ctx.stroke();
	  }
	  if (fill) {
	    ctx.fill();
	  }        
	}

}

// Function Ogen
function drawFace() {
	switch (random){
		// Teken 1 oog
		// |     |
		// |  o  |
		// |     |
		case 0:
			console.log("Dobbelsteen 1");
			draw1();
			wakken += 1;
			ijsberen += 0;
			pinguins += 6;
		break;
		// Teken 2 ogen
		// |o    |
		// |     |
		// |    o|
		case 1:
			console.log("Dobbelsteen 2");
			console.log(draw2());
		break;
		// Teken 3 ogen
		// |o    |
		// |  o  |
		// |    o|
		case 2:
			console.log("Dobbelsteen 3");
			draw2();
			draw1();
			wakken += 1;
			ijsberen += 2;
			pinguins += 4;
		break;
		// Teken 4 ogen
		// |o   o|
		// |     |
		// |o   o|
		case 3:
			console.log("Dobbelsteen 4");
			draw4();
			ijsberen += 0;
			pinguins += 0;
		break;
		// Teken 5 ogen
		// |o   o|
		// |  o  |
		// |o   o|
		case 4:
			console.log("Dobbelsteen 5");
			draw4();
			draw1();
			wakken += 1;
			ijsberen += 4;
			pinguins += 2;
		break;
		// Teken 2 ogen aan de zijkant in het midden
		// |o   o|
		// |o   o|
		// |o   o|
		case 5:
			console.log("Dobbelsteen 6");
			draw4();
			draw2mid();
			wakken += 0;
			ijsberen += 0;
			pinguins += 0;
		break;
	}

	if(user == "wiljan"||user == "Wiljan"){
		console.log("wakken:" + wakken);
		console.log("ijsberen:" + ijsberen);
		console.log("pinguins:" + pinguins);
	}

	function draw1() {
		// Teken 1 oog
		// |     |
		// |  o  |
		// |     |
		context.beginPath();
		context.arc(xPos+50,50,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();
	}
	function draw2() {
		// Teken 2 ogen
		// |o    |
		// |     |
		// |    o|
		// 1
		context.beginPath();
		context.arc(xPos+25,25,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();

		// 2
		context.beginPath();
		context.arc(xPos+75,75,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();
	}
	function draw4() {
	  	// Teken 4 ogen
		// |o   o|
		// |     |
		// |o   o|
		// 1
		context.beginPath();
		context.arc(xPos+25,75,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();

		// 2
		context.beginPath();
		context.arc(xPos+75,75,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();

		// 3
		context.beginPath();
		context.arc(xPos+25,25,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();

		// 4
		context.beginPath();
		context.arc(xPos+75,25,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();
	}
	function draw2mid() {
	  	// Teken 2 ogen aan de zijkant in het midden
		// |     |
		// |o   o|
		// |     |
		// 1
		context.beginPath();
		context.arc(xPos+25,50,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();

		// 2
		context.beginPath();
		context.arc(xPos+75,50,8,0,2*Math.PI);
		context.strokeStyle = 'white';
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.closePath();
	}
}

// Gooi de dobbelstenen
function gooi() {
	start();
	resetAnswer();
	resetDice();
		user = prompt("Vul een naam in");
	if(user != ""){
		var i = document.getElementById('select').value;
		for (var y = 1; y <= i; y++) {
			random = Math.floor(Math.random()*6);
			drawDice(y);
			drawFace();
		}
	}else{
		alert("vul een naam in!");

	}
}

// Controleer het de antwoorden
function checkAnswer() {
	userWakken = document.getElementById('wakken').value;
	userIJsberen = document.getElementById('ijsberen').value;
	userPinguins = document.getElementById('pinguins').value;
	goed = 0;
	fout = 0;

	if(beurt > 0){
		alert("Werp opnieuw!");
	} else {
		// Controleer Wakken
		if (userWakken == wakken) {
			goed += 1;
			document.getElementById('wakken').value += " ✓";
		}else{
			fout += 1;
			document.getElementById('wakken').value += " x";
		}
		// Controleer Ijsberen
		if (userIJsberen == ijsberen) {
			goed += 1;
			document.getElementById('ijsberen').value += " ✓";
		}else{
			fout += 1;
			document.getElementById('ijsberen').value += " x";
		}
		// Controleer Pinguins
		if (userPinguins == pinguins) {
			goed += 1;
			document.getElementById('pinguins').value += " ✓";
		}else{
			fout += 1;
			document.getElementById('pinguins').value += " x";
		}

		console.log("Goed:" + goed + "fout:" + fout);

		// Check hoeveel goed en fout
		if (goed == 3) {
		document.getElementById('antwoord').innerHTML = "Je hebt ze allemaal goed!";
		}
		else if (goed >= 1 && goed < 3) {
		document.getElementById('antwoord').innerHTML = "Je hebt er " + goed + " goed! Goed bezig!";
		}
		else {
			document.getElementById('antwoord').innerHTML = "Helaas! Je hebt er " + fout + " fout!";		
		}

		// Add Score
		addScore(user, goed, fout);
		beurt++;
	}
}

// Voeg de score toe aan de scorelijst
function addScore(user ,goed, fout) {
	var score = "<tr><td>"+user+"</td><td>"+goed+"</td><td>"+fout+"</td></tr>";
	scoreList.push(score);
	scoreList.reverse();
	// Voeg de score toe aan de cookie
	createCookie("scoreListCookie", scoreList, 999);
	// Verwijder de komma's van de array
	document.getElementById('scores').innerHTML = readCookie("scoreListCookie").replace(/,/g, '');
}
