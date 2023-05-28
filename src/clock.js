const CLOCK = document.querySelector("#clock");

function getClock(){
    const DATE = new Date();
    const HOURS = String(DATE.getHours()).padStart(2,"0");
    const MINUTES = String(DATE.getMinutes()).padStart(2,"0");
    const SECONDS = String(DATE.getSeconds()).padStart(2,"0");

    // CLOCK.innerHTML = `${HOURS}:${MINUTES}:${SECONDS}`;
    CLOCK.innerHTML = `${HOURS}:${MINUTES}:${SECONDS}`;
}

getClock();
setInterval(getClock,1000);