// STICKY HEADER
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ANIMAZIONE CONTATORI R&D
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // Durata dell'animazione in millisecondi
        const increment = target / (duration / 16); // Circa 60 frame al secondo

        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// Innesca l'animazione solo quando l'utente scorre fino alla sezione R&D
const rndSection = document.getElementById('ricerca');

window.addEventListener('scroll', () => {
    if (!hasAnimated && rndSection) {
        const sectionPos = rndSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        // Se la sezione entra nel campo visivo
        if (sectionPos < screenPos) {
            animateCounters();
            hasAnimated = true; // Impedisce all'animazione di ripetersi
        }
    }
});
