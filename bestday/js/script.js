document.addEventListener('DOMContentLoaded', function() {
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti';
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('span');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.background = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
    
    document.body.appendChild(confettiContainer);
}

function getRandomColor() {
    const colors = ['#ffd700', '#ff4081', '#87ceeb', '#98fb98', '#ffb6c1', '#dda0dd'];
    return colors[Math.floor(Math.random() * colors.length)];
}