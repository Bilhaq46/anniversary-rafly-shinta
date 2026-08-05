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
const photos = [
"assets/photos/1.jpg",
"assets/photos/2.jpg",
"assets/photos/3.jpg",
"assets/photos/4.jpg",
"assets/photos/5.jpg"
];

let current = 0;

setInterval(()=>{

current++;

if(current >= photos.length){
current = 0;
}

document.getElementById("slide").src = photos[current];

},3500);
const photos = [
  "assets/photos/1.jpg",
  "assets/photos/2.jpg",
  "assets/photos/3.jpg",
  "assets/photos/4.jpg",
  "assets/photos/5.jpg",
  "assets/photos/6.jpg",
  "assets/photos/7.jpg",
  "assets/photos/8.jpg",
  "assets/photos/9.jpg",
  "assets/photos/10.jpg",
  "assets/photos/11.jpg",
  "assets/photos/12.jpg",
  "assets/photos/13.jpg",
  "assets/photos/14.jpg",
  "assets/photos/15.jpg",
  "assets/photos/16.jpg",
  "assets/photos/17.jpg",
  "assets/photos/18.jpg",
  "assets/photos/19.jpg",
  "assets/photos/20.jpg",
  "assets/photos/21.jpg",
  "assets/photos/22.jpg",
  "assets/photos/23.jpg",
  "assets/photos/24.jpg",
  "assets/photos/25.jpg",
  "assets/photos/26.jpg"
];

const captions = [
  "Awal dari semua cerita kita ❤️",
  "Setiap senyummu adalah bahagiaku 😊",
  "Terima kasih sudah selalu ada 🤍",
  "Bersamamu semua terasa indah 🌹",
  "Menuju selamanya bersama 💍"
];

let current = 0;

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const music = document.getElementById("bgMusic");

document.getElementById("startBtn").addEventListener("click", () => {
  music.play();

  setInterval(() => {
    current++;

    if (current >= photos.length) {
      current = 0;
    }

    slide.style.opacity = "0";

    setTimeout(() => {
      slide.src = photos[current];
      caption.textContent = captions[current % captions.length];
      slide.style.opacity = "1";
    }, 500);

  }, 3000);
});
