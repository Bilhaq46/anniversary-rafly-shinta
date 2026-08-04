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
