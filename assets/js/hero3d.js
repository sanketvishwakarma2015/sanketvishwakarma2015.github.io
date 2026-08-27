// Data-pipeline network graph: nodes (data sources/processors/sinks) connected by
// animated edges, with particles flowing along each edge to represent data moving.
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const stage = document.getElementById('heroStage');
if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { /* noop */ }
else {
  const canvas = document.createElement('canvas');
  canvas.className = 'hero3d-canvas';
  stage.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  camera.position.set(0, 0, 11);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const C = { cyan: 0x00d9ff, purple: 0x7c3aed, pink: 0xec4899, green: 0x10b981 };
  const palette = Object.values(C);

  // -- NODES --------------------------------------------------------------
  const NODE_POS = [
    [-3.5, 2.5, 0], [0, 3.2, 0.5], [3.5, 2.5, 0],       // top row
    [-4.5, 0, -0.5], [-1.5, 0.2, 0.8], [1.5, 0.2, 0.8], [4.5, 0, -0.5], // middle
    [-3.5,-2.5, 0], [0,-3.2, 0.5], [3.5,-2.5, 0],         // bottom row
    [0, 0, 2.5],                                            // center hub
  ];
  const NODE_SIZES = [0.14,0.14,0.14, 0.12,0.22,0.22,0.12, 0.14,0.14,0.14, 0.32];
  const NODE_COLORS = [0,1,0, 1,2,3,1, 0,2,0, 0]; // index into palette

  const nodes = NODE_POS.map((pos, i) => {
    const geo = new THREE.SphereGeometry(NODE_SIZES[i], 20, 20);
    const col = palette[NODE_COLORS[i]];
    const mat = new THREE.MeshBasicMaterial({ color: col });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...pos);

    // Glow halo ring
    const rGeo = new THREE.RingGeometry(NODE_SIZES[i] * 2, NODE_SIZES[i] * 3.2, 32);
    const rMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.12, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(rGeo, rMat);
    mesh.userData.ring = ring;
    mesh.add(ring);

    scene.add(mesh);
    return { mesh, col };
  });

  // -- EDGES ---------------------------------------------------------------
  const EDGES = [
    [0,1],[1,2],[0,3],[3,4],[1,4],[1,5],[2,6],[4,5],[5,6],
    [3,7],[4,7],[4,8],[5,8],[5,9],[6,9],[7,8],[8,9],[0,10],[2,10],[7,10],[9,10],[4,10],[5,10],
  ];

  const edgePairs = EDGES.map(([a, b]) => {
    const pa = new THREE.Vector3(...NODE_POS[a]);
    const pb = new THREE.Vector3(...NODE_POS[b]);
    const geo = new THREE.BufferGeometry().setFromPoints([pa, pb]);
    const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06 });
    scene.add(new THREE.Line(geo, mat));
    return { pa, pb };
  });

  // -- FLOW PARTICLES ------------------------------------------------------
  const PCount = 60;
  const pData = Array.from({ length: PCount }, (_, i) => ({
    edge: i % EDGES.length,
    t: Math.random(),
    speed: 0.005 + Math.random() * 0.007,
    col: palette[Math.floor(Math.random() * palette.length)]
  }));

  const pPos = new Float32Array(PCount * 3);
  const pCol = new Float32Array(PCount * 3);
  pData.forEach(({ col }, i) => {
    const c = new THREE.Color(col);
    pCol[i*3] = c.r; pCol[i*3+1] = c.g; pCol[i*3+2] = c.b;
  });
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color',    new THREE.BufferAttribute(pCol, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.09, vertexColors: true, transparent: true, opacity: 0.9 });
  scene.add(new THREE.Points(pGeo, pMat));

  // -- MOUSE ----------------------------------------------------------------
  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = e.clientX / innerWidth  - 0.5;
    my = e.clientY / innerHeight - 0.5;
  }, { passive: true });

  // -- RESIZE ---------------------------------------------------------------
  const grp = new THREE.Group();
  grp.add(...scene.children);
  scene.add(grp);

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight || w;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // -- ANIMATE --------------------------------------------------------------
  let tick = 0;
  function loop() {
    requestAnimationFrame(loop);
    tick += 0.006;

    grp.rotation.y += (mx * 0.5 - grp.rotation.y) * 0.04;
    grp.rotation.x += (-my * 0.3 - grp.rotation.x) * 0.04;
    grp.rotation.y += 0.0025;

    // Pulse nodes + keep halos facing camera
    nodes.forEach(({ mesh }, i) => {
      mesh.scale.setScalar(1 + 0.07 * Math.sin(tick * 2.5 + i * 0.9));
      if (mesh.userData.ring) {
        const wp = new THREE.Vector3();
        mesh.getWorldPosition(wp);
        mesh.userData.ring.lookAt(camera.position);
      }
    });

    // Flow particles
    const posAttr = pGeo.attributes.position;
    pData.forEach((d, i) => {
      d.t = (d.t + d.speed) % 1;
      const { pa, pb } = edgePairs[d.edge];
      posAttr.setXYZ(i,
        pa.x + (pb.x - pa.x) * d.t,
        pa.y + (pb.y - pa.y) * d.t,
        pa.z + (pb.z - pa.z) * d.t
      );
    });
    posAttr.needsUpdate = true;

    renderer.render(scene, camera);
  }
  loop();
}
