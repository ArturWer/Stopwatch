"use strict"
let form = document.querySelector("form"),
    stopwatchEl = document.querySelector(".stopwatch"),
    startStopBtn = document.getElementById('startStopBtn'),
    btn2El = document.getElementById('btn2'),
	time = 0,
	intervalId;

function checkClick(e) {
	e.preventDefault();
	e.stopPropagation();
	let button = e.target.className;
	console.log(button);
	if (button === "Start") {
			intervalId = startStopwatch();
			console.log(intervalId);
			changeBtns("Stop", "Lap");
	} else if (button === "Stop"){
		clearInterval(intervalId);
		writeLog();
		changeBtns("Start", "Reset");
	} else if (button === "Reset"){
		time = 0;
		clearInterval(intervalId);
		stopwatchEl.textContent = "0.00";
		changeBtns("Start");
	} else if (button === "Lap"){
		
	}
};

function startStopwatch(){
	let intervalId = setInterval (timeGo, 10);
	return intervalId;
};

function timeGo(){
	time+=0.01;
	time = time.toFixed(2);
	stopwatchEl.firstChild.nodeValue = time;
	time = Number(time);
};
function changeBtns(btn1, btn2){
	if (btn1) {
		startStopBtn.textContent = btn1;
		startStopBtn.className = btn1;
	};
	if (btn2) {
		btn2El.textContent = btn2;
		btn2El.className = btn2;
	};
	
};
function writeLog(){
	let el = document.createElement("li");
	let text = document.createTextNode(time);
	el.appendChild(text);
	document.querySelector(".log ol").appendChild(el);
};


form.addEventListener("click", checkClick, false);

