// Cursor-follow spotlight glow and magnetic button hover effect.
(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const spotlight = document.getElementById('cursorSpotlight');
    if (spotlight && !reduceMotion) {
        window.addEventListener('mousemove', (e) => {
            spotlight.style.setProperty('--x', `${e.clientX}px`);
            spotlight.style.setProperty('--y', `${e.clientY}px`);
        });
    }

    if (reduceMotion) return;

    document.querySelectorAll('.magnetic').forEach((el) => {
        function onMove(e) {
            const rect = el.getBoundingClientRect();
            const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.25;
            const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.25;
            el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }

        function onLeave() {
            el.style.transform = '';
        }

        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
    });
})();
