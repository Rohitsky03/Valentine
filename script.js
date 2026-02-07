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
