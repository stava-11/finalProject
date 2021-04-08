const apiKey = '56e1e2ff6741ec159b720dc15041bb08';
const lat = 43.4927;
const lon = 112.0408;
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

function capitalize(input) {
    let words = input.toLowerCase().split(' ');
    let newString = '';
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
        if (i < words.length - 1) {
            newString += words[i] + ' ';
        }
        else {
            newString += words[i]
        }
    }
    return newString;
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';
    document.getElementById(`icon`).setAttribute('src', imagesrc); 
    let t = parseInt(jsObject.current.temp);
    document.getElementById('temp').innerText = t;
    document.getElementById('humidity').innerText = jsObject.current.humidity;
    let s = parseInt(jsObject.current.wind_speed);
    document.getElementById('wind').innerText = s;
    
    var windChill;
    if (t <= 50 && s > 3) {
        windChill = Math.round(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16))) + "&#176;";
        
    } else {
        windChill = "N/A";
    }
    document.getElementById("windChill").innerHTML = windChill;

  });