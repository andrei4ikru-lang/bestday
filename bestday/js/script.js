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
    
    function autoScroll() {
        scrollPos += scrollSpeed;
        if (scrollPos >= track.scrollWidth - track.clientWidth) {
            scrollPos = 0;
        }
        track.scrollLeft = scrollPos;
    }
    
    setInterval(autoScroll, 50);
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lb.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}