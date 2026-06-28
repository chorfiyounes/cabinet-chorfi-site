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

// 3a. Falling measures background on hero / page-hero sections
(function() {
  const mesures = [
    '12.50m','3.60m²','248m²','6.80m','0.90m','18.00m',
    '45.20m²','2.40m','107m²','33.75m','8.50m','1.20m',
    '560m²','4.15m','22.30m','75m²','9.00m','3.14m',
    '0.60m','14.80m','200m²','5.50m','11.25m','38m²'
  ];
  function spawnOneNum(container) {
    const val = mesures[Math.floor(Math.random() * mesures.length)];
    const el = document.createElement('div');
    el.className = 'hero-bg-num';
    el.textContent = val;
    el.style.left = (Math.random() * 88 + 2) + '%';
    el.style.top = (Math.random() * 75 + 5) + '%';
    el.style.fontSize = (13 + Math.random() * 10) + 'px';
    const dur = (3 + Math.random() * 2).toFixed(2);
    el.style.animation = `heroBgNumFall ${dur}s ease forwards`;
    container.appendChild(el);
    setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, (parseFloat(dur) + 0.2) * 1000);
  }
  function startHeroNums(container) {
    for (let i = 0; i < 4; i++) setTimeout(() => spawnOneNum(container), i * 250);
    setInterval(() => spawnOneNum(container), 450);
  }
  const heroBg = document.getElementById('heroBgNums');
  if (heroBg) startHeroNums(heroBg);
  document.querySelectorAll('.page-hero .hero-bg-nums').forEach(bg => startHeroNums(bg));
})();

// 3b. Falling measures background on stats section
const statsBg = document.getElementById('statsBgNums');
if (statsBg) {
  const mesures = [
    '12.50m','3.60m²','248m²','6.80m','0.90m','18.00m',
    '45.20m²','2.40m','107m²','33.75m','8.50m','1.20m',
    '560m²','4.15m','22.30m','75m²','9.00m','3.14m',
    '0.60m','14.80m','200m²','5.50m','11.25m','38m²'
  ];
  function spawnMesures() {
    statsBg.innerHTML = '';
    const shuffled = [...mesures].sort(() => Math.random() - .5);
    shuffled.forEach((val, i) => {
      const el = document.createElement('div');
      el.className = 'stats-bg-num';
      el.textContent = val;
      el.style.left = (Math.random() * 88 + 2) + '%';
      el.style.top = (Math.random() * 65 + 8) + '%';
      el.style.fontSize = (11 + Math.random() * 9) + 'px';
      const dur = (2.2 + Math.random() * 1.5).toFixed(2);
      const delay = (i * 0.18).toFixed(2);
      el.style.animation = `statNumFall ${dur}s ${delay}s ease forwards`;
      statsBg.appendChild(el);
    });
  }
  const statsSection = document.querySelector('.stats');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) spawnMesures();
    });
  }, { threshold: 0.3 });
  if (statsSection) statsObserver.observe(statsSection);
}

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

// === LIGHTBOX + PROTECTION PHOTOS ===
(function() {
  function getImages(phareImg) {
    const base = phareImg.dataset.base;
    const count = parseInt(phareImg.dataset.count || '1');
    if (base && count > 0) {
      return Array.from({length: count}, (_, i) =>
        base + 'photo_' + String(i + 1).padStart(3, '0') + '.jpg'
      );
    }
    const img = phareImg.querySelector('img');
    return img ? [img.src] : [];
  }

  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = `
    <div class="lb-overlay"></div>
    <div class="lb-content">
      <button class="lb-close" aria-label="Fermer">&#x2715;</button>
      <button class="lb-prev" aria-label="Précédent">&#8249;</button>
      <div class="lb-img-wrap">
        <img class="lb-img" src="" alt="" draggable="false" />
        <div class="lb-img-shield"></div>
      </div>
      <button class="lb-next" aria-label="Suivant">&#8250;</button>
      <div class="lb-counter"></div>
    </div>
  `;
  document.body.appendChild(lb);

  let images = [], idx = 0;

  function showImg(i) {
    idx = (i + images.length) % images.length;
    lb.querySelector('.lb-img').src = images[idx];
    const hasMult = images.length > 1;
    lb.querySelector('.lb-prev').style.display = hasMult ? '' : 'none';
    lb.querySelector('.lb-next').style.display = hasMult ? '' : 'none';
    lb.querySelector('.lb-counter').textContent = hasMult ? (idx + 1) + ' / ' + images.length : '';
  }

  function openLb(phareImg) {
    images = getImages(phareImg);
    if (!images.length) return;
    showImg(0);
    lb.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    lb.classList.remove('lb-open');
    document.body.style.overflow = '';
    setTimeout(() => { lb.querySelector('.lb-img').src = ''; }, 300);
  }

  lb.querySelector('.lb-close').addEventListener('click', closeLb);
  lb.querySelector('.lb-overlay').addEventListener('click', closeLb);
  lb.querySelector('.lb-prev').addEventListener('click', () => showImg(idx - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => showImg(idx + 1));

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('lb-open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') showImg(idx - 1);
    if (e.key === 'ArrowRight') showImg(idx + 1);
  });

  let touchStartX = 0;
  lb.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, {passive: true});
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) showImg(dx < 0 ? idx + 1 : idx - 1);
  });

  document.querySelectorAll('.phare-img').forEach(phareImg => {
    phareImg.addEventListener('click', () => openLb(phareImg));
  });

  // Protection : bloquer clic droit sur toutes les images du site
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
})();
