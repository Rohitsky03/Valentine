/* ===============================
   ELEMENTS
================================ */
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("bg-music");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
const slides = document.querySelectorAll(".slide");

/* ===============================
   NO BUTTON RUN-AWAY LOGIC
================================ */
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

/* ===============================
   YES BUTTON (ALL EFFECTS)
================================ */
let slideshowStarted = false;

yesBtn.addEventListener("click", () => {
    // Show popup
    popup.classList.add("show");

    // Play music safely
    if (music && music.paused) {
        music.play().catch(() => {});
    }

    // Confetti
    launchConfetti();

    // Start slideshow only once
    if (!slideshowStarted) {
        startSlideshow();
        slideshowStarted = true;
    }

    // Mobile vibration
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
});

/* ===============================
   FLOATING HEARTS BACKGROUND
================================ */
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

/* ===============================
   CONFETTI EFFECT
================================ */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function launchConfetti() {
    confettiPieces = [];

    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 20 + 10,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`
        });
    }

    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.d / 4;
    });

    if (confettiPieces.some(p => p.y < canvas.height)) {
        requestAnimationFrame(animateConfetti);
    }
}

/* ===============================
   SLIDESHOW
================================ */
let currentSlide = 0;

function startSlideshow() {
    if (slides.length === 0) return;

    slides[0].classList.add("active");

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 2500);
}

/* ===============================
   RESIZE FIX
================================ */
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
