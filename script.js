// script.js

// Example interactivity: Smooth scroll to sections

document.querySelectorAll('header .hero-content h1').forEach((element) => {
    element.addEventListener('click', () => {
        alert('Welcome to My Portfolio!');
    });
});

// Navigation highlight example
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
        }
    });
});
