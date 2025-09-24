// Navbar Scroll Effect
const nav = document.querySelector('nav');

// Show navbar with animation on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    nav.style.top = '0';
  }, 500);
  
  // Highlight active section in navbar
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.hero-content .name', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero-content .portfolio-title', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
gsap.from('.hero-content .cta-button', { opacity: 0, scale: 0.8, duration: 1, delay: 1.1 });

// About Section Animation
gsap.from('.about-left h2', {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: '.about',
    start: 'top 80%',
  },
});

gsap.from('.about-right > *', { // Target both p and profile-pic inside about-right
  opacity: 0,
  x: 100,
  duration: 1,
  stagger: 0.2, // Stagger the animation of the paragraph and the picture
  scrollTrigger: {
    trigger: '.about',
    start: 'top 80%',
  },
});

// Tools Section Animation
gsap.from('.tool-card', {
  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.tools',
    start: 'top 80%',
  },
});

// Work Section Animation
gsap.from('.project-card', {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.work',
    start: 'top 80%',
  },
});

// Contact Section Animation
gsap.from('.contact h2', { opacity: 0, y: -50, duration: 1, scrollTrigger: { trigger: '.contact', start: 'top 80%' } });
gsap.from('.contact h6', { opacity: 0, y: 50, duration: 1, delay: 0.3, scrollTrigger: { trigger: '.contact', start: 'top 80%' } });
gsap.from('.wave-group', { opacity: 0, y: 50, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: '.contact', start: 'top 70%' } });
gsap.from('.button', { opacity: 0, scale: 0.8, duration: 1, scrollTrigger: { trigger: '.button', start: 'top 90%' } });


