// Scroll-driven animations: progress bar, section reveals, stagger groups,
// hero entrance, counter animation, and 3D stage scale-in.
import { animate, inView, stagger, scroll } from 'https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// -- SCROLL PROGRESS BAR ----------------------------------------------------
const bar = document.getElementById('scrollProgress');
if (bar && !reduceMotion) {
  scroll(animate(bar, { scaleX: [0, 1] }, { easing: 'linear' }));
}

if (reduceMotion) {
  document.querySelectorAll('.section-label,.section-title,.section-subtitle,.card,.tech-badge,.blog-post,.cta-band').forEach(el => (el.style.opacity = 1));
} else {
  // -- GENERIC SINGLE-ELEMENT REVEAL ---------------------------------------
  function revealOn(sel, from = 'translateY(22px)', dur = 0.65) {
    document.querySelectorAll(sel).forEach(el => {
      el.style.opacity = 0;
      inView(el, () => animate(el, { opacity: [0,1], transform: [from, 'translateY(0)'] }, { duration: dur, easing: [0.22,1,0.36,1] }), { margin: '0px 0px -8% 0px' });
    });
  }

  revealOn('.section-label', 'translateY(14px)', 0.5);
  revealOn('.section-title', 'translateY(20px)', 0.6);
  revealOn('.section-subtitle', 'translateY(14px)', 0.5);
  revealOn('.cta-band', 'translateY(28px)', 0.7);

  // -- STAGGER GROUPS ------------------------------------------------------
  function staggerGroup(sel) {
    document.querySelectorAll(sel).forEach(group => {
      const items = [...group.children];
      items.forEach(el => (el.style.opacity = 0));
      inView(group, () => {
        animate(items,
          { opacity: [0,1], transform: ['translateY(24px)', 'translateY(0)'] },
          { duration: 0.55, delay: stagger(0.08), easing: [0.22,1,0.36,1] }
        );
      }, { margin: '0px 0px -8% 0px' });
    });
  }
  staggerGroup('.cards-grid');
  staggerGroup('.tech-stack');
  staggerGroup('.blog-posts');

  // -- HERO ENTRANCE --------------------------------------------------------
  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy) {
    const els = heroCopy.querySelectorAll('.terminal-tag, h1, .typewriter-row, .hero-desc, .hero-stats, .cta-buttons');
    animate([...els],
      { opacity: [0,1], transform: ['translateY(18px)', 'translateY(0)'] },
      { duration: 0.8, delay: stagger(0.1), easing: [0.22,1,0.36,1] }
    );
  }
  const stage = document.getElementById('heroStage');
  if (stage) {
    animate(stage,
      { opacity: [0,1], transform: ['scale(0.88) rotate(-4deg)', 'scale(1) rotate(0deg)'] },
      { duration: 1.1, delay: 0.2, easing: [0.22,1,0.36,1] }
    );
  }
}

// -- COUNTER ANIMATION -----------------------------------------------------
// Runs regardless of reduceMotion (just skips the tween if reduced)
document.querySelectorAll('.stat-num[data-count]').forEach(el => {
  const target = parseInt(el.dataset.count, 10);
  if (reduceMotion) { el.textContent = target; return; }
  el.textContent = '0';
  let started = false;
  inView(el, () => {
    if (started) return; started = true;
    const t0 = performance.now();
    const dur = 1400;
    function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
});
