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
