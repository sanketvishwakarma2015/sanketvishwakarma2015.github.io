// Bold 3D showcase piece for the hero — a glowing torus knot orbited by
// wireframe satellites, built with Three.js, reacting to pointer movement.
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const stage = document.getElementById('heroStage');

if (stage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const canvas = document.createElement('canvas');
    canvas.className = 'hero3d-canvas';
    stage.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const colors = [0x6366f1, 0x8b5cf6, 0xec4899];

    // Centerpiece: a glowing wireframe torus knot.
    const knotGeometry = new THREE.TorusKnotGeometry(2, 0.55, 180, 24);
    const knotMaterial = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.85 });
    const knot = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(knot);

    // A soft glow behind the knot using a large transparent sprite.
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = glowCanvas.height = 256;
    const gctx = glowCanvas.getContext('2d');
    const gradient = gctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.55)');
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
    gctx.fillStyle = gradient;
    gctx.fillRect(0, 0, 256, 256);
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    const glowMaterial = new THREE.SpriteMaterial({ map: glowTexture, transparent: true, depthWrite: false });
    const glow = new THREE.Sprite(glowMaterial);
    glow.scale.set(9, 9, 1);
    scene.add(glow);

    // Orbiting satellite shapes.
    const satellites = [];
    for (let i = 0; i < 5; i++) {
        const geometry = new THREE.IcosahedronGeometry(0.35 + Math.random() * 0.25, 0);
        const material = new THREE.MeshBasicMaterial({
            color: colors[i % colors.length],
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        const mesh = new THREE.Mesh(geometry, material);
        const radius = 3.6 + Math.random() * 1.2;
        mesh.userData = {
            radius,
            angle: (i / 5) * Math.PI * 2,
            speed: 0.006 + Math.random() * 0.006,
            tilt: (Math.random() - 0.5) * 2
        };
        scene.add(mesh);
        satellites.push(mesh);
    }

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    function resize() {
        const size = stage.clientWidth;
        renderer.setSize(size, stage.clientHeight || size, false);
        camera.aspect = size / (stage.clientHeight || size);
        camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);
    resize();

    function animate() {
        requestAnimationFrame(animate);
        knot.rotation.x += 0.0035;
        knot.rotation.y += 0.005;
        knot.rotation.z += (mouseX * 0.6 - knot.rotation.z) * 0.02;

        satellites.forEach((mesh) => {
            mesh.userData.angle += mesh.userData.speed;
            const { radius, angle, tilt } = mesh.userData;
            mesh.position.set(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.6 + tilt,
                Math.sin(angle * 0.7) * radius * 0.5
            );
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
        });

        camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 1.4 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
    }
    animate();
}

