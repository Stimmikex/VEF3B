var bulb4 = document.getElementById("bulb-4");
var bulb3 = document.getElementById("bulb-3");
var bulb2 = document.getElementById("bulb-2");
var timer2 = false;
var timer3 = false;

function light1() {
	bulb4.classList.toggle("light_on");
	if (!timer2) {
		window.setInterval(light2, 1000);
		timer2 = true;
	}

}
function light2() {
	bulb3.classList.toggle("light_on");
	if (!timer3) {
		window.setInterval(light3, 1000);
		timer3 = true;
	}
}
function light3() {
	bulb2.classList.toggle("light_on");
}
function seint() {
	window.setInterval(light1, 1000);
}


