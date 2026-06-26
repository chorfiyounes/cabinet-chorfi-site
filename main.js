// Navigation scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile burger menu
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#navbar')) {
      document.body.classList.remove('nav-open');
    }
  });
  // Close when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('nav-open'));
  });
}

// Project filter tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const sectorSections = document.querySelectorAll('.sector-section');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    sectorSections.forEach(section => {
      if (filter === 'all' || section.dataset.sector === filter) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
    });
  });
});

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  // Build mailto link as fallback
  const subject = encodeURIComponent('Demande de contact — cabinet-chorfi.com');
  const body = encodeURIComponent(
    `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:chorfi.younes@gmail.com?subject=${subject}&body=${body}`;

  // Show success message
  document.getElementById('form-success').style.display = 'block';
  form.reset();
}

// Smooth reveal on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate cards on scroll
document.querySelectorAll('.mission-card, .sector-card, .award-card, .team-card, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
