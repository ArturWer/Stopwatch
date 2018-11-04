"use strict"
let form = document.querySelector("form"),
    stopwatchEl = document.querySelector(".stopwatch"),
    startStopBtn = document.getElementById('startStopBtn'),
	time = 0,
	intervalId;

function checkClick(e) {
	e.preventDefault();
	e.stopPropagation();
	let button = e.target.className;
	console.log(button);
	if (button === "start") {
			intervalId = startStopwatch();
			console.log(intervalId);
			startStopBtn.textContent = "Stop";
			startStopBtn.className = "stop";
	} else if (button === "stop"){
		clearInterval(intervalId);
		startStopBtn.textContent = "Start";
		startStopBtn.className = "start";
		
	} else if (button === "resetButton"){
		time = 0;
	} else if (button === "clearLogButton"){
		
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
}



form.addEventListener("click", checkClick, false);

