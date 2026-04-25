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

let currentSlide = 0;
const slides = ['work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg', 'work5.jpg', 'work6.jpg'];

function openLightbox(index) {
    currentSlide = index;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = 'img/' + slides[currentSlide];
    lb.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function changeSlide(event, direction) {
    event.stopPropagation();
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    document.getElementById('lightbox-img').src = 'img/' + slides[currentSlide];
}