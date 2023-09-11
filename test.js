function myDate() {
  var a = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var r = weekdays[a.getDay()];
  document.getElementById("currentDayOfTheWeek").innerHTML = r;
}
setInterval(UTCTime);
function UTCTime() {
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var milli = time.getMilliseconds();
  document.getElementById("currentUTCTime").innerHTML =
    hrs + ":" + min + ":" + sec;
}
