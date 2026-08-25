// 3D pointer-tilt effect for cards — gives glass panels a sense of depth on hover.
(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    function attachTilt(el) {
        const maxTilt = 8;

        function onMove(e) {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateY = (x - 0.5) * maxTilt * 2;
            const rotateX = (0.5 - y) * maxTilt * 2;
            el.style.transition = 'transform 0.1s ease-out';
            el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        }

        function onLeave() {
            el.style.transition = 'transform 0.4s ease';
            el.style.transform = '';
        }

        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
    }

    document.querySelectorAll('.card, .blog-post').forEach(attachTilt);
})();
