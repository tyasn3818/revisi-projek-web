const slider = document.getElementById('slider');
const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');

rightBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: 380,
    behavior: 'smooth'
  });
});

leftBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: -380,
    behavior: 'smooth'
  });
});


// AUTO SLIDE
setInterval(() => {
  slider.scrollBy({
    left: 380,
    behavior: 'smooth'
  });

  if (
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth - 5
  ) {
    slider.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }
}, 4000);


// SCROLL ANIMATION
const fadeElements = document.querySelectorAll(
  '.hero-text, .hero-image, .work-card, .info-box, .skills-left, .skills-right, .contact-form'
);

fadeElements.forEach((el) => {
  el.classList.add('fade-in');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fadeElements.forEach((el) => {
  observer.observe(el);
});


// ACTIVE NAVBAR
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


// PARALLAX EFFECT
window.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.image-glow');

  let x = (window.innerWidth - e.pageX * 2) / 90;
  let y = (window.innerHeight - e.pageY * 2) / 90;

  glow.style.transform = `translate(${x}px, ${y}px)`;
});