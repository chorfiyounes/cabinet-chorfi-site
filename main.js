// Navigation scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// Mobile burger menu — replace char with animated spans
const burger = document.getElementById('burger');
if (burger) {
  burger.innerHTML = '<span></span><span></span><span></span>';

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('nav-open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#navbar')) {
      document.body.classList.remove('nav-open');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('nav-open'));
  });
}

// Project filter tabs (projets-phares.html)
const filterTabs = document.querySelectorAll('.filter-tab');
const sectorSections = document.querySelectorAll('.sector-section');
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    sectorSections.forEach(section => {
      section.style.display = (filter === 'all' || section.dataset.sector === filter) ? '' : 'none';
    });
  });
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  const subject = encodeURIComponent('Demande de contact — cabinet-chorfi.com');
  const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:chorfi.younes@gmail.com?subject=${subject}&body=${body}`;
  const success = document.getElementById('form-success');
  if (success) success.style.display = 'block';
  form.reset();
}

// === ANIMATIONS ===

// 1. Hero fade-up on load
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    Array.from(heroContent.children).forEach((el, i) => {
      el.classList.add('fade-up');
      el.style.animationDelay = `${0.1 + i * 0.18}s`;
    });
  }
});

// 2. Scroll reveal with cascade
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll(
  '.phare-card, .partner-logo-item, .sector-card, .mission-card, .award-card, .team-card, .service-card'
).forEach((el) => {
  el.classList.add('reveal');
  const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal') || c.classList.contains('phare-card') || c.classList.contains('partner-logo-item') || c.classList.contains('sector-card') || c.classList.contains('mission-card') || c.classList.contains('award-card') || c.classList.contains('team-card') || c.classList.contains('service-card'));
  const idx = siblings.indexOf(el);
  el.style.transitionDelay = `${Math.min(idx * 0.08, 0.5)}s`;
  revealObserver.observe(el);
});

// Section headings reveal
document.querySelectorAll('.section-eyebrow, .section-title, h2.section-title, .page-hero h1').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// 3. Animated counters
function animateCounter(el, target, suffix) {
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const raw = el.textContent.trim();
      const num = parseInt(raw);
      const suffix = raw.replace(/[0-9]/g, '');
      if (!isNaN(num)) animateCounter(el, num, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));
