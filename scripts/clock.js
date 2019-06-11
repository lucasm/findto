'use strict';

function leading_0(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

function getCurrentTime(date) {
  var hours = date.getHours(),
      minutes = date.getMinutes(),
      // seconds = date.getSeconds(),
      // suffix = hours >= 12 ? 'PM' : 'AM',
      fullTime;

  hours = hours % 24; // set 12 for AM PM

  if (hours === 0) {
    hours = 12;
  }

  hours = leading_0(hours);
  minutes = leading_0(minutes);
  // seconds = leading_0(seconds);
  
  fullTime = hours + ':' + minutes; // + ':' + seconds + ' ' + suffix 

  return fullTime;
}

function getYear(date) {
  var year = date.getFullYear();

  return year;
} 

function getMonthDay(date) { 
  var day = date.getDate();

  return day;
} 

function getMonth(date) { 
  var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    month = months[date.getMonth()];

  return month;
} 

function getWkDay(date) { 
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    wkDay = weekdays[date.getDay()];

  return wkDay;
}

function callBySec(func) {
  setInterval(func, 1000);
}

function pushDate() { 
  var today = new Date(),
    wkDay,
    month,
    day,
    // year,
    time,
    d = document;

  wkDay = getWkDay(today);
  month = getMonth(today);
  day = getMonthDay(today);
  // year = getYear(today);
  time = getCurrentTime(today);

  d.getElementById('wkDay').textContent = wkDay;
  d.getElementById('month').textContent = month;
  d.getElementById('day').textContent = day;
  // d.getElementById('year').textContent = year;
  d.getElementById('time').textContent = time;
} 

function startClock() {
  callBySec(pushDate);
}
startClock();

// var d = new Date();
// var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// var date = document.getElementById("date");
// var time = document.getElementById("time");

// function getDate() {
//     date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
// }

// function timer() {
//     setTimeout(timer, 1000);
//     var d = new Date();
//     var hours = d.getHours();
//     var minutes = d.getMinutes();
//     var ampm = hours <= 11 ? 'am' : 'pm';    
//     var strTime = [hours % 24,
//                   (minutes < 10 ? "0" + minutes : minutes)
//                   ].join(':'); // + ampm
//     time.innerHTML = strTime;
//     setTimeout(timer, 1000);
// }

// getDate();
// timer();