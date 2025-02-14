// Generate random hearts at different positions
function generateHearts() {
    const heartContainer = document.querySelector('.heart-container');
    const numberOfHearts = 15;  // Adjust the number of hearts falling

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Randomize position and animation speed
        const randomLeft = Math.random() * 100; // 100% width
        const randomAnimationDuration = Math.random() * 3 + 4; // 4s to 7s animation

        heart.style.left = `${randomLeft}%`;
        heart.style.animationDuration = `${randomAnimationDuration}s`;

        heartContainer.appendChild(heart);
    }
}

// Call the function to generate hearts
generateHearts();
