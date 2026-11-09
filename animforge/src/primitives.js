import * as THREE from 'three';

/* ────────────────────────────────────────────────────────────
   Primitive library: parameter definitions + geometry builders
   ──────────────────────────────────────────────────────────── */

const P = (label, def, min, max, step) => ({ label, def, min, max, step });

export const PRIMITIVES = {
  box: {
    label: 'Box',
    icon: `<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>`,
    params: { w: P('Width', 1, 0.05, 20, 0.05), h: P('Height', 1, 0.05, 20, 0.05), d: P('Depth', 1, 0.05, 20, 0.05) },
    build: (p) => new THREE.BoxGeometry(p.w, p.h, p.d, 1, 1, 1),
  },
  sphere: {
    label: 'Sphere',
    icon: `<circle cx="12" cy="12" r="8.5"/><ellipse cx="12" cy="12" rx="8.5" ry="3.4"/><path d="M12 3.5v17"/>`,
    params: { r: P('Radius', 0.6, 0.05, 10, 0.05), wseg: P('Segments', 40, 6, 96, 2), hseg: P('Rings', 26, 4, 64, 1) },
    build: (p) => new THREE.SphereGeometry(p.r, p.wseg, p.hseg),
  },
  cylinder: {
    label: 'Cylinder',
    icon: `<path d="M4 7.5c0-2 3.6-3.5 8-3.5s8 1.5 8 3.5-3.6 3.5-8 3.5-8-1.5-8-3.5z"/><path d="M4 7.5v9c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-9"/>`,
    params: { rt: P('Top radius', 0.5, 0.01, 10, 0.02), rb: P('Base radius', 0.5, 0.01, 10, 0.02), h: P('Height', 1.2, 0.05, 20, 0.05), seg: P('Segments', 40, 3, 96, 1) },
    build: (p) => new THREE.CylinderGeometry(p.rt, p.rb, p.h, p.seg, 1),
  },
  cone: {
    label: 'Cone',
    icon: `<path d="M12 3.5l7.5 15.5h-15z"/><ellipse cx="12" cy="19" rx="7.5" ry="2.2"/>`,
    params: { r: P('Radius', 0.6, 0.02, 10, 0.02), h: P('Height', 1.3, 0.05, 20, 0.05), seg: P('Segments', 40, 3, 96, 1) },
    build: (p) => new THREE.ConeGeometry(p.r, p.h, p.seg, 1),
  },
  torus: {
    label: 'Torus',
    icon: `<ellipse cx="12" cy="12" rx="9" ry="6.5"/><ellipse cx="12" cy="12" rx="4" ry="2.4"/>`,
    params: { r: P('Radius', 0.55, 0.05, 8, 0.05), tube: P('Thickness', 0.18, 0.01, 4, 0.01), rseg: P('Sides', 20, 3, 64, 1), tseg: P('Segments', 64, 3, 160, 2) },
    build: (p) => new THREE.TorusGeometry(p.r, p.tube, p.rseg, p.tseg),
  },
  capsule: {
    label: 'Capsule',
    icon: `<path d="M8.5 9a3.5 3.5 0 017 0v6a3.5 3.5 0 01-7 0z"/>`,
    params: { r: P('Radius', 0.4, 0.02, 6, 0.02), h: P('Height', 0.8, 0.05, 20, 0.05), seg: P('Segments', 32, 3, 64, 1) },
    build: (p) => new THREE.CapsuleGeometry(p.r, p.h, 8, p.seg),
  },
  knot: {
    label: 'Knot',
    icon: `<path d="M7 8.5c3-3 9-3 10 1s-4 6-9 5.5S3 12 7 8.5z"/><path d="M9.5 16.5c-2.5 1-4-3-1-5s8-2 9 1.5"/>`,
    params: { r: P('Radius', 0.5, 0.05, 6, 0.05), tube: P('Thickness', 0.16, 0.01, 3, 0.01), rseg: P('Sides', 14, 3, 64, 1), tseg: P('Segments', 96, 8, 256, 4) },
    build: (p) => new THREE.TorusKnotGeometry(p.r, p.tube, p.tseg, p.rseg),
  },
  icosa: {
    label: 'Crystal',
    icon: `<path d="M12 3l8 6-8 12-8-12z"/><path d="M4 9h16M12 3v18" opacity=".55"/>`,
    params: { r: P('Radius', 0.65, 0.05, 8, 0.05), detail: P('Detail', 0, 0, 3, 1) },
    build: (p) => new THREE.IcosahedronGeometry(p.r, Math.round(p.detail)),
  },
  plane: {
    label: 'Plane',
    icon: `<path d="M3.5 8.5l7-4 10 5.5-7 4z"/><path d="M3.5 8.5v6l10 6v-6" opacity=".5"/>`,
    params: { w: P('Width', 2, 0.05, 40, 0.05), h: P('Height', 2, 0.05, 40, 0.05) },
    build: (p) => new THREE.PlaneGeometry(p.w, p.h),
  },
};

export const PRIM_ORDER = ['box', 'sphere', 'cylinder', 'cone', 'torus', 'capsule', 'knot', 'icosa', 'plane'];

/** deformers shared by every primitive, so any shape can be bent to fit */
export const SHAPE_EXTRA = {
  taper: P('Taper', 0, -0.9, 1.5, 0.05),
  twist: P('Twist', 0, -180, 180, 5),
};

/** full parameter definition for a type (own params + shared deformers) */
export function paramDefs(type) {
  return { ...(PRIMITIVES[type]?.params || {}), ...SHAPE_EXTRA };
}

export function defaultParams(type) {
  const defs = paramDefs(type);
  const out = {};
  for (const k in defs) out[k] = defs[k].def;
  return out;
}

export function buildGeometry(type, params) {
  const def = PRIMITIVES[type] || PRIMITIVES.box;
  const p = { ...defaultParams(type), ...params };
  let g;
  try { g = def.build(p); }
  catch (e) { g = new THREE.BoxGeometry(1, 1, 1); }
  deform(g, Number(p.taper) || 0, Number(p.twist) || 0);
  g.computeBoundingSphere();
  return g;
}

/** taper (scale along Y) + twist (spiral about Y) — lets any primitive be reshaped */
function deform(g, taper, twist) {
  if (!taper && !twist) return;
  const attr = g.attributes.position;
  if (!attr) return;
  g.computeBoundingBox();
  const bb = g.boundingBox;
  const h = Math.max(1e-6, bb.max.y - bb.min.y);
  const a = (twist * Math.PI) / 180;
  for (let i = 0; i < attr.count; i++) {
    const y = attr.getY(i);
    const u = (y - bb.min.y) / h;              // 0 = bottom, 1 = top
    const s = Math.max(0.05, 1 + taper * u);   // radial scale
    let x = attr.getX(i) * s;
    let z = attr.getZ(i) * s;
    if (twist) {
      const ang = a * u, c = Math.cos(ang), si = Math.sin(ang);
      const nx = x * c - z * si;
      const nz = x * si + z * c;
      x = nx; z = nz;
    }
    attr.setXYZ(i, x, y, z);
  }
  attr.needsUpdate = true;
  g.computeVertexNormals();
}

const PALETTE = ['#7cc7ff', '#a78bfa', '#ff8fab', '#5ee6a8', '#ffc46b', '#6ee7ff', '#f0f4ff', '#ff9d6b'];

export function nextColor(i) { return PALETTE[i % PALETTE.length]; }

export function defaultMaterial(color = '#7cc7ff') {
  return {
    color, metalness: 0.25, roughness: 0.42,
    emissive: '#000000', emissiveIntensity: 1,
    opacity: 1, wireframe: false, flatShading: false,
  };
}

export function applyMaterial(mesh, m) {
  const mat = mesh.material;
  if (!mat || !mat.isMeshStandardMaterial) return;
  const flat = !!m.flatShading;
  if (mat.flatShading !== flat) { mat.flatShading = flat; mat.needsUpdate = true; }
  mat.color.set(m.color);
  mat.metalness = m.metalness;
  mat.roughness = m.roughness;
  mat.emissive.set(m.emissive || '#000000');
  mat.emissiveIntensity = m.emissiveIntensity ?? 1;
  mat.opacity = m.opacity ?? 1;
  mat.transparent = (m.opacity ?? 1) < 1;
  mat.wireframe = !!m.wireframe;
  mat.depthWrite = (m.opacity ?? 1) >= 1;
}

export function makeMesh(pobj) {
  const geo = buildGeometry(pobj.type, pobj.params);
  const mat = new THREE.MeshStandardMaterial({
    color: pobj.material?.color || '#7cc7ff',
    metalness: pobj.material?.metalness ?? 0.25,
    roughness: pobj.material?.roughness ?? 0.42,
    envMapIntensity: 1.0,
    side: pobj.type === 'plane' ? THREE.DoubleSide : THREE.FrontSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = pobj.name;
  mesh.userData.id = pobj.id;
  mesh.userData.paramSig = JSON.stringify(pobj.params);
  applyMaterial(mesh, pobj.material || defaultMaterial());
  return mesh;
}
