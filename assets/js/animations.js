// Motion.dev v10 � scroll-linked animations with dramatic card entrances,
// wipe-in text reveals, counters, and a parallax hero stage.
import { animate, inView, stagger, scroll } from 'https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// -- SCROLL PROGRESS BAR ------------------------------------------------------
const bar = document.getElementById('scrollProgress');
if (bar && !reduceMotion) {
  scroll(animate(bar, { scaleX: [0, 1] }, { easing: 'linear' }));
}

// -- HERO ENTRANCE ------------------------------------------------------------
const heroCopy = document.querySelector('.hero-copy');
if (heroCopy) {
  const els = heroCopy.querySelectorAll('.terminal-tag, h1, .typewriter-row, .hero-desc, .hero-stats, .cta-buttons, .hero-badge');
  if (reduceMotion) {
    [...els].forEach(el => (el.style.opacity = 1));
  } else {
    animate([...els],
      { opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0)'] },
      { duration: 0.85, delay: stagger(0.1), easing: [0.22, 1, 0.36, 1] }
    );
  }
}
const stage = document.getElementById('heroStage');
if (stage && !reduceMotion) {
  animate(stage,
    { opacity: [0, 1], transform: ['scale(0.84) rotate(-5deg)', 'scale(1) rotate(0deg)'] },
    { duration: 1.2, delay: 0.25, easing: [0.22, 1, 0.36, 1] }
  );
}

if (reduceMotion) {
  document.querySelectorAll('.section-label,.section-title,.section-subtitle,.card,.tech-badge,.blog-post,.cta-band').forEach(el => (el.style.opacity = 1));
} else {

  // -- SECTION LABEL � fade + slide ------------------------------------------
  document.querySelectorAll('.section-label').forEach(el => {
    el.style.opacity = 0;
    inView(el, () => animate(el,
      { opacity: [0, 1], transform: ['translateY(12px)', 'translateY(0)'] },
      { duration: 0.5, easing: [0.22, 1, 0.36, 1] }
    ), { margin: '0px 0px -5% 0px' });
  });

  // -- SECTION TITLE � clip-path wipe in from left (works with gradient text) -
  document.querySelectorAll('.section-title').forEach(el => {
    el.style.opacity = 0;
    el.style.clipPath = 'inset(0 100% 0 0)';
    inView(el, () => animate(el,
      { opacity: [0, 1], clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'] },
      { duration: 0.75, easing: [0.22, 1, 0.36, 1] }
    ), { margin: '0px 0px -5% 0px' });
  });

  // -- SECTION SUBTITLE � fade + slide --------------------------------------
  document.querySelectorAll('.section-subtitle').forEach(el => {
    el.style.opacity = 0;
    inView(el, () => animate(el,
      { opacity: [0, 1], transform: ['translateY(10px)', 'translateY(0)'] },
      { duration: 0.55, delay: 0.1, easing: [0.22, 1, 0.36, 1] }
    ), { margin: '0px 0px -5% 0px' });
  });

  // -- CARDS � fly in from alternating sides with 3D tilt -------------------
  document.querySelectorAll('.cards-grid').forEach(group => {
    const items = [...group.children];
    items.forEach((el, i) => {
      el.style.opacity = 0;
      const x = i % 2 === 0 ? -90 : 90;
      el.style.transform = `translateX(${x}px) translateY(18px) scale(0.88) rotateY(${i % 2 === 0 ? -10 : 10}deg)`;
    });
    inView(group, () => {
      items.forEach((el, i) => {
        const x = i % 2 === 0 ? -90 : 90;
        const ry = i % 2 === 0 ? -10 : 10;
        // Row-based delay: pairs of cards come in together, rows stagger
        const rowDelay = Math.floor(i / 2) * 0.18 + (i % 2) * 0.07;
        animate(el,
          {
            opacity: [0, 1],
            transform: [
              `translateX(${x}px) translateY(18px) scale(0.88) rotateY(${ry}deg)`,
              'translateX(0px) translateY(0px) scale(1) rotateY(0deg)'
            ]
          },
          { duration: 0.75, delay: rowDelay, easing: [0.16, 1, 0.3, 1] }
        );
      });
    }, { margin: '0px 0px -10% 0px' });
  });

  // -- TECH BADGES � cascade in like typing ---------------------------------
  document.querySelectorAll('.tech-stack').forEach(group => {
    const items = [...group.children];
    items.forEach(el => (el.style.opacity = 0));
    inView(group, () => {
      animate(items,
        { opacity: [0, 1], transform: ['translateY(12px) scale(0.9)', 'translateY(0) scale(1)'] },
        { duration: 0.4, delay: stagger(0.04), easing: [0.22, 1, 0.36, 1] }
      );
    }, { margin: '0px 0px -8% 0px' });
  });

  // -- BLOG POSTS � slide in from left --------------------------------------
  document.querySelectorAll('.blog-posts').forEach(group => {
    const items = [...group.children];
    items.forEach(el => (el.style.opacity = 0));
    inView(group, () => {
      animate(items,
        { opacity: [0, 1], transform: ['translateX(-40px)', 'translateX(0)'] },
        { duration: 0.6, delay: stagger(0.1), easing: [0.22, 1, 0.36, 1] }
      );
    }, { margin: '0px 0px -8% 0px' });
  });

  // -- CTA BAND � scale up from below ---------------------------------------
  const ctaBand = document.querySelector('.cta-band');
  if (ctaBand) {
    ctaBand.style.opacity = 0;
    inView(ctaBand, () => animate(ctaBand,
      { opacity: [0, 1], transform: ['translateY(40px) scale(0.97)', 'translateY(0) scale(1)'] },
      { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
    ), { margin: '0px 0px -8% 0px' });
  }
}

// -- COUNTER ANIMATION --------------------------------------------------------
document.querySelectorAll('.stat-num[data-count]').forEach(el => {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  if (reduceMotion) { el.textContent = target + suffix; return; }
  el.textContent = '0' + suffix;
  let started = false;
  inView(el, () => {
    if (started) return; started = true;
    const t0 = performance.now();
    const dur = 1500;
    function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
});
