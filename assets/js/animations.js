// Scroll-reveal and stagger animations powered by Motion (motion.dev), the
// standalone successor to Framer Motion for vanilla JS sites.
import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
            hero.querySelectorAll('h1, .subtitle, .description, .cta-buttons'),
            { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0)'] },
            { duration: 0.7, delay: stagger(0.12), easing: [0.22, 1, 0.36, 1] }
        );
    }
}
