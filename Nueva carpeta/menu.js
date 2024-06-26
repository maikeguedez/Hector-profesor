document.addEventListener('DOMContentLoaded', function() {
    // Menú de hamburguesa
    const hamburguer = document.querySelector('.hamburguer');
    const menuNavegacion = document.querySelector('.menu-navegacion');

    hamburguer.addEventListener('click', () => {
        menuNavegacion.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!hamburguer.contains(e.target) && !menuNavegacion.contains(e.target)) {
            menuNavegacion.classList.remove('active');
        }
    });

    // Scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            menuNavegacion.classList.remove('active');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animaciones de scroll
    ScrollReveal().reveal('.destino-card', { 
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 200
    });

    ScrollReveal().reveal('.experiencia-item', { 
        delay: 200,
        distance: '50px',
        origin: 'left',
        interval: 200
    });

    ScrollReveal().reveal('.alojamiento-card', { 
        delay: 200,
        distance: '50px',
        origin: 'right',
        interval: 200
    });

    // Efecto de desvanecimiento para las secciones
    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Efecto de aparición para los elementos de la sección de experiencias
    const experienceItems = document.querySelectorAll('.experiencia-item');
    const experienceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    experienceItems.forEach(item => {
        experienceObserver.observe(item);
    });

    // Efecto parallax para el encabezado
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        let scroll = window.pageYOffset;
        header.style.backgroundPositionY = scroll * 0.5 + 'px';
    });

    // Efecto de texto que se escribe
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        new Typed(typingText, {
            strings: ["Descubre el paraíso", "Vive la aventura", "Relájate en la playa"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    }

    // Inicialización de la galería lightbox
    const galleryImages = document.querySelectorAll('.img-galeria');
    if (galleryImages.length > 0) {
        lightGallery(document.querySelector('.contenedor-galeria'), {
            selector: '.img-galeria'
        });
    }
});