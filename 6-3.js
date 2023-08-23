function myDigitalClock() {
  var d1 = new Date();
  var hours = d1.getHours(); // 0 - 23
  var minutes = d1.getMinutes(); // 0 - 59
  var seconds = d1.getSeconds(); // 0 - 59
  var zone = "AM";

  // Cnvrt to 12hr format also deter AM/PM
  if (hours >= 12) {
    zone = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  // adjust zero in clock digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // HH:MM:SS AM/PM format
  var timeString = hours + ":" + minutes + ":" + seconds + " " + zone;

  // Update DOM
  var clockElement = document.getElementById("digi-clock"); // Replace with the ID of source HTML
  if (clockElement) {
    clockElement.textContent = timeString;
  }

  // Set RR of clk to 1sec
  setTimeout(myDigitalClock, 1000);
}

myDigitalClock();
