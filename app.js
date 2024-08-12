// script.js
const numHearts = 95; // Number of hearts to display
const heartsContainer = document.getElementById('hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️'; // Default heart emoji
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 1}s`; // Randomize animation duration
    heartsContainer.appendChild(heart);
}

// Generate hearts
for (let i = 0; i < numHearts; i++) {
    createHeart();
}

// Handle message and heart updates
const message = document.getElementById('message');
const text = document.getElementById('text');
const emoji = document.getElementById('emoji');

// Arrays of messages and emojis
const messages = [
    { text: 'I love your smile', emoji: '❤️' },
    { text: 'And I love your butt', emoji: '🍑' }
];

let currentIndex = 0;

// Function to update hearts
function updateHearts(newEmoji) {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.textContent = newEmoji;
    });
}

// Function to change message and hearts
function changeMessageAndHearts() {
    currentIndex = (currentIndex + 1) % messages.length; // Cycle through messages
    const { text: newText, emoji: newEmoji } = messages[currentIndex];
    text.textContent = newText;
    emoji.textContent = newEmoji;
    updateHearts(newEmoji); // Update hearts to new emoji
}

// Change message and hearts every 5 seconds
setInterval(changeMessageAndHearts, 2000);
