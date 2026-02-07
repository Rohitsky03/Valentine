const noBtn = document.getElementById('no-btn');

// Add a 'mouseover' event listener to the 'No' button
noBtn.addEventListener('mouseover', function() {
    // Generate random positions within the viewport
    const newX = Math.floor(Math.random() * window.innerWidth * 0.7);
    const newY = Math.floor(Math.random() * window.innerHeight * 0.7);

    // Apply the new position
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

// Optional: Add a confirmation for the 'Yes' button
const yesBtn = document.getElementById('yes-btn');
yesBtn.addEventListener('click', function() {
    alert("Yay! I knew you'd say yes! ❤️");
    // You could also redirect to a new page or display a cute GIF here
});
