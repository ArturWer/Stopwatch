"use strict"
let form = document.querySelector("form"),
    stopwatchEl = document.querySelector("stopwatch"),
	time = 0,
	intervalId;

function checkClick(e) {
	e.preventDefault();
	e.stopPropagation();
	let button = e.target.className;
	console.log(button);
	if (button === "startBtn") {
		intervalId = startStopwatch();
		console.log(intervalId);
	} else if (button === "stopBtn"){
		clearInterval(intervalId);
	} else if (button === "resetButton"){
		
	} else if (button === "clearLogButton"){
		
	}
};

function startStopwatch(){
	let intervalId = setInterval (timeGo, 100);
	return intervalId;
};

function timeGo(){
	console.log("timeGo");
}



form.addEventListener("click", checkClick, false);

