"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
	const secondsHand = document.querySelector("#seconds-hand");
	const minutesHand = document.querySelector("#minutes-hand");
	const hoursHand = document.querySelector("#hours-hand");
	getTimeAnalog(secondsHand, minutesHand, hoursHand);

	const secondsDigital = document.querySelector("#digital-seconds");
	const minutesDigital = document.querySelector("#digital-minutes");
	const hoursDigital = document.querySelector("#digital-hours");
	getTimeDigital(secondsDigital, minutesDigital, hoursDigital);
	setInterval(() => {
		getTimeDigital(secondsDigital, minutesDigital, hoursDigital);
		getTimeAnalog(secondsHand, minutesHand, hoursHand);
	}, 1000);
}

function getTimeAnalog(secondsHand, minutesHand, hoursHand){
	const currentDate = new Date();
	const seconds = currentDate.getSeconds();
	const minutes = currentDate.getMinutes();
	const hours = currentDate.getHours();
	const timeInterval = 6; //360° / 60 (minutes) -> 6

	secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
	minutesHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`;
	hoursHand.style.transform = `rotate(${hours * 30 + minutes/2}deg)`;
}

function getTimeDigital(secondsDigital, minutesDigital, hoursDigital){
	const currentDate = new Date();
	let seconds = currentDate.getSeconds();
	let minutes = currentDate.getMinutes();
	let hours = currentDate.getHours();

	
	checkForSingleDigits(minutes);
	checkForSingleDigits(hours);
	
	secondsDigital.innerHTML = checkForSingleDigits(seconds);
	minutesDigital.innerHTML = checkForSingleDigits(minutes);
	hoursDigital.innerHTML = checkForSingleDigits(hours);
}

function checkForSingleDigits(n){
	if (n < 10) return n = "0" + n;

	return n;
}
