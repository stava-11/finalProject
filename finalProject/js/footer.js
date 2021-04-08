var dayOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = dayOfWeek[d.getDay()];
var dayOfMonth = d.getDate();
var month = monthOfYear[d.getMonth()];
var year = d.getFullYear();

document.getElementById('currentDate').textContent = (day + ', ' + dayOfMonth + ' ' + month + ' ' + year + '.');
document.getElementById('year').textContent = year;