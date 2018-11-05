"use strict"
let form = document.querySelector("form"),
    stopwatchEl = document.querySelector(".stopwatch"),
    startStopBtn = document.getElementById('startStopBtn'),
    btn2El = document.getElementById('btn2'),
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
		stopwatchEl.textContent = "0.00 s";
		changeBtns("Start");
	} else if (button === "Lap"){
		writeLog();
	}
};

function startStopwatch(){
	let startTime = new Date(null);
	startTime.setHours(null);
	let intervalId = setInterval (function (){
		let milliSecs = startTime.getMilliseconds(),
			msg;
		milliSecs+=100;
		startTime.setMilliseconds(milliSecs);
		msg = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}.${(startTime.getMilliseconds())/100}`;

		console.log(msg);/*
		time+=0.1;
		time = time.toFixed(1);
		if (time>=60) {
			convertTime(time);
		}
		stopwatchEl.firstChild.nodeValue = `${time} s`;
		time = Number(time);*/
	}, 100);
	return intervalId;
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
	let msg = `${time} s`;
	let el = document.createElement("li");
	let text = document.createTextNode(msg);
	el.appendChild(text);
	document.querySelector(".log ol").appendChild(el);
};


form.addEventListener("click", checkClick, false);

