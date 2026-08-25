// 3D animated hero background built with Three.js — a rotating field of
// wireframe polyhedra connected by a floating particle mesh, reacting to mouse movement.
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('hero3d');
const hasHero = document.querySelector('.hero');
if (canvas && hasHero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Anchor the canvas to the hero section itself so it scrolls away with it
    // instead of floating over later sections.
    hasHero.style.position = 'relative';
    hasHero.insertBefore(canvas, hasHero.firstChild);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const colors = [0x6366f1, 0x8b5cf6, 0xec4899];
    const group = new THREE.Group();
    scene.add(group);

    // Floating wireframe polyhedra
    const shapes = [];
    for (let i = 0; i < 6; i++) {
        const geometry = new THREE.IcosahedronGeometry(0.3 + Math.random() * 0.35, 0);
        const material = new THREE.MeshBasicMaterial({
            color: colors[i % colors.length],
            wireframe: true,
            transparent: true,
            opacity: 0.22
        });
        const mesh = new THREE.Mesh(geometry, material);
        // Keep shapes away from the centered text column: push wide and further back.
        const side = i % 2 === 0 ? -1 : 1;
        mesh.position.set(
            side * (5.5 + Math.random() * 3.5),
            (Math.random() - 0.5) * 7,
            -3 - Math.random() * 4
        );
        mesh.userData.spin = (Math.random() - 0.5) * 0.01;
        group.add(mesh);
        shapes.push(mesh);
    }

    // Particle field for depth
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0x8b5cf6, size: 0.05, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    function resize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);
    resize();

    function animate() {
        requestAnimationFrame(animate);
        shapes.forEach((mesh) => {
            mesh.rotation.x += mesh.userData.spin;
            mesh.rotation.y += mesh.userData.spin;
        });
        particles.rotation.y += 0.0006;
        group.rotation.y += (mouseX * 0.4 - group.rotation.y) * 0.03;
        group.rotation.x += (mouseY * 0.2 - group.rotation.x) * 0.03;
        camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
    }
    animate();
}
