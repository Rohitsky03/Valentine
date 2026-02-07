const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

// Run-away logic
noBtn.addEventListener("mouseenter", () => {
    const container = document.querySelector(".container");

    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Yes button popup
yesBtn.addEventListener("click", () => {
    popup.classList.add("show");
});
// Floating hearts generator
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);
const music = document.getElementById("bg-music");

document.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }
}, { once: true });
