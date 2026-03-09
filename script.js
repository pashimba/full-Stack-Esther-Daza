// --- Carrusel (solo se ejecuta si existe en la página) ---
const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots-container');

if (track && prevBtn && nextBtn && dotsContainer) {
    const slides = document.querySelectorAll('.carousel-card');
    let currentIndex = 0;

    // Crear puntos (dots) automáticamente según la cantidad de slides
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Cambio automático cada 5 segundos
    setInterval(nextSlide, 5000);

    // Ajustar si cambia el tamaño de ventana
    window.addEventListener('resize', updateCarousel);
}

// --- Botón "Prueba Gratis" (solo en index.html) ---
const botonPrueba = document.getElementById('prueba-gratis');
if (botonPrueba) {
    botonPrueba.addEventListener('click', function() {
        window.location.href = 'prices.html';
    });
}

// --- FAQ Accordion (solo en download.html) ---
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('faq-active');

    // Cerrar todos los demás
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('faq-active');
    });

    // Si no estaba activo, abrirlo
    if (!isActive) {
        faqItem.classList.add('faq-active');
    }
}