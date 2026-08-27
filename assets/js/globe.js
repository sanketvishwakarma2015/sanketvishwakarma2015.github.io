// Rotating wireframe Earth in the CTA band — glowing location dots mark key
// cities (Mumbai, Noida, London, SF, Singapore) and pulse with connection arcs.
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const stage = document.getElementById('globeStage');
if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { /* noop */ }
else {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:block;';
  stage.appendChild(canvas);

  const scene = new THREE.Scene();
  const W = stage.clientWidth || 400, H = stage.clientHeight || 400;
  const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
  camera.position.set(0, 0, 3.8);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(W, H, false);

  // -- GLOBE WIREFRAME ------------------------------------------------------
  const sphereGeo = new THREE.SphereGeometry(1.4, 40, 28);
  const wireMat  = new THREE.LineBasicMaterial({ color: 0x00d9ff, transparent: true, opacity: 0.10 });
  const globe    = new THREE.LineSegments(new THREE.WireframeGeometry(sphereGeo), wireMat);
  scene.add(globe);

  // Soft outer glow ring (atmosphere halo)
  const haloGeo = new THREE.SphereGeometry(1.50, 32, 32);
  const haloMat = new THREE.MeshBasicMaterial({ color: 0x00d9ff, transparent: true, opacity: 0.03, side: THREE.FrontSide });
  scene.add(new THREE.Mesh(haloGeo, haloMat));

  // -- HELPER: lat/lon ? 3D vector -----------------------------------------
  function ll(lat, lon, r) {
    const phi   = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
       r * Math.cos(phi),
       r * Math.sin(phi) * Math.sin(theta)
    );
  }

  // -- LOCATION DOTS --------------------------------------------------------
  const LOCS = [
    { lat: 28.54, lon: 77.34, label: 'Greater Noida', col: 0x00d9ff },
    { lat: 19.07, lon: 72.87, label: 'Mumbai',        col: 0x00d9ff },
    { lat: 51.50, lon: -0.12, label: 'London',         col: 0x7c3aed },
    { lat: 37.77, lon: -122.4,label: 'San Francisco',  col: 0x10b981 },
    { lat:  1.35, lon: 103.8, label: 'Singapore',      col: 0xec4899 },
  ];

  const dotMeshes = [];
  LOCS.forEach(({ lat, lon, col }) => {
    const pos = ll(lat, lon, 1.42);

    // Dot
    const dotM = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 8, 8),
      new THREE.MeshBasicMaterial({ color: col })
    );
    dotM.position.copy(pos);
    scene.add(dotM);

    // Halo ring
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.048, 0.072, 20),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
    );
    ring.position.copy(pos);
    ring.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(ring);
    dotMeshes.push({ dot: dotM, ring, phase: Math.random() * Math.PI * 2 });
  });

  // -- ARC CURVES between cities ---------------------------------------------
  const ARCS = [
    [0, 2], [0, 3], [1, 4], [1, 2],
  ];
  ARCS.forEach(([a, b]) => {
    const pa = ll(LOCS[a].lat, LOCS[a].lon, 1.42);
    const pb = ll(LOCS[b].lat, LOCS[b].lon, 1.42);
    const mid = pa.clone().add(pb).normalize().multiplyScalar(1.85);
    const curve = new THREE.QuadraticBezierCurve3(pa, mid, pb);
    const pts   = curve.getPoints(40);
    const geo   = new THREE.BufferGeometry().setFromPoints(pts);
    const mat   = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06 });
    scene.add(new THREE.Line(geo, mat));
  });

  // -- MOUSE PARALLAX ---------------------------------------------------------
  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = e.clientX / innerWidth  - 0.5;
    my = e.clientY / innerHeight - 0.5;
  }, { passive: true });

  // -- RESIZE ------------------------------------------------------------------
  function resize() {
    const w = stage.clientWidth || 400, h = stage.clientHeight || 400;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);

  // -- ANIMATE -----------------------------------------------------------------
  let t = 0;
  function loop() {
    requestAnimationFrame(loop);
    t += 0.004;

    globe.rotation.y  = t * 0.6 + mx * 0.5;
    globe.rotation.x  = my * 0.25;

    // Pulse halos
    dotMeshes.forEach(({ ring, phase }, i) => {
      const s = 1 + 0.35 * Math.abs(Math.sin(t * 2 + phase));
      ring.scale.setScalar(s);
      ring.material.opacity = 0.45 - 0.3 * Math.abs(Math.sin(t * 2 + phase));
    });

    renderer.render(scene, camera);
  }
  loop();
}
