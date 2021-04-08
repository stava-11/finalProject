const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

fetch(apiForecastURL)
.then((response) => response.json())
.then((jsObject) => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var d = new Date();
    var dayNumber = d.getDay();
    function getTime(inputVal) {
        if (inputVal.dt_txt.includes('18:00:00')) {
            return inputVal;
        }
    }
    let newDates = jsObject.list.filter(getTime);
    for (i = 0; i < 3 ; i++) {
        if (i + dayNumber > 7) {
            d = (dayNumber + i) - 7;
        } else {
            d = dayNumber + i;
        }
        document.getElementById(`day${i+1}`).textContent = weekDays[d];
        document.getElementById(`dayTemp${i+1}`).textContent = parseInt(newDates[dayNumber].main.temp);
    }
});