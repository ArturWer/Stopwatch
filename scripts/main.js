"use strict"
let form = document.querySelector("form"),
    stopwatchEl = document.querySelector(".stopwatch"),
	time = 0,
	intervalId;

function checkClick(e) {
	e.preventDefault();
	e.stopPropagation();
	let button = e.target.className;
	console.log(button);
	if (button === "startBtn") {
		if(time === 0){
			intervalId = startStopwatch();
			console.log(intervalId);
			let startBtnEl = document.querySelector(".startBtn");
			startBtnEl.textContent = "Continue";
		}
	} else if (button === "stopBtn"){
		clearInterval(intervalId);
		time = 0;
	} else if (button === "resetButton"){
		
	} else if (button === "clearLogButton"){
		
	}
};

function startStopwatch(){
	let intervalId = setInterval (timeGo, 100);
	return intervalId;
};

function timeGo(){
	time+=0.1;
	time = time.toFixed(1);
	time = Number(time);
	stopwatchEl.firstChild.nodeValue = time;
	console.log(`timeGo ${time}`);
}



form.addEventListener("click", checkClick, false);

