// ===== Elemen =====
const button = document.getElementById('startBtn');
const next = document.getElementById('nextSection');
const slide = document.getElementById('slide');
const caption = document.getElementById('caption');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

// Sembunyikan section kedua saat awal
next.style.display = 'none';

// ===== Countdown =====
const anniversary = new Date('2024-08-24T00:00:00');

function updateCountdown(){
  const now = new Date();
  const diff = now - anniversary;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown,1000);

// ===== Foto =====
const photos = [];
for(let i=1;i<=26;i++){
  photos.push(`assets/photos/${i}.jpg`);
}

const captions = [
  'Awal dari semua cerita kita ❤️',
  'Setiap senyummu adalah bahagiaku 😊',
  'Terima kasih sudah selalu ada 🤍',
  'Bersamamu semua terasa indah 🌹',
  'Menuju selamanya bersama 💍'
];

let current = 0;
let slideStarted = false;

function startSlideshow(){
  if(slideStarted) return;
  slideStarted = true;

  setInterval(()=>{
    current = (current + 1) % photos.length;

    slide.style.opacity = '0';

    setTimeout(()=>{
      slide.src = photos[current];
      caption.textContent = captions[current % captions.length];
      slide.style.opacity = '1';

      slide.classList.remove('zoom');
      void slide.offsetWidth;
      slide.classList.add('zoom');
    },500);

  },3000);
}

// ===== Tombol Open Story =====
button.onclick = async () => {

  try{
    await music.play();
    musicBtn.textContent = '⏸️';
  }catch(err){
    console.log(err);
  }

  button.innerHTML = 'Loading Our Story ❤️';
  button.disabled = true;

  document.body.style.transition = '1s';
  document.body.style.opacity = '.2';

  setTimeout(()=>{
    document.body.style.opacity = '1';
    next.style.display = 'block';
    next.scrollIntoView({behavior:'smooth'});
    button.innerHTML = 'Our Story ❤️';
  },1200);

  startSlideshow();
};

// ===== Tombol Musik =====
musicBtn.onclick = async () => {
  if(music.paused){
    try{
      await music.play();
      musicBtn.textContent = '⏸️';
    }catch(err){
      console.log(err);
    }
  }else{
    music.pause();
    musicBtn.textContent = '🎵';
  }
};
/* ==========================================================
                SCRIPT.JS PART 3
 ROSE PETALS • HEARTS • STARS • CONFETTI • CINEMATIC
 PLAYLIST ANIMATION • LOVE POPUP • PREMIUM EFFECTS
========================================================== */


/* ===========================================
🌸 ROSE PETALS EFFECT
=========================================== */

function createRosePetal(){

const petal=document.createElement("div");

petal.className="rose-petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(15+Math.random()*20)+"px";

petal.style.animationDuration=(5+Math.random()*6)+"s";

petal.style.transform=
`rotate(${Math.random()*360}deg)`;

document.body.appendChild(petal);


setTimeout(()=>{

petal.remove();

},12000);

}


setInterval(createRosePetal,600);



/* ===========================================
💖 FLOATING HEARTS
=========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML=["❤️","💖","💕","💗","💘"]
[Math.floor(Math.random()*5)];


heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(12+Math.random()*25)+"px";


heart.style.animationDuration=
(4+Math.random()*5)+"s";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},9000);

}


setInterval(createHeart,800);




/* ===========================================
⭐ STAR / SPARKLE EFFECT
=========================================== */

function createStar(){

const star=document.createElement("div");

star.className="sparkle-star";

star.innerHTML="✨";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


star.style.animationDuration=
(1+Math.random()*3)+"s";


document.body.appendChild(star);


setTimeout(()=>{

star.remove();

},4000);

}


setInterval(createStar,500);




/* ===========================================
🎊 CONFETTI
=========================================== */

function launchConfetti(){

for(let i=0;i<80;i++){

const confetti=document.createElement("span");

confetti.className="confetti";

confetti.innerHTML="🎊";


confetti.style.left=
Math.random()*100+"vw";


confetti.style.animationDelay=
Math.random()*2+"s";


confetti.style.animationDuration=
(3+Math.random()*3)+"s";


document.body.appendChild(confetti);


setTimeout(()=>{

confetti.remove();

},7000);

}

}




/* ===========================================
🎁 TRIGGER CONFETTI BUTTON
=========================================== */

const giftButton=
document.querySelector(".gift-button");


if(giftButton){

giftButton.addEventListener("click",()=>{

launchConfetti();

});

}




/* ===========================================
🎬 ENDING CINEMATIC
=========================================== */


const ending=
document.querySelector(".ending-section");


function startEnding(){

if(!ending)return;


ending.classList.add("cinematic-show");


setTimeout(()=>{

launchConfetti();

},1000);


}


const endingObserver=
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startEnding();

}

});

});


if(ending){

endingObserver.observe(ending);

}




/* ===========================================
🎵 PLAYLIST ANIMATION
=========================================== */


const songs=
document.querySelectorAll(".playlist-item");


songs.forEach(song=>{


song.addEventListener("click",()=>{


songs.forEach(item=>{

item.classList.remove("playing");

});


song.classList.add("playing");


});


});




/* ===========================================
❤️ LOVE POPUP
=========================================== */


const loveMessages=[

"Aku selalu memilih kamu ❤️",

"Kamu adalah hadiah terindah dalam hidupku 💖",

"Terima kasih sudah bertahan bersamaku 🌹",

"Aku ingin membuat lebih banyak kenangan denganmu ✨",

"Shinta, kamu selalu punya tempat spesial di hatiku ❤️"

];


function showLovePopup(){


const popup=document.createElement("div");


popup.className="love-popup";


popup.innerHTML=
loveMessages[
Math.floor(Math.random()*loveMessages.length)
];


document.body.appendChild(popup);



setTimeout(()=>{

popup.classList.add("show");

},100);



setTimeout(()=>{

popup.classList.remove("show");


setTimeout(()=>{

popup.remove();

},500);


},3500);



}


setInterval(showLovePopup,10000);





/* ===========================================
✨ PREMIUM CURSOR TRAIL
=========================================== */


document.addEventListener("mousemove",(e)=>{


const sparkle=document.createElement("span");


sparkle.className="cursor-sparkle";

sparkle.innerHTML="✨";


sparkle.style.left=e.pageX+"px";

sparkle.style.top=e.pageY+"px";


document.body.appendChild(sparkle);


setTimeout(()=>{

sparkle.remove();

},1000);


});



/* ===========================================
💫 SMOOTH REVEAL ANIMATION
=========================================== */


const revealElements=
document.querySelectorAll(".reveal");


const revealObserver=
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active");

}


});


});


revealElements.forEach(el=>{

revealObserver.observe(el);

});
