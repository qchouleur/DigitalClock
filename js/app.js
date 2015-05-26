$(document).ready(function() {

	function displayTime() {

		var clocks = $(".clock-screen");

		clocks.each(function() { 

			var timeZone = parseInt($(this).attr('data-time-zone'), 10);
			var date = new Date();
			var gmtDate = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
			gmtDate.setHours(gmtDate.getHours() + timeZone);

			var meridiem = "AM";
			var hours = gmtDate.getHours();
			var minutes = gmtDate.getMinutes();
			var seconds = gmtDate.getSeconds();
			if (hours > 12) {
				hours -= 12;
				meridiem = "PM";
			}
			if (!hours) {
				hours = 12;
			}

			$(this).html(hours.toString().paddingLeft('00')+ ":" + minutes.toString().paddingLeft('00') 
					+ ":" + seconds.toString().paddingLeft('00') + " " + meridiem);

		});

	};

	displayTime();
	setInterval(displayTime, 1000);
});

String.prototype.paddingLeft = function(paddingValue) {
	return String(paddingValue + this).slice(-paddingValue.length);
}
