// ============================================
//  WOKL MUSIC STUDIO — Main JavaScript
// ============================================

const WHATSAPP_NUMBER = '919876543210'; // Update with real number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Wokl Music Studio! 👋 I'd like to enquire about your studio services and availability. Please get back to me. Thank you!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ── Navbar scroll effect ──
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
}
if (mobileClose && mobileMenu) {
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
}
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── Set active nav link ──
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ── WhatsApp links ──
document.querySelectorAll('[data-whatsapp]').forEach(el => {
  const custom = el.dataset.whatsapp;
  const msg = custom
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(custom)}`
    : WHATSAPP_URL;
  el.setAttribute('href', msg);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener noreferrer');
});

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Counter animation ──
function animateCounter(el, target, duration = 1800) {
  const startTime = performance.now();
  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ── Gallery lightbox ──
const galleryImages = document.querySelectorAll('.gallery-item img, .gal-item img');

if (galleryImages.length > 0) {
  // Create lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = `
    <div class="lb-backdrop"></div>
    <div class="lb-content">
      <button class="lb-close" id="lbClose">✕</button>
      <button class="lb-nav lb-prev" id="lbPrev">&#8592;</button>
      <img id="lbImg" src="" alt="Gallery Image">
      <button class="lb-nav lb-next" id="lbNext">&#8594;</button>
    </div>`;

  const lbStyle = document.createElement('style');
  lbStyle.textContent = `
    #lightbox { display:none; position:fixed; inset:0; z-index:9998; }
    #lightbox.open { display:block; }
    .lb-backdrop { position:absolute; inset:0; background:rgba(0,0,0,0.92); backdrop-filter:blur(8px); }
    .lb-content { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding:24px; }
    #lbImg { max-width:90vw; max-height:85vh; object-fit:contain; border-radius:12px; position:relative; z-index:1; box-shadow:0 20px 60px rgba(0,0,0,0.8); }
    .lb-close { position:fixed; top:24px; right:24px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; width:44px; height:44px; border-radius:50%; cursor:pointer; font-size:1rem; z-index:2; transition:all 0.2s; }
    .lb-close:hover { background:rgba(139,92,246,0.3); }
    .lb-nav { position:fixed; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); color:#fff; width:48px; height:48px; border-radius:50%; cursor:pointer; font-size:1.2rem; z-index:2; transition:all 0.2s; }
    .lb-nav:hover { background:rgba(139,92,246,0.3); }
    .lb-prev { left:24px; }
    .lb-next { right:24px; }
  `;
  document.head.appendChild(lbStyle);
  document.body.appendChild(lightbox);

  let currentIdx = 0;
  const imgArr = Array.from(galleryImages);

  function openLightbox(idx) {
    currentIdx = idx;
    document.getElementById('lbImg').src = imgArr[idx].src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  imgArr.forEach((img, i) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openLightbox(i));
  });

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => openLightbox((currentIdx - 1 + imgArr.length) % imgArr.length));
  document.getElementById('lbNext').addEventListener('click', () => openLightbox((currentIdx + 1) % imgArr.length));
  document.querySelector('.lb-backdrop').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox((currentIdx - 1 + imgArr.length) % imgArr.length);
    if (e.key === 'ArrowRight') openLightbox((currentIdx + 1) % imgArr.length);
  });
}

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Splash Screen Controller ──
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;

  const enterBtn = document.getElementById('splashEnterBtn');
  const progressBar = document.getElementById('splashProgressBar');
  const canvas = document.getElementById('splashCanvas');

  // Lock scrolling while splash is active
  document.body.style.overflow = 'hidden';

  // ── 1. Particle & Wave Canvas Animation ──
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      color: Math.random() > 0.5 ? 'rgba(139, 92, 246, ' : 'rgba(245, 158, 11, ',
      alpha: Math.random() * 0.7 + 0.3
    }));

    function animateCanvas() {
      if (splash.classList.contains('hide-splash')) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color + '0.8)';
        ctx.fill();
      });

      requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
  }

  // ── 2. Dynamic Equalizer Bar Bounce ──
  const visualizer = document.querySelector('.splash-visualizer');
  if (visualizer) {
    visualizer.innerHTML = '';
    const barCount = 20;
    const bars = [];
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'splash-bar';
      bar.style.animationDelay = `${(i * 0.08).toFixed(2)}s`;
      visualizer.appendChild(bar);
      bars.push(bar);
    }

    setInterval(() => {
      if (splash.classList.contains('hide-splash')) return;
      bars.forEach(bar => {
        const randH = Math.floor(Math.random() * 38) + 8;
        bar.style.height = `${randH}px`;
      });
    }, 150);
  }

  // ── 3. Dismiss Splash Screen ──
  let dismissed = false;
  const dismissSplash = () => {
    if (dismissed) return;
    dismissed = true;
    splash.classList.add('hide-splash');
    document.body.style.overflow = '';
    setTimeout(() => {
      splash.style.display = 'none';
    }, 900);
  };

  // Start progress bar animation
  if (progressBar) {
    requestAnimationFrame(() => {
      progressBar.style.width = '100%';
    });
  }

  // Auto transition after 4.5 seconds
  const timer = setTimeout(dismissSplash, 4500);

  // Manual Enter click
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      clearTimeout(timer);
      dismissSplash();
    });
  }
});

