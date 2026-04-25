document.addEventListener('DOMContentLoaded', function() {
    createConfetti();
    initCarousel();
});

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti';
    
    for (let i = 0; i < 20; i++) {
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

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;
    
    let scrollPos = 0;
    const scrollSpeed = 1;
    const interval = 50;
    
    function autoScroll() {
        scrollPos += scrollSpeed;
        if (scrollPos >= track.scrollWidth - track.clientWidth) {
            scrollPos = 0;
        }
        track.scrollLeft = scrollPos;
    }
    
    setInterval(autoScroll, interval);
    
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
}