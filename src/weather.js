const API_KEY = "5b78b6fe1efbc6d20dea1f53345ffb2c";

function onGeoOk(position){
     const lat = position.coords.latitude;
     const lng = position.coords.longitude;
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
     fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const weather = document.querySelector("#weather span:last-child");
            const city = document.querySelector("#weather span:first-child");
            city.innerText = `지역: ${data.name}/`;
            weather.innerText = `날씨: ${data.weather[0].main} / 온도: ${Math.round(data.main.temp)}'C`;
        });
}
function onGeoError(){
    console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);