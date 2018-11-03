"use strict"
let form = document.querySelector("form");

function checkClick(e) {
	e.preventDefault();
	e.stopPropagation();
	let button = e.target.className;
	console.log(button);
}

form.addEventListener("click", checkClick, false);

