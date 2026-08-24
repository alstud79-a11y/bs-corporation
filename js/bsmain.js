// HEADER SHADOW

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,0.9)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.background = 'transparent';
    header.style.backdropFilter = 'none';
  }
});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// SCROLL ANIMATION

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document
  .querySelectorAll('.about-content, .business-card, .portfolio-card, .contact')
  .forEach((el) => {
    observer.observe(el);
  });

const menuBtn = document.querySelector('.menu-btn');
const gnb = document.querySelector('.gnb');

menuBtn.addEventListener('click', () => {
  gnb.classList.toggle('active');
});
