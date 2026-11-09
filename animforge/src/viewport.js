import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { makeMesh, buildGeometry, applyMaterial, PRIMITIVES } from './primitives.js';
import * as project from './project.js';
import { emit } from './bus.js';

/* ════════════════════════════════════════════════════════════
   Three.js viewport: renderer, lighting, gizmo, picking
   ════════════════════════════════════════════════════════════ */

const D2R = Math.PI / 180;

let renderer, scene, camera, orbit, gizmo, raycaster, stageEl;
const meshes = new Map(); // objectId -> Mesh
let selBox = null;
let grid = null;
let ground = null;
let shadowPlane = null;
let draggingId = null;
let camAnim = null;
let lastFrameBox = null;
let gizmoProxy = null;
let multiDrag = null;
let pointerDown = null;
let hoverId = null;

export function init(container) {
  stageEl = container;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.domElement.style.touchAction = 'none';
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(46, 1, 0.05, 400);
  camera.position.set(3.1, 2.15, 4.5);

  orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.075;
  orbit.target.set(0, 0.95, 0);
  orbit.minDistance = 0.6;
  orbit.maxDistance = 40;
  orbit.maxPolarAngle = Math.PI * 0.495;
  orbit.update();

  /* ── environment & lights ── */
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.045);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 0.38;
  pmrem.dispose();

  const hemi = new THREE.HemisphereLight(0xbcd8ff, 0x171d29, 0.4);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xfff4e6, 2.1);
  key.position.set(4.2, 7.5, 4.5);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 30;
  key.shadow.camera.left = -7;
  key.shadow.camera.right = 7;
  key.shadow.camera.top = 7;
  key.shadow.camera.bottom = -7;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.022;
  key.shadow.radius = 3;
  scene.add(key);

  const fill = new THREE.DirectionalLight(0x84b2ff, 0.55);
  fill.position.set(-5.5, 3.2, -2.5);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0xa78bfa, 0.6);
  rim.position.set(-1.5, 2.5, -6);
  scene.add(rim);

  /* ── ground: radial gradient disc + fading grid + shadow catcher ── */
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(256, 256, 8, 256, 256, 256);
  grad.addColorStop(0, 'rgba(48,63,90,0.95)');
  grad.addColorStop(0.4, 'rgba(27,36,52,0.82)');
  grad.addColorStop(0.72, 'rgba(14,19,29,0.45)');
  grad.addColorStop(1, 'rgba(9,12,19,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;

  ground = new THREE.Mesh(
    new THREE.CircleGeometry(15, 64),
    new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.95, metalness: 0, depthWrite: false })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.004;
  scene.add(ground);

  // grid drawn into a canvas so it fades out towards the horizon
  grid = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshBasicMaterial({ map: makeGridTexture(renderer), transparent: true, depthWrite: false, opacity: 0.95 })
  );
  grid.rotation.x = -Math.PI / 2;
  grid.position.y = 0.002;
  scene.add(grid);

  // shadow catcher (alpha-only, so the gradient ground keeps its soft edge)
  const shadowCatcher = new THREE.Mesh(
    new THREE.PlaneGeometry(26, 26),
    new THREE.ShadowMaterial({ color: 0x000308, opacity: 0.46 })
  );
  shadowCatcher.rotation.x = -Math.PI / 2;
  shadowCatcher.position.y = 0.004;
  shadowCatcher.receiveShadow = true;
  scene.add(shadowCatcher);
  shadowPlane = shadowCatcher;

  /* ── selection outline ── */
  selBox = new THREE.Box3Helper(new THREE.Box3(), 0x6ee7ff);
  selBox.material.transparent = true;
  selBox.material.opacity = 0.9;
  selBox.material.depthTest = false;
  selBox.renderOrder = 10;
  selBox.visible = false;
  scene.add(selBox);

  /* ── gizmo ── */
  gizmoProxy = new THREE.Object3D();
  gizmoProxy.name = '__gizmoProxy';
  scene.add(gizmoProxy);

  gizmo = new TransformControls(camera, renderer.domElement);
  gizmo.setSize(0.85);
  gizmo.setSpace('world');
  const gizmoObj = gizmo.getHelper ? gizmo.getHelper() : gizmo;
  scene.add(gizmoObj);

  gizmo.addEventListener('dragging-changed', (e) => {
    orbit.enabled = !e.value;
    if (!e.value) {
      const wasMulti = !!multiDrag;
      draggingId = null;
      multiDrag = null;
      project.commit('values');
      emit('gizmo:end');
      if (wasMulti) emit('toast', { msg: 'Model transform applied', kind: 'ok' });
    }
  });
  gizmo.addEventListener('mouseDown', () => {
    project.pushHistory();
    if (!beginMultiDrag()) draggingId = project.primary()?.id || null;
  });
  gizmo.addEventListener('objectChange', () => {
    if (multiDrag) { applyMultiDrag(); return; }
    if (!draggingId) return;
    const mesh = meshes.get(draggingId);
    const obj = project.getObject(draggingId);
    if (!mesh || !obj) return;
    const patch = {};
    if (gizmo.getMode() === 'rotate') {
      patch.rot = [
        +(mesh.rotation.x / D2R).toFixed(2),
        +(mesh.rotation.y / D2R).toFixed(2),
        +(mesh.rotation.z / D2R).toFixed(2),
      ];
    } else if (gizmo.getMode() === 'scale') {
      patch.scale = [round3(mesh.scale.x), round3(mesh.scale.y), round3(mesh.scale.z)];
    } else {
      patch.pos = [round3(mesh.position.x), round3(mesh.position.y), round3(mesh.position.z)];
    }
    project.writeTransform(draggingId, patch);
  });

  /* ── picking ── */
  raycaster = new THREE.Raycaster();
  renderer.domElement.addEventListener('pointerdown', (e) => {
    pointerDown = { x: e.clientX, y: e.clientY, button: e.button };
  });
  renderer.domElement.addEventListener('pointerup', (e) => {
    if (!pointerDown || e.button !== 0) { pointerDown = null; return; }
    const moved = Math.hypot(e.clientX - pointerDown.x, e.clientY - pointerDown.y);
    pointerDown = null;
    if (moved > 5 || gizmo.dragging || gizmo.axis) return;
    const id = pick(e);
    project.select(id ? [id] : [], e.shiftKey);
  });

  /* ── resize ── */
  const ro = new ResizeObserver(() => resize());
  ro.observe(container);
  resize();

  sync();
  return { renderer, scene, camera };
}

const round3 = (v) => Math.round(v * 1000) / 1000;

function resize() {
  if (!renderer || !stageEl) return;
  const w = stageEl.clientWidth || 1;
  const h = stageEl.clientHeight || 1;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function pick(ev) {
  const rect = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(
    ((ev.clientX - rect.left) / rect.width) * 2 - 1,
    -((ev.clientY - rect.top) / rect.height) * 2 + 1
  );
  raycaster.setFromCamera(ndc, camera);
  const list = [...meshes.values()].filter((m) => m.visible);
  const hits = raycaster.intersectObjects(list, false);
  return hits.length ? hits[0].object.userData.id : null;
}

/* ───────────────── sync document → scene ───────────────── */

export function sync() {
  const proj = project.state.project;
  if (!proj) return;
  const alive = new Set();

  for (const obj of proj.objects) {
    alive.add(obj.id);
    let mesh = meshes.get(obj.id);
    const sig = JSON.stringify(obj.params);
    if (!mesh || mesh.userData.type !== obj.type) {
      if (mesh) disposeMesh(mesh);
      mesh = makeMesh(obj);
      mesh.userData.type = obj.type;
      mesh.userData.paramSig = sig;
      meshes.set(obj.id, mesh);
      scene.add(mesh);
    } else if (mesh.userData.paramSig !== sig) {
      const old = mesh.geometry;
      mesh.geometry = buildGeometry(obj.type, obj.params);
      old.dispose();
      mesh.userData.paramSig = sig;
    }
    mesh.name = obj.name;
    mesh.visible = obj.visible;
    mesh.userData.id = obj.id;
    applyMaterial(mesh, obj.material);
    if (draggingId !== obj.id) applyTransform(mesh, project.evalObject(obj, project.state.time));
  }

  for (const [id, mesh] of [...meshes]) {
    if (!alive.has(id)) { disposeMesh(mesh); scene.remove(mesh); meshes.delete(id); }
  }

  attachGizmo();
  updateSelectionBox();
}

function disposeMesh(mesh) {
  mesh.geometry?.dispose();
  if (Array.isArray(mesh.material)) mesh.material.forEach((m) => m.dispose());
  else mesh.material?.dispose();
}

function applyTransform(mesh, tr) {
  mesh.position.fromArray(tr.pos);
  mesh.rotation.set(tr.rot[0] * D2R, tr.rot[1] * D2R, tr.rot[2] * D2R);
  mesh.scale.fromArray(tr.scale);
}

function attachGizmo() {
  const sel = project.state.selectedIds;
  gizmo.setMode(project.state.tool === 'rotate' ? 'rotate' : project.state.tool === 'scale' ? 'scale' : 'translate');

  /* several objects → drive them all through a proxy at their centroid */
  if (sel.length > 1) {
    const box = new THREE.Box3();
    let n = 0;
    for (const id of sel) {
      const m = meshes.get(id);
      const o = project.getObject(id);
      if (m && o?.visible) { box.expandByObject(m); n++; }
    }
    if (n > 1) {
      /* pivot on the ground under the model, so turning / stretching keeps feet planted */
      const centre = box.getCenter(new THREE.Vector3());
      centre.y = box.min.y;
      gizmoProxy.position.copy(centre);
      gizmoProxy.rotation.set(0, 0, 0);
      gizmoProxy.scale.set(1, 1, 1);
      gizmoProxy.updateMatrixWorld();
      if (gizmo.object !== gizmoProxy) gizmo.attach(gizmoProxy);
      return;
    }
  }

  const obj = sel.length === 1 ? project.getObject(sel[0]) : null;
  const mesh = obj && obj.visible ? meshes.get(obj.id) : null;
  if (mesh) {
    if (gizmo.object !== mesh) gizmo.attach(mesh);
  } else {
    gizmo.detach();
  }
}

function beginMultiDrag() {
  multiDrag = null;
  const ids = project.state.selectedIds;
  if (ids.length < 2) return false;
  const items = [];
  for (const id of ids) {
    const m = meshes.get(id);
    const obj = project.getObject(id);
    if (!m || !obj || !obj.visible) continue;
    items.push({ id, pos: m.position.clone(), rot: [m.rotation.x, m.rotation.y, m.rotation.z], scale: m.scale.clone() });
  }
  if (items.length < 2) return false;
  /* pivot matches the gizmo: the ground point under the model */
  multiDrag = { c: gizmoProxy.position.clone(), items, startPos: gizmoProxy.position.clone() };
  return true;
}

/** move / rotate / scale every part of the selected model around its centroid */
function applyMultiDrag() {
  const g = gizmoProxy;
  const delta = g.position.clone().sub(multiDrag.startPos);
  const rot = new THREE.Quaternion().setFromEuler(g.rotation);
  const scl = g.scale.clone();

  for (const it of multiDrag.items) {
    const rel = it.pos.clone().sub(multiDrag.c).multiply(scl).applyQuaternion(rot);
    const pos = multiDrag.c.clone().add(rel).add(delta);
    const q = rot.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(it.rot[0], it.rot[1], it.rot[2])));
    const e = new THREE.Euler().setFromQuaternion(q);
    const scale = it.scale.clone().multiply(scl);

    const mesh = meshes.get(it.id);
    if (mesh) {
      mesh.position.copy(pos);
      mesh.quaternion.copy(q);
      mesh.scale.copy(scale);
    }
    project.writeTransform(it.id, {
      pos: [round3(pos.x), round3(pos.y), round3(pos.z)],
      rot: [deg(e.x), deg(e.y), deg(e.z)],
      scale: [round3(scale.x), round3(scale.y), round3(scale.z)],
    }, { silent: true });
  }
}

const deg = (rad) => +((rad * 180) / Math.PI).toFixed(2);

function updateSelectionBox() {
  const box = new THREE.Box3();
  const sel = project.state.selectedIds;
  let any = false;
  for (const id of sel) {
    const m = meshes.get(id);
    if (!m || !m.visible) continue;
    const b = new THREE.Box3().setFromObject(m);
    if (b.isEmpty()) continue;
    any ? box.union(b) : box.copy(b);
    any = true;
  }
  if (any) {
    selBox.box.copy(box).expandByScalar(0.015);
    selBox.visible = true;
  } else {
    selBox.visible = false;
  }
}

/* ───────────────── per-frame update ───────────────── */

let lastT = -1;
export function update(dt) {
  const p = project.state.project;
  if (!p) return;

  // apply evaluated pose only when the timeline moved or a rebuild happened
  const t = project.state.time;
  if (Math.abs(t - lastT) > 1e-6) {
    for (const obj of p.objects) {
      if (draggingId === obj.id) continue;
      const mesh = meshes.get(obj.id);
      if (mesh) applyTransform(mesh, project.evalObject(obj, t));
    }
    lastT = t;
  }

  updateSelectionBox();
  animateCamera(dt);
  orbit.update();
  renderer.render(scene, camera);
}

function animateCamera(dt) {
  if (!camAnim) return;
  const k = 1 - Math.pow(0.0008, dt);
  camera.position.lerp(camAnim.pos, k);
  orbit.target.lerp(camAnim.target, k);
  if (camera.position.distanceTo(camAnim.pos) < 0.006 && orbit.target.distanceTo(camAnim.target) < 0.006) {
    camera.position.copy(camAnim.pos);
    orbit.target.copy(camAnim.target);
    camAnim = null;
  }
  orbit.update();
}

/* ───────────────── public controls ───────────────── */

export function setTool(tool) {
  project.state.tool = tool;
  gizmo.setMode(tool === 'rotate' ? 'rotate' : tool === 'scale' ? 'scale' : 'translate');
}

export function setSnap(on) {
  project.state.snap = on;
  gizmo.translationSnap = on ? 0.25 : null;
  gizmo.rotationSnap = on ? Math.PI / 12 : null;
  gizmo.scaleSnap = on ? 0.1 : null;
}

export function setGridVisible(on) {
  grid.visible = on;
  ground.visible = on;
  shadowPlane.visible = on;
}

export function setSpace(s) { gizmo.setSpace(s); }

export function setView(name) {
  const target = new THREE.Vector3();
  const box = new THREE.Box3();
  let any = false;
  for (const id of project.state.selectedIds) {
    const m = meshes.get(id);
    if (m) { box.expandByObject(m); any = true; }
  }
  if (!any) box.setFromCenterAndSize(new THREE.Vector3(0, 0.9, 0), new THREE.Vector3(2.4, 2.4, 2.4));
  box.getCenter(target);
  const r = Math.max(box.getSize(new THREE.Vector3()).length() * 0.5, 1.1);
  const d = r * 3.0;
  const dirs = {
    persp: new THREE.Vector3(0.62, 0.5, 0.9),
    front: new THREE.Vector3(0, 0, 1),
    side: new THREE.Vector3(1, 0, 0),
    top: new THREE.Vector3(0, 1, 0.0001),
  };
  const dir = (dirs[name] || dirs.persp).clone().normalize();
  camAnim = { pos: target.clone().add(dir.multiplyScalar(d)), target };
  orbit.target.copy(target);
}

export function focusSelection() { setView('persp'); }

/** frame every visible object in the scene */
export function frameAll(pad = 1.15) {
  const box = new THREE.Box3();
  for (const m of meshes.values()) { if (m.visible) box.expandByObject(m); }
  frameBox(box, pad);
}

/** frame just the given object ids */
export function frameObjects(ids = [], pad = 1.3) {
  const box = new THREE.Box3();
  for (const id of ids) {
    const m = meshes.get(id);
    if (m && m.visible) box.expandByObject(m);
  }
  if (box.isEmpty()) return false;
  lastFrameBox = { min: box.min.toArray().map((n) => +n.toFixed(2)), max: box.max.toArray().map((n) => +n.toFixed(2)) };
  frameBox(box, pad);
  return true;
}

function frameBox(box, pad = 1.15) {
  if (box.isEmpty()) box.setFromCenterAndSize(new THREE.Vector3(0, 0.9, 0), new THREE.Vector3(2.4, 2.2, 2.4));
  const target = box.getCenter(new THREE.Vector3());
  const radius = Math.max(box.getSize(new THREE.Vector3()).length() * 0.5, 0.8);
  const fov = (camera.fov * Math.PI) / 180;
  const dist = (radius / Math.sin(fov / 2)) * pad;
  // keep the direction the user is currently looking from
  let dir = camera.position.clone().sub(orbit.target);
  if (dir.lengthSq() < 1e-6) dir.set(0.5, 0.36, 1.0);
  dir.normalize();
  camAnim = null;
  camera.position.copy(target).add(dir.multiplyScalar(dist));
  orbit.target.copy(target);
  orbit.update();
}

/** pull the camera back if an object sits outside the safe area of the frame */
export function ensureVisible(id, margin = 0.78) {
  const mesh = meshes.get(id);
  if (!mesh) return false;
  const center = new THREE.Vector3();
  mesh.getWorldPosition(center);
  const r = mesh.geometry?.boundingSphere?.radius || 0.5;
  const ndcCenter = center.clone().project(camera);
  const edge = center.clone().add(camera.position.clone().sub(center).normalize().multiplyScalar(0)).project(camera);
  // project a point offset by the object's radius to estimate its screen size
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).multiplyScalar(r);
  const ndcEdge = center.clone().add(right).project(camera);
  const halfW = Math.abs(ndcEdge.x - edge.x);
  const outside = Math.abs(ndcCenter.x) + halfW > margin * 1.35 || Math.abs(ndcCenter.y) + halfW > margin || ndcCenter.z > 1;
  if (outside) { frameAll(1.22); return true; }
  return false;
}

export function screenshot() {
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
}

/** Build a clean export group (models only, no helpers/gizmo) */
export function buildExportGroup() {
  const group = new THREE.Group();
  group.name = project.state.project?.name || 'Scene';
  const used = new Set();
  for (const obj of project.state.project.objects) {
    if (!obj.visible) continue;
    const mesh = makeMesh(obj);
    // guarantee unique node names for animation binding
    let n = obj.name.replace(/[^\w\- ]+/g, '').trim() || 'Object';
    let i = 2;
    while (used.has(n)) n = `${obj.name} ${i++}`;
    used.add(n);
    mesh.name = n;
    mesh.userData.exportId = obj.id;
    const tr = obj.pos; // rest pose; animation overrides
    mesh.position.fromArray(tr);
    mesh.rotation.set(obj.rot[0] * D2R, obj.rot[1] * D2R, obj.rot[2] * D2R);
    mesh.scale.fromArray(obj.scale);
    group.add(mesh);
  }
  return group;
}

/** ground-plane point in front of the camera, plus the camera's right vector (xz) */
export function getSpawnPoint() {
  const target = orbit.target.clone();
  const toCam = camera.position.clone().sub(target).setY(0);
  if (toCam.lengthSq() < 1e-6) toCam.set(0, 0, 1);
  toCam.normalize();
  const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), toCam).normalize();
  const p = target.clone()
    .addScaledVector(right, 1.05)
    .addScaledVector(toCam, 0.45);
  p.y = 0;
  return { point: [p.x, p.z], right: [right.x, right.z] };
}

export function isReady() { return !!renderer; }

/** automated-QA helper: run a whole-model transform as if the gizmo had been dragged */
export function debugGroupTransform({ dx = 0, dy = 0, dz = 0, sx = 1, sy = 1, sz = 1 } = {}) {
  if (!beginMultiDrag()) return null;
  gizmoProxy.position.set(multiDrag.startPos.x + dx, multiDrag.startPos.y + dy, multiDrag.startPos.z + dz);
  gizmoProxy.scale.set(sx, sy, sz);
  applyMultiDrag();
  const out = multiDrag.items.map((it) => it.id);
  multiDrag = null;
  project.commit('values');
  return out.length;
}

/* debug helpers (used by automated QA) */
export const debugState = () => ({
  cam: camera ? camera.position.toArray().map((n) => +n.toFixed(2)) : null,
  target: orbit ? orbit.target.toArray().map((n) => +n.toFixed(2)) : null,
  meshes: meshes.size,
  lastFrameBox,
  screenPoint: (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(camera); const r = renderer.domElement.getBoundingClientRect(); return [r.left + (v.x * 0.5 + 0.5) * r.width, r.top + (-v.y * 0.5 + 0.5) * r.height]; },
  gizmoPivot: () => (gizmo.object === gizmoProxy ? gizmoProxy.position.toArray().map((n) => +n.toFixed(2)) : null),
  groupBox: (id) => {
    const ids = project.groupMembers(id);
    const box = new THREE.Box3();
    for (const gid of ids) { const m = meshes.get(gid); if (m) box.expandByObject(m); }
    if (box.isEmpty()) return null;
    return { min: box.min.toArray().map((n) => +n.toFixed(2)), max: box.max.toArray().map((n) => +n.toFixed(2)) };
  },
  meshPos: () => [...meshes.entries()].map(([id, m]) => [id, m.name, m.position.toArray().map((n) => +n.toFixed(2))]),
});

/** canvas-based grid with radial fade — avoids a hard horizon edge */
function makeGridTexture(rend) {
  const size = 1024;
  const cells = 40;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const step = size / cells;
  for (let i = 0; i <= cells; i++) {
    const p = Math.round(i * step) + 0.5;
    const major = i % 10 === 0;
    ctx.strokeStyle = major ? 'rgba(128,156,200,0.62)' : 'rgba(96,120,162,0.28)';
    ctx.lineWidth = major ? 1.6 : 1;
    ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke();
  }
  const g = ctx.createRadialGradient(size / 2, size / 2, size * 0.05, size / 2, size / 2, size * 0.5);
  g.addColorStop(0, 'rgba(0,0,0,1)');
  g.addColorStop(0.5, 'rgba(0,0,0,0.8)');
  g.addColorStop(0.82, 'rgba(0,0,0,0.28)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  try { t.anisotropy = rend.capabilities.getMaxAnisotropy(); } catch { /* noop */ }
  return t;
}
