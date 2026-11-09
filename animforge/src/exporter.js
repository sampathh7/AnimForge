import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import * as project from './project.js';
import { buildExportGroup, screenshot } from './viewport.js';

/* ════════════════════════════════════════════════════════════
   Export: GLB (with baked animation), PNG snapshot, project JSON
   ════════════════════════════════════════════════════════════ */

const D2R = Math.PI / 180;

function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export const safeName = (s) => (String(s || 'scene').trim().replace(/[^\w\-. ]+/g, '').replace(/\s+/g, '-') || 'scene');

export function saveProjectJSON() {
  const p = project.state.project;
  download(new Blob([project.serialize()], { type: 'application/json' }), `${safeName(p.name)}.animforge.json`);
  project.saveLocal();
  return `${safeName(p.name)}.animforge.json`;
}

/** Bake every clip into THREE.AnimationClips (frame-sampled, so preview matches export) */
export function bakeClips(group) {
  const p = project.state.project;
  const fps = p.fps || 30;
  const byId = new Map();
  for (const child of group.children) byId.set(child.userData.exportId, child);

  const clips = [];
  for (const c of p.clips) {
    const tracks = [];
    const frames = Math.max(1, Math.round(c.duration * fps));
    for (const [objId, keys] of Object.entries(c.tracks || {})) {
      const node = byId.get(objId);
      if (!node || !keys.length) continue;
      const times = [], pos = [], quat = [], scl = [];
      let prevQ = null;
      for (let i = 0; i <= frames; i++) {
        const t = i / fps;
        const s = project.sampleTrack(keys, t);
        times.push(+t.toFixed(5));
        pos.push(s.pos[0], s.pos[1], s.pos[2]);
        const q = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(s.rot[0] * D2R, s.rot[1] * D2R, s.rot[2] * D2R, 'XYZ')
        );
        if (prevQ && prevQ.dot(q) < 0) q.set(-q.x, -q.y, -q.z, -q.w); // keep hemisphere continuity
        prevQ = q;
        quat.push(q.x, q.y, q.z, q.w);
        scl.push(s.scale[0], s.scale[1], s.scale[2]);
      }
      const n = node.name;
      tracks.push(new THREE.VectorKeyframeTrack(`${n}.position`, times, pos));
      tracks.push(new THREE.QuaternionKeyframeTrack(`${n}.quaternion`, times, quat));
      tracks.push(new THREE.VectorKeyframeTrack(`${n}.scale`, times, scl));
    }
    if (tracks.length) clips.push(new THREE.AnimationClip(c.name || 'Clip', c.duration, tracks));
  }
  return clips;
}

export function exportGLB() {
  return new Promise((resolve, reject) => {
    const p = project.state.project;
    if (!p.objects.length) { reject(new Error('Nothing to export — add an object first')); return; }
    const group = buildExportGroup();
    const clips = bakeClips(group);
    const exporter = new GLTFExporter();
    exporter.parse(
      group,
      (result) => {
        const filename = `${safeName(p.name)}.glb`;
        download(new Blob([result], { type: 'model/gltf-binary' }), filename);
        group.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
        resolve({ filename, clips: clips.length, objects: group.children.length });
      },
      (err) => reject(err),
      { binary: true, animations: clips, onlyVisible: true, truncateDrawRange: true }
    );
  });
}

export function exportPNG() {
  const data = screenshot();
  const a = document.createElement('a');
  a.href = data;
  a.download = `${safeName(project.state.project.name)}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  return a.download;
}
