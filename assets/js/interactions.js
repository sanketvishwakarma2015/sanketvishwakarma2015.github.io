// Navbar scroll class, active link highlight, mobile nav, cursor spotlight,
// typewriter effect, card 3D tilt, and magnetic buttons.
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // -- NAVBAR SCROLL ------------------------------------------------------
  const nav = document.querySelector('.navbar');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -- ACTIVE NAV LINK ----------------------------------------------------
  document.querySelectorAll('.nav-link[href]').forEach(a => {
    const href = a.getAttribute('href');
    const path = location.pathname;
    if ((href === '/' && path === '/') || (href !== '/' && path.startsWith(href))) {
      a.classList.add('active');
    }
  });

  // -- MOBILE MENU --------------------------------------------------------
  const toggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }

  // -- SCROLL TO TOP ------------------------------------------------------
  const stt = document.getElementById('scrollToTop');
  if (stt) {
    window.addEventListener('scroll', () => stt.classList.toggle('visible', scrollY > 500), { passive: true });
    stt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // -- CURSOR SPOTLIGHT --------------------------------------------------
  const spotlight = document.getElementById('cursorSpotlight');
  if (spotlight && !reduceMotion) {
    window.addEventListener('mousemove', e => {
      spotlight.style.setProperty('--x', e.clientX + 'px');
      spotlight.style.setProperty('--y', e.clientY + 'px');
    }, { passive: true });
  }

  // -- TYPEWRITER --------------------------------------------------------
  const tw = document.querySelector('.typewriter');
  if (tw) {
    let words;
    try { words = JSON.parse(tw.dataset.words || '[]'); } catch { words = []; }
    if (words.length) {
      let wi = 0, ci = 0, deleting = false;
      function type() {
        const word = words[wi];
        if (!deleting) {
          tw.textContent = word.slice(0, ++ci);
          if (ci === word.length) { deleting = true; setTimeout(type, 2000); return; }
          setTimeout(type, 85);
        } else {
          tw.textContent = word.slice(0, --ci);
          if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
          setTimeout(type, 45);
        }
      }
      // Small delay so hero entrance animation finishes first
      setTimeout(type, 800);
    }
  }

  if (reduceMotion) return;

  // -- 3D TILT ------------------------------------------------------------
  document.querySelectorAll('.card, .blog-post').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      el.style.transition = 'transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s';
      el.style.transform  = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateZ(4px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s';
      el.style.transform  = '';
    });
  });

  // -- MAGNETIC BUTTONS --------------------------------------------------
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.28;
      const y = (e.clientY - r.top  - r.height / 2) * 0.28;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
})();
