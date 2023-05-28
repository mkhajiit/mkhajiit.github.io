const images = ["0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg"];
const weatherSpan = document.querySelectorAll("#weather span");

const chosenImage = images[Math.floor(Math.random() * images.length)]; //Math.random() 0이상 1미만

if(chosenImage === images[4]){
    for(let i=0;i < weatherSpan.length;i++){
        weatherSpan[i].style.color = "black";
    }
}

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.background = bgImage.src;