"use strict"
let form = document.querySelector("form"),
    stopwatchEl = document.querySelector("#stopwatch"),
    startStopBtn = document.getElementById('startStopBtn'),
    btn2El = document.getElementById('btn2'),
    nullTime = new Date(null),
	intervalId;

	nullTime.setHours(null);
	console.log(`Created new object nullTime: ${nullTime}`);

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
		nullTime.setHours(null);
		nullTime.setMinutes(null);
		nullTime.setSeconds(null);
		nullTime.setMilliseconds(null);
		clearInterval(intervalId);
		stopwatchEl.textContent = "00:00:00.0";
		changeBtns("Start");
	} else if (button === "Lap"){
		writeLog();
	}
};

function startStopwatch(){
	if(stopwatchEl.hasAttribute("class")){
		stopwatchEl.removeAttribute("class");
	};	
	let intervalId = setInterval (function (){
		let milliSecs = nullTime.getMilliseconds(),
			msg;
		milliSecs+=100;
		nullTime.setMilliseconds(milliSecs);
		msg = `${nullTime.getHours()}:${nullTime.getMinutes()}:${nullTime.getSeconds()}.${(nullTime.getMilliseconds())/100}`;
		stopwatchEl.firstChild.nodeValue = msg;
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
	let msg = `${nullTime.getHours()}:${nullTime.getMinutes()}:${nullTime.getSeconds()}.${(nullTime.getMilliseconds())/100}`;
	let el = document.createElement("li");
	let text = document.createTextNode(msg);
	el.appendChild(text);
	document.querySelector(".log ol").appendChild(el);
};


form.addEventListener("click", checkClick, false);

