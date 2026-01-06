document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;
    let intervalId;

    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.slider-dots .dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToSlide(index) {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateDots();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    function startAutoplay() {
        intervalId = setInterval(nextSlide, 5000); // 5 seconds
    }

    function stopAutoplay() {
        clearInterval(intervalId);
    }

    if (sliderContainer) {
        createDots();
        startAutoplay();

        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        });

        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
            startAutoplay();
        });

        sliderContainer.addEventListener('mouseenter', stopAutoplay);
        sliderContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Animations with Motion One
    const { animate, inView } = motion;

    // Hero text animation
    animate('.slide-content h1', { y: [-50, 0], opacity: [0, 1] }, { duration: 0.8 });
    animate('.slide-content p', { y: [50, 0], opacity: [0, 1] }, { duration: 0.8, delay: 0.2 });
    animate('.slide-content .cta-button', { scale: [0.8, 1], opacity: [0, 1] }, { duration: 0.5, delay: 0.4 });

    // Section animations on scroll
    document.querySelectorAll('section').forEach(section => {
        inView(section, () => {
            animate(section, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        }, { amount: 0.3 });
    });
});
