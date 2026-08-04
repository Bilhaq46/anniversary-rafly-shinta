const button = document.getElementById("startBtn");
const next = document.getElementById("nextSection");

next.style.display = "none";

button.onclick = () => {

button.innerHTML = "Loading Our Story ❤️";

button.disabled = true;

document.body.style.transition = "1s";

document.body.style.opacity = ".2";

setTimeout(()=>{

document.body.style.opacity="1";

next.style.display="block";

next.scrollIntoView({
behavior:"smooth"
});

button.innerHTML="Our Story ❤️";

},1200);

}
const anniversary = new Date("2024-08-24T00:00:00");

setInterval(() => {

const now = new Date();

const diff = now - anniversary;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = now.getHours();

const minutes = now.getMinutes();

const seconds = now.getSeconds();

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);
