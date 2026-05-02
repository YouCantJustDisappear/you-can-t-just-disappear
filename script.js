const elements = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});

elements.forEach(el=>observer.observe(el));

window.addEventListener("load", () => {

  const screen = document.getElementById("enter-screen");
  const music = document.getElementById("bg-music");

  screen.addEventListener("click", () => {

    // fade out suave
    screen.style.transition = "0.5s";
    screen.style.opacity = "0";

    setTimeout(() => {
      screen.remove();
    }, 500);

    // toca música
    if (music) {
      music.volume = 0.4;
      music.play().catch(() => {});
    }

  });

});