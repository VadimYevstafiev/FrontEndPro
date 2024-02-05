const d = new Date();
    document.getElementById("day").innerHTML = d.getDate();
    
    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    document.getElementById("month").innerHTML = month[d.getMonth()];

const city = 'PARIS';

(async function (city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    let response = await fetch(url);
    if (response.ok) {
        let result = await response.json();
        showWeather(result);
    } else {
        console.log(error);
        alert (`HTTP-error: ${response.status}`);
    }
})(city);

function showWeather(data) {
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.classList.add('icon');
    document.querySelector('.weatherIcon').append(icon);
    document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}&deg;`;
    document.querySelector('.description').innerHTML = `${data.weather[0].main}`;
    document.querySelector('.city').innerHTML = `${data.name}, ${data.sys.country}`;
}
