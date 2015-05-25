$(document).ready(function() {

	function displayTime() {
		var meridiem = "AM";
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		if (hours > 12) {
			hours -= 12;
			meridiem = "PM";
		}
		if (!hours) {
			hours = 12;
		}

		var clockElement = document.getElementById('clock');
		clockElement.innerHTML = hours.toString().paddingLeft('00')+ ":" + minutes.toString().paddingLeft('00') 
			+ ":" + seconds.toString().paddingLeft('00') + " " + meridiem;
	};

	displayTime();
	setInterval(displayTime, 1000);
});

String.prototype.paddingLeft = function(paddingValue) {
	return String(paddingValue + this).slice(-paddingValue.length);
}
