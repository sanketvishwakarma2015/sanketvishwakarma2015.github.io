// Scroll-reveal and stagger animations powered by Motion (motion.dev), the
// standalone successor to Framer Motion for vanilla JS sites.
import { animate, inView, stagger, scroll } from 'https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Top-of-page scroll progress bar.
const progressBar = document.getElementById('scrollProgress');
if (progressBar && !reduceMotion) {
    scroll(animate(progressBar, { scaleX: [0, 1] }, { easing: 'linear' }));
}

// Parallax drift for the hero 3D stage as the page scrolls.
const heroStage = document.getElementById('heroStage');
if (heroStage && !reduceMotion) {
    scroll(animate(heroStage, { transform: ['translateY(0px)', 'translateY(80px)'] }, { easing: 'linear' }), {
        target: document.querySelector('.hero'),
    });
}

function reveal(selector, options = {}) {
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;

    if (reduceMotion) {
        targets.forEach((el) => (el.style.opacity = 1));
        return;
    }

    targets.forEach((el) => {
        el.style.opacity = 0;
    });

    inView(selector, ({ target }) => {
        animate(
            target,
            { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0)'] },
            { duration: 0.6, easing: [0.22, 1, 0.36, 1], ...options }
        );
    }, { margin: '0px 0px -10% 0px' });
}

reveal('.section-title');
reveal('.section-subtitle');

// Stagger card/badge groups so they cascade in rather than pop together.
document.querySelectorAll('.cards-grid, .tech-stack, .blog-posts').forEach((group) => {
    const items = group.children;
    if (!items.length) return;

    if (reduceMotion) {
        Array.from(items).forEach((el) => (el.style.opacity = 1));
        return;
    }

    Array.from(items).forEach((el) => (el.style.opacity = 0));

    inView(group, () => {
        animate(
            items,
            { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
            { duration: 0.5, delay: stagger(0.08), easing: [0.22, 1, 0.36, 1] }
        );
    }, { margin: '0px 0px -10% 0px' });
});

// Hero entrance animation.
if (!reduceMotion) {
    const hero = document.querySelector('.hero');
    if (hero) {
        animate(
            hero.querySelectorAll('.eyebrow, h1, .subtitle, .description, .cta-buttons'),
            { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0)'] },
            { duration: 0.7, delay: stagger(0.1), easing: [0.22, 1, 0.36, 1] }
        );
    }

    const stage = document.getElementById('heroStage');
    if (stage) {
        animate(
            stage,
            { opacity: [0, 1], transform: ['scale(0.85)', 'scale(1)'] },
            { duration: 0.9, delay: 0.2, easing: [0.22, 1, 0.36, 1] }
        );
    }
}
