import { makeObject, pushHistory, commit, state, uid, clip } from './project.js';
import { emit } from './bus.js';

/* ════════════════════════════════════════════════════════════
   Instant model library — humans, animals and props built out
   of ordinary primitives, each shipped with an animation clip.
   ════════════════════════════════════════════════════════════ */

const TAU = Math.PI * 2;
const rad = (d) => (d * Math.PI) / 180;
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

const rX = (v, deg) => {
  const a = rad(deg), c = Math.cos(a), s = Math.sin(a);
  return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c];
};
const rY = (v, deg) => {
  const a = rad(deg), c = Math.cos(a), s = Math.sin(a);
  return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c];
};
const rZ = (v, deg) => {
  const a = rad(deg), c = Math.cos(a), s = Math.sin(a);
  return [v[0] * c - v[1] * s, v[0] * s + v[1] * c, v[2]];
};

/** put a limb capsule so its top end stays pinned to `anchor` while it swings */
const pivot = (anchor, half, deg, axis = 'X') => {
  const off = axis === 'X' ? rX([0, -half, 0], deg) : axis === 'Z' ? rZ([0, -half, 0], deg) : rY([0, -half, 0], deg);
  return add(anchor, off);
};

const part = (name, type, params, pos, rot, material, scale) => ({
  name, type,
  params: params || {},
  pos: pos || [0, 0, 0],
  rot: rot || [0, 0, 0],
  material: material || {},
  scale: scale || [1, 1, 1],
});

/* ───────────────────────── humans ───────────────────────── */

const HUMAN = (o = {}) => {
  const shirt = o.shirt || '#5b93e8';
  const pants = o.pants || '#2f3c55';
  const skin = o.skin || '#f2c9a2';
  const shoe = o.shoe || '#1d2430';
  const LEG = 0.35, ARM = 0.255;
  const hipL = [-0.118, 0.70, 0], hipR = [0.118, 0.70, 0];
  const shL = [-0.235, 1.40, 0], shR = [0.235, 1.40, 0];

  const parts = [
    part('Head', 'sphere', { r: 0.145, wseg: 32, hseg: 24 }, [0, 1.63, 0], null,
      { color: skin, roughness: 0.62, metalness: 0.04 }),
    part('Eye L', 'sphere', { r: 0.023, wseg: 14, hseg: 10 }, [-0.052, 1.655, 0.133], null,
      { color: '#121a24', roughness: 0.35, metalness: 0.1 }),
    part('Eye R', 'sphere', { r: 0.023, wseg: 14, hseg: 10 }, [0.052, 1.655, 0.133], null,
      { color: '#121a24', roughness: 0.35, metalness: 0.1 }),
    part('Neck', 'cylinder', { rt: 0.05, rb: 0.058, h: 0.1, seg: 16 }, [0, 1.5, 0], null,
      { color: skin, roughness: 0.6, metalness: 0.04 }),
    part('Torso', 'capsule', { r: 0.155, h: 0.3, seg: 32 }, [0, 1.16, 0], null,
      { color: shirt, roughness: 0.74, metalness: 0.06 }),
    part('Pelvis', 'box', { w: 0.31, h: 0.18, d: 0.2 }, [0, 0.79, 0], null,
      { color: pants, roughness: 0.8, metalness: 0.04 }),
    part('Arm L', 'capsule', { r: 0.055, h: 0.4, seg: 20 }, [shL[0], 1.4 - ARM, 0], null,
      { color: shirt, roughness: 0.74, metalness: 0.06 }),
    part('Arm R', 'capsule', { r: 0.055, h: 0.4, seg: 20 }, [shR[0], 1.4 - ARM, 0], null,
      { color: shirt, roughness: 0.74, metalness: 0.06 }),
    part('Hand L', 'sphere', { r: 0.062, wseg: 18, hseg: 14, taper: 0.25 }, [shL[0], 0.94, 0], null,
      { color: skin, roughness: 0.62, metalness: 0.04 }),
    part('Hand R', 'sphere', { r: 0.062, wseg: 18, hseg: 14, taper: 0.25 }, [shR[0], 0.94, 0], null,
      { color: skin, roughness: 0.62, metalness: 0.04 }),
    part('Leg L', 'capsule', { r: 0.072, h: 0.55, seg: 20 }, [hipL[0], 1.4 - ARM - 0.35, 0], null,
      { color: pants, roughness: 0.8, metalness: 0.04 }),
    part('Leg R', 'capsule', { r: 0.072, h: 0.55, seg: 20 }, [hipR[0], 0.35, 0], null,
      { color: pants, roughness: 0.8, metalness: 0.04 }),
    part('Foot L', 'box', { w: 0.135, h: 0.09, d: 0.26 }, [hipL[0], 0.045, 0.045], null,
      { color: shoe, roughness: 0.7, metalness: 0.08 }),
    part('Foot R', 'box', { w: 0.135, h: 0.09, d: 0.26 }, [hipR[0], 0.045, 0.045], null,
      { color: shoe, roughness: 0.7, metalness: 0.08 }),
  ];
  // Leg L rest must sit under its hip
  parts[10].pos = [hipL[0], 0.35, 0];

  return { parts, A: { hipL, hipR, shL, shR, LEG, ARM } };
};

/** shared limb helpers for the humanoid rig */
const humanLimbs = (A) => {
  const legL = (d) => ({ pos: pivot(A.hipL, A.LEG, d), rot: [d, 0, 0] });
  const legR = (d) => ({ pos: pivot(A.hipR, A.LEG, d), rot: [d, 0, 0] });
  const footL = (d) => ({ pos: add(pivot(A.hipL, 0.66, d), [0, 0, 0.045]), rot: [d, 0, 0] });
  const footR = (d) => ({ pos: add(pivot(A.hipR, 0.66, d), [0, 0, 0.045]), rot: [d, 0, 0] });
  const armL = (d, z = 0) => z
    ? { pos: pivot(A.shL, A.ARM, z, 'Z'), rot: [0, 0, z] }
    : { pos: pivot(A.shL, A.ARM, d), rot: [d, 0, 0] };
  const armR = (d, z = 0) => z
    ? { pos: pivot(A.shR, A.ARM, z, 'Z'), rot: [0, 0, z] }
    : { pos: pivot(A.shR, A.ARM, d), rot: [d, 0, 0] };
  const handL = (d, z = 0) => ({ pos: z ? pivot(A.shL, 0.51, z, 'Z') : pivot(A.shL, 0.51, d), rot: z ? [0, 0, z] : [d, 0, 0] });
  const handR = (d, z = 0) => ({ pos: z ? pivot(A.shR, 0.51, z, 'Z') : pivot(A.shR, 0.51, d), rot: z ? [0, 0, z] : [d, 0, 0] });
  return { legL, legR, footL, footR, armL, armR, handL, handR };
};

const bobbers = (names, dyFn) => Object.fromEntries(
  names.map((n) => [n, (t, b) => ({ pos: [b.pos[0], b.pos[1] + dyFn(t), b.pos[2]] })]),
);

const HUMAN_BODY = ['Head', 'Eye L', 'Eye R', 'Neck', 'Torso', 'Pelvis', 'Arm L', 'Arm R', 'Hand L', 'Hand R'];

/* ───────────────────────── animals ───────────────────────── */

function dogParts() {
  const legY = 0.32, legHalf = 0.152;
  const hip = (x, z) => [x, legY, z];
  const legs = [
    ['Leg FL', [-0.115, legY, 0.26]], ['Leg FR', [0.115, legY, 0.26]],
    ['Leg BL', [-0.115, legY, -0.26]], ['Leg BR', [0.115, legY, -0.26]],
  ];
  const fur = '#c98b52', dark = '#8f5c31';
  const parts = [
    part('Body', 'capsule', { r: 0.17, h: 0.44, seg: 28 }, [0, 0.46, 0], [90, 0, 0],
      { color: fur, roughness: 0.85, metalness: 0.02 }),
    part('Chest', 'sphere', { r: 0.175, wseg: 24, hseg: 18 }, [0, 0.46, 0.3], null,
      { color: dark, roughness: 0.85, metalness: 0.02 }),
    part('Head', 'sphere', { r: 0.15, wseg: 28, hseg: 20 }, [0, 0.6, 0.44], null,
      { color: fur, roughness: 0.85, metalness: 0.02 }),
    part('Snout', 'box', { w: 0.12, h: 0.1, d: 0.19 }, [0, 0.55, 0.56], null,
      { color: dark, roughness: 0.8, metalness: 0.02 }),
    part('Nose', 'sphere', { r: 0.035, wseg: 14, hseg: 10 }, [0, 0.575, 0.655], null,
      { color: '#20242c', roughness: 0.4, metalness: 0.1 }),
    part('Ear L', 'box', { w: 0.05, h: 0.12, d: 0.03 }, [-0.09, 0.72, 0.4], [0, 0, 14],
      { color: dark, roughness: 0.85 }),
    part('Ear R', 'box', { w: 0.05, h: 0.12, d: 0.03 }, [0.09, 0.72, 0.4], [0, 0, -14],
      { color: dark, roughness: 0.85 }),
    part('Eye L', 'sphere', { r: 0.024, wseg: 12, hseg: 8 }, [-0.07, 0.635, 0.55], null,
      { color: '#101418', roughness: 0.3 }),
    part('Eye R', 'sphere', { r: 0.024, wseg: 12, hseg: 8 }, [0.07, 0.635, 0.55], null,
      { color: '#101418', roughness: 0.3 }),
    part('Tail', 'capsule', { r: 0.035, h: 0.2, seg: 14 }, [0, 0.58, -0.46], [48, 0, 0],
      { color: fur, roughness: 0.85 }),
  ];
  for (const [name, pos] of legs) {
    parts.push(part(name, 'capsule', { r: 0.052, h: 0.2, seg: 16 }, [pos[0], legY - legHalf, pos[2]], null,
      { color: dark, roughness: 0.85, metalness: 0.02 }));
  }
  const legMap = Object.fromEntries(legs.map(([name, pos]) => [name, pos]));
  return { parts, A: { legMap, legHalf, legY, hip, tailBase: [0, 0.55, -0.36] } };
}

/* ════════════════════════════════════════════════════════════
   Preset catalogue
   ════════════════════════════════════════════════════════════ */

const walk = (dur, amp, armAmp, bobAmt, lean) => (A) => {
  const w = TAU / dur;
  const L = humanLimbs(A);
  const leg = (t) => amp * Math.sin(w * t);
  const bobY = (t) => bobAmt * Math.cos(2 * w * t);
  return {
    ...bobbers(HUMAN_BODY, bobY),
    'Leg L': (t) => L.legL(leg(t)),
    'Leg R': (t) => L.legR(-leg(t)),
    'Foot L': (t) => L.footL(leg(t)),
    'Foot R': (t) => L.footR(-leg(t)),
    'Arm L': (t) => L.armL(-armAmp * Math.sin(w * t)),
    'Arm R': (t) => L.armR(armAmp * Math.sin(w * t)),
    'Hand L': (t) => L.handL(-armAmp * Math.sin(w * t)),
    'Hand R': (t) => L.handR(armAmp * Math.sin(w * t)),
    Torso: (t, b) => ({
      pos: [b.pos[0], b.pos[1] + bobY(t), b.pos[2]],
      rot: [lean, 4 * Math.sin(w * t), 0],
    }),
    Head: (t, b) => ({
      pos: [b.pos[0], b.pos[1] + bobY(t), b.pos[2]],
      rot: [0, -5 * Math.sin(w * t), 0],
    }),
  };
};

const PRESETS = [
  /* ── humans ── */
  {
    id: 'human-walk', name: 'Human · Walk', cat: 'human', emoji: '🚶',
    clip: 'Walk', duration: 1.6, samples: 16,
    make: () => HUMAN({ shirt: '#5b93e8', pants: '#2f3c55' }),
    anim: walk(1.6, 26, 20, 0.024, 3),
  },
  {
    id: 'human-run', name: 'Human · Run', cat: 'human', emoji: '🏃',
    clip: 'Run', duration: 1.0, samples: 16,
    make: () => HUMAN({ shirt: '#ff7a59', pants: '#22304a' }),
    anim: walk(1.0, 42, 40, 0.055, 13),
  },
  {
    id: 'human-idle', name: 'Human · Idle', cat: 'human', emoji: '🧍',
    clip: 'Idle', duration: 4, samples: 12,
    make: () => HUMAN({ shirt: '#8f7bff', pants: '#2c3350' }),
    anim: (A) => {
      const w = TAU / 4;
      const L = humanLimbs(A);
      const by = (t) => 0.012 * Math.sin(w * t);
      const arm = (t) => 3 * Math.sin(w * t);
      return {
        ...bobbers(HUMAN_BODY, by),
        Torso: (t, b) => {
          const s = 1 + 0.018 * Math.sin(w * t);
          return { pos: [b.pos[0], b.pos[1] + by(t), b.pos[2]], rot: [1.2 * Math.sin(w * t), 0, 0], scale: [1, s, 1] };
        },
        Head: (t, b) => ({ pos: [b.pos[0], b.pos[1] + by(t), b.pos[2]], rot: [2 * Math.sin(w * t + 1), 6 * Math.sin(w * t * 0.5), 0] }),
        'Arm L': (t) => L.armL(arm(t)),
        'Arm R': (t) => L.armR(-arm(t)),
        'Hand L': (t) => L.handL(arm(t)),
        'Hand R': (t) => L.handR(-arm(t)),
      };
    },
  },
  {
    id: 'human-wave', name: 'Human · Wave', cat: 'human', emoji: '👋',
    clip: 'Wave', duration: 2.4, samples: 16,
    make: () => HUMAN({ shirt: '#3fd6a8', pants: '#26374a' }),
    anim: (A) => {
      const w = TAU / 2.4;
      const L = humanLimbs(A);
      const by = (t) => 0.01 * Math.sin(w * t);
      const armAngle = (t) => 138 + 16 * Math.sin(3 * w * t);
      return {
        ...bobbers(HUMAN_BODY, by),
        Head: (t, b) => ({ pos: [b.pos[0], b.pos[1] + by(t), b.pos[2]], rot: [0, -8, 6] }),
        'Arm R': (t) => L.armR(0, armAngle(t)),
        'Hand R': (t) => L.handR(0, armAngle(t)),
        'Arm L': (t) => L.armL(2 * Math.sin(w * t)),
        'Hand L': (t) => L.handL(2 * Math.sin(w * t)),
      };
    },
  },
  {
    id: 'human-jump', name: 'Human · Jump', cat: 'human', emoji: '🤸',
    clip: 'Jump', duration: 1.6, samples: 24,
    make: () => HUMAN({ shirt: '#ffcf5c', pants: '#33405c', skin: '#e8b183' }),
    anim: (A) => {
      const L = humanLimbs(A);
      const D = 1.6;
      const air = (t) => {
        const u = (t - 0.28) / (D - 0.56);
        return u <= 0 || u >= 1 ? 0 : Math.sin(Math.PI * u);
      };
      const crouch = (t) => (t < 0.28 ? Math.sin((Math.PI * t) / 0.28) * 0.12 : t > D - 0.32 ? Math.sin((Math.PI * (D - t)) / 0.32) * 0.12 : 0);
      const lift = (t) => air(t) * 0.62;   // feet stay on the floor: the dip is faked with squash
      const by = (t) => lift(t);
      const tuck = (t) => -34 * air(t);
      const out = { ...bobbers(HUMAN_BODY, by) };
      out['Leg L'] = (t) => ({ pos: add(pivot(A.hipL, A.LEG, tuck(t)), [0, lift(t), 0]), rot: [tuck(t), 0, 0] });
      out['Leg R'] = (t) => ({ pos: add(pivot(A.hipR, A.LEG, tuck(t)), [0, lift(t), 0]), rot: [tuck(t), 0, 0] });
      out['Foot L'] = (t) => ({ pos: add(add(pivot(A.hipL, 0.66, tuck(t)), [0, lift(t), 0.045]), [0, 0, 0]), rot: [tuck(t), 0, 0] });
      out['Foot R'] = (t) => ({ pos: add(add(pivot(A.hipR, 0.66, tuck(t)), [0, lift(t), 0.045]), [0, 0, 0]), rot: [tuck(t), 0, 0] });
      out['Arm L'] = (t) => { const d = -70 * air(t) + 12 * crouch(t); return { pos: add(pivot(A.shL, A.ARM, d), [0, lift(t), 0]), rot: [d, 0, 0] }; };
      out['Arm R'] = (t) => { const d = -70 * air(t) + 12 * crouch(t); return { pos: add(pivot(A.shR, A.ARM, d), [0, lift(t), 0]), rot: [d, 0, 0] }; };
      out['Hand L'] = (t) => { const d = -70 * air(t); return { pos: add(pivot(A.shL, 0.51, d), [0, lift(t), 0]), rot: [d, 0, 0] }; };
      out['Hand R'] = (t) => { const d = -70 * air(t); return { pos: add(pivot(A.shR, 0.51, d), [0, lift(t), 0]), rot: [d, 0, 0] }; };
      out.Torso = (t, b) => {
        const sq = 1 - 0.1 * crouch(t) / 0.12 + 0.05 * air(t);
        return { pos: [b.pos[0], b.pos[1] + lift(t), b.pos[2]], scale: [sq, 1 / sq, sq] };
      };
      return out;
    },
  },

  /* ── animals ── */
  {
    id: 'dog-walk', name: 'Dog · Walk', cat: 'animal', emoji: '🐕',
    clip: 'Walk', duration: 1.4, samples: 16,
    make: dogParts,
    anim: (A) => {
      const w = TAU / 1.4;
      const swing = (t, ph) => 24 * Math.sin(w * t + ph);
      const out = {};
      const pairs = [['Leg FL', 0], ['Leg BR', 0], ['Leg FR', Math.PI], ['Leg BL', Math.PI]];
      for (const [name, ph] of pairs) {
        const anchor = A.legMap[name];
        out[name] = (t) => {
          const d = swing(t, ph);
          return { pos: add(anchor, rX([0, -A.legHalf, 0], d)), rot: [d, 0, 0] };
        };
      }
      out.Body = (t, b) => ({ pos: [b.pos[0], b.pos[1] + 0.012 * Math.cos(2 * w * t), b.pos[2]], rot: [90, 3 * Math.sin(w * t), 0] });
      out.Chest = (t, b) => ({ pos: [b.pos[0], b.pos[1] + 0.012 * Math.cos(2 * w * t), b.pos[2]] });
      for (const n of ['Head', 'Snout', 'Nose', 'Ear L', 'Ear R', 'Eye L', 'Eye R']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + 0.016 * Math.cos(2 * w * t + 0.6), b.pos[2]], rot: n === 'Head' ? [0, 5 * Math.sin(w * t), 0] : [0, 0, 0] });
      }
      out.Tail = (t) => ({ pos: add(A.tailBase, rY([0, 0.14, -0.06], 26 * Math.sin(2 * w * t))), rot: [48, 26 * Math.sin(2 * w * t), 0] });
      return out;
    },
  },
  {
    id: 'cat-sit', name: 'Cat · Sit', cat: 'animal', emoji: '🐈',
    clip: 'Sit', duration: 3.2, samples: 12,
    make: () => {
      const grey = '#9aa3b2', dark = '#6b7482';
      const parts = [
        part('Body', 'capsule', { r: 0.16, h: 0.2, seg: 24 }, [0, 0.4, -0.08], [-38, 0, 0],
          { color: grey, roughness: 0.86, metalness: 0.02 }),
        part('Head', 'sphere', { r: 0.145, wseg: 26, hseg: 20 }, [0, 0.68, 0.17], null,
          { color: grey, roughness: 0.86 }),
        part('Muzzle', 'sphere', { r: 0.07, wseg: 18, hseg: 12 }, [0, 0.64, 0.29], null,
          { color: '#e6e9ef', roughness: 0.8 }),
        part('Ear L', 'cone', { r: 0.06, h: 0.13, seg: 16 }, [-0.078, 0.815, 0.16], [0, 0, 12],
          { color: dark, roughness: 0.86 }),
        part('Ear R', 'cone', { r: 0.06, h: 0.13, seg: 16 }, [0.078, 0.815, 0.16], [0, 0, -12],
          { color: dark, roughness: 0.86 }),
        part('Eye L', 'sphere', { r: 0.022, wseg: 12, hseg: 8 }, [-0.058, 0.705, 0.28], null, { color: '#20303c', roughness: 0.3 }),
        part('Eye R', 'sphere', { r: 0.022, wseg: 12, hseg: 8 }, [0.058, 0.705, 0.28], null, { color: '#20303c', roughness: 0.3 }),
        part('Paw L', 'capsule', { r: 0.042, h: 0.1, seg: 14 }, [-0.075, 0.115, 0.2], [8, 0, 0], { color: grey, roughness: 0.86 }),
        part('Paw R', 'capsule', { r: 0.042, h: 0.1, seg: 14 }, [0.075, 0.115, 0.2], [8, 0, 0], { color: grey, roughness: 0.86 }),
        part('Haunch L', 'sphere', { r: 0.135, wseg: 18, hseg: 14 }, [-0.115, 0.17, -0.1], null, { color: grey, roughness: 0.86 }),
        part('Haunch R', 'sphere', { r: 0.135, wseg: 18, hseg: 14 }, [0.115, 0.17, -0.1], null, { color: grey, roughness: 0.86 }),
        part('Tail 1', 'capsule', { r: 0.032, h: 0.28, seg: 14 }, [0, 0.2, -0.3], [66, 0, 0], { color: dark, roughness: 0.86 }),
        part('Tail 2', 'capsule', { r: 0.026, h: 0.22, seg: 12 }, [0, 0.08, -0.44], [100, 0, 0], { color: dark, roughness: 0.86 }),
      ];
      return { parts, A: { tailBase: [0, 0.28, -0.22] } };
    },
    anim: (A) => {
      const w = TAU / 3.2;
      const sway = (t) => 22 * Math.sin(w * t);
      const out = {};
      out.Head = (t, b) => ({ pos: [b.pos[0], b.pos[1] + 0.01 * Math.sin(w * t), b.pos[2]], rot: [2 * Math.sin(w * t + 0.8), 12 * Math.sin(w * t * 0.5), 0] });
      for (const n of ['Muzzle', 'Ear L', 'Ear R', 'Eye L', 'Eye R']) out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + 0.01 * Math.sin(w * t), b.pos[2]] });
      out.Body = (t, b) => {
        const s = 1 + 0.02 * Math.sin(w * t + 1);
        return { pos: [b.pos[0], b.pos[1] + 0.005 * Math.sin(w * t), b.pos[2]], rot: [-38, 0, 0], scale: [s, 1, s] };
      };
      out['Tail 1'] = (t) => ({ pos: add(A.tailBase, rY([0, -0.14, -0.1], sway(t))), rot: [66, sway(t), 0] });
      out['Tail 2'] = (t) => ({ pos: add(A.tailBase, rY([0, -0.24, -0.26], sway(t) * 1.4)), rot: [100, sway(t) * 1.4, 0] });
      return out;
    },
  },
  {
    id: 'bird-fly', name: 'Bird · Flap', cat: 'animal', emoji: '🐦',
    clip: 'Flap', duration: 0.9, samples: 16,
    make: () => {
      const body = '#4fc3f7', wing = '#2f9bd4';
      const parts = [
        part('Body', 'sphere', { r: 0.16, wseg: 24, hseg: 18 }, [0, 1.0, 0], null, { color: body, roughness: 0.7 }, [1, 0.88, 1.3]),
        part('Chest', 'sphere', { r: 0.11, wseg: 18, hseg: 12 }, [0, 0.99, 0.12], null, { color: '#dff1ff', roughness: 0.7 }, [1, 0.9, 1]),
        part('Head', 'sphere', { r: 0.105, wseg: 22, hseg: 16 }, [0, 1.12, 0.13], null, { color: body, roughness: 0.7 }),
        part('Beak', 'cone', { r: 0.045, h: 0.13, seg: 10 }, [0, 1.1, 0.25], [90, 0, 0], { color: '#ffb648', roughness: 0.55 }),
        part('Eye L', 'sphere', { r: 0.018, wseg: 10, hseg: 8 }, [-0.06, 1.15, 0.19], null, { color: '#101820', roughness: 0.3 }),
        part('Eye R', 'sphere', { r: 0.018, wseg: 10, hseg: 8 }, [0.06, 1.15, 0.19], null, { color: '#101820', roughness: 0.3 }),
        part('Wing L', 'box', { w: 0.46, h: 0.02, d: 0.24, taper: 0.35 }, [-0.33, 1.02, 0], [0, 0, 0], { color: wing, roughness: 0.72 }),
        part('Wing R', 'box', { w: 0.46, h: 0.02, d: 0.24, taper: 0.35 }, [0.33, 1.02, 0], [0, 0, 0], { color: wing, roughness: 0.72 }),
        part('Tail', 'box', { w: 0.14, h: 0.02, d: 0.22, taper: 0.4 }, [0, 1.0, -0.3], [0, 0, 0], { color: wing, roughness: 0.72 }),
      ];
      return { parts, A: { shL: [-0.1, 1.02, 0], shR: [0.1, 1.02, 0] } };
    },
    anim: (A) => {
      const w = TAU / 0.9;
      const flap = (t) => 62 * Math.sin(w * t);
      const y = (t) => 0.035 * Math.sin(w * t + Math.PI / 2);
      const out = {};
      const wing = (side, sign) => (t) => {
        const d = flap(t) * sign;
        return { pos: add(pivot(side, 0.23, d, 'Z'), [0, y(t), 0]), rot: [0, 0, d] };
      };
      out['Wing L'] = wing(A.shL, 1);
      out['Wing R'] = wing(A.shR, -1);
      for (const n of ['Body', 'Chest', 'Head', 'Beak', 'Eye L', 'Eye R', 'Tail']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + y(t), b.pos[2]] });
      }
      return out;
    },
    float: 1,
  },
  {
    id: 'fish-swim', name: 'Fish · Swim', cat: 'animal', emoji: '🐟',
    clip: 'Swim', duration: 2.0, samples: 16,
    make: () => {
      const body = '#ffa14a', fin = '#ff7a3d';
      const parts = [
        part('Body', 'sphere', { r: 0.2, wseg: 26, hseg: 18, taper: 0 }, [0, 1.0, 0], null, { color: body, roughness: 0.42, metalness: 0.18 }, [0.85, 0.95, 1.5]),
        part('Dorsal fin', 'box', { w: 0.02, h: 0.14, d: 0.34, taper: 0.6 }, [0, 1.16, -0.04], null, { color: fin, roughness: 0.5 }),
        part('Tail', 'cone', { r: 0.16, h: 0.26, seg: 4 }, [0, 1.0, -0.42], [-90, 45, 0], { color: fin, roughness: 0.5 }),
        part('Fin L', 'box', { w: 0.2, h: 0.02, d: 0.12 }, [-0.18, 0.94, 0.12], [0, 0, 22], { color: fin, roughness: 0.5 }),
        part('Fin R', 'box', { w: 0.2, h: 0.02, d: 0.12 }, [0.18, 0.94, 0.12], [0, 0, -22], { color: fin, roughness: 0.5 }),
        part('Eye L', 'sphere', { r: 0.028, wseg: 12, hseg: 8 }, [-0.12, 1.05, 0.24], null, { color: '#101820', roughness: 0.25 }),
        part('Eye R', 'sphere', { r: 0.028, wseg: 12, hseg: 8 }, [0.12, 1.05, 0.24], null, { color: '#101820', roughness: 0.25 }),
      ];
      return { parts, A: { tail: [0, 1.0, -0.3] } };
    },
    anim: (A) => {
      const w = TAU / 2;
      const wig = (t) => 9 * Math.sin(w * t);
      const out = {};
      for (const n of ['Body', 'Dorsal fin', 'Fin L', 'Fin R', 'Eye L', 'Eye R']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + 0.04 * Math.sin(w * t + 1), b.pos[2]], rot: b.rot, ease: 'smooth' });
      }
      out.Body = (t, b) => ({ pos: [b.pos[0], b.pos[1] + 0.04 * Math.sin(w * t + 1), b.pos[2]], rot: [0, wig(t), 0], ease: 'linear' });
      out.Tail = (t) => ({ pos: add(A.tail, rY([0, 0, -0.14], 24 * Math.sin(w * t))), rot: [-90, 45 + 22 * Math.sin(w * t), 0] });
      return out;
    },
    float: 1,
  },
  {
    id: 'rabbit-hop', name: 'Rabbit · Hop', cat: 'animal', emoji: '🐇',
    clip: 'Hop', duration: 1.2, samples: 18,
    make: () => {
      const fur = '#e6e2dc', dark = '#c9c2b8';
      const parts = [
        part('Body', 'sphere', { r: 0.17, wseg: 24, hseg: 18 }, [0, 0.3, -0.02], null, { color: fur, roughness: 0.9, metalness: 0.02 }, [1, 0.95, 1.25]),
        part('Head', 'sphere', { r: 0.13, wseg: 22, hseg: 16 }, [0, 0.5, 0.16], null, { color: fur, roughness: 0.9 }),
        part('Ear L', 'capsule', { r: 0.036, h: 0.2, seg: 14 }, [-0.055, 0.74, 0.12], [-12, 0, 8], { color: dark, roughness: 0.9 }),
        part('Ear R', 'capsule', { r: 0.036, h: 0.2, seg: 14 }, [0.055, 0.74, 0.12], [-12, 0, -8], { color: dark, roughness: 0.9 }),
        part('Eye L', 'sphere', { r: 0.022, wseg: 12, hseg: 8 }, [-0.06, 0.53, 0.26], null, { color: '#101820', roughness: 0.28 }),
        part('Eye R', 'sphere', { r: 0.022, wseg: 12, hseg: 8 }, [0.06, 0.53, 0.26], null, { color: '#101820', roughness: 0.28 }),
        part('Nose', 'sphere', { r: 0.022, wseg: 10, hseg: 8 }, [0, 0.48, 0.29], null, { color: '#ff9db5', roughness: 0.5 }),
        part('Foot L', 'box', { w: 0.09, h: 0.07, d: 0.24 }, [-0.085, 0.04, 0.06], null, { color: dark, roughness: 0.9 }),
        part('Foot R', 'box', { w: 0.09, h: 0.07, d: 0.24 }, [0.085, 0.04, 0.06], null, { color: dark, roughness: 0.9 }),
        part('Tail', 'sphere', { r: 0.065, wseg: 16, hseg: 12 }, [0, 0.34, -0.24], null, { color: '#ffffff', roughness: 0.95 }),
      ];
      return { parts, A: {} };
    },
    anim: () => {
      const D = 1.2;
      const u = (t) => t / D;
      const hop = (t) => Math.max(0, Math.sin(Math.PI * u(t))) * 0.34;
      const squash = (t) => 1 - 0.18 * Math.max(0, Math.cos(TAU * u(t))) * (hop(t) < 0.02 ? 1 : 0);
      const out = {};
      for (const n of ['Body', 'Head', 'Ear L', 'Ear R', 'Eye L', 'Eye R', 'Nose', 'Tail']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + hop(t), b.pos[2]], rot: b.rot });
      }
      out.Body = (t, b) => ({ pos: [b.pos[0], b.pos[1] + hop(t), b.pos[2]], scale: [1 + (1 - squash(t)) * 0.6, squash(t), 1 + (1 - squash(t)) * 0.6] });
      out['Foot L'] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + hop(t) * 0.85, b.pos[2] + hop(t) * 0.3], rot: [hop(t) * 60, 0, 0] });
      out['Foot R'] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + hop(t) * 0.85, b.pos[2] + hop(t) * 0.3], rot: [hop(t) * 60, 0, 0] });
      return out;
    },
  },

  /* ── objects & props ── */
  {
    id: 'tree', name: 'Tree', cat: 'thing', emoji: '🌳',
    clip: 'Sway', duration: 4, samples: 12,
    make: () => {
      const parts = [
        part('Trunk', 'cylinder', { rt: 0.11, rb: 0.22, h: 1.25, seg: 18, taper: 0 }, [0, 0.62, 0], null,
          { color: '#8a6242', roughness: 0.92, metalness: 0.02 }),
        part('Foliage low', 'icosa', { r: 0.58, detail: 1 }, [0, 1.35, 0], null,
          { color: '#3f9b5c', roughness: 0.85, metalness: 0.02, flatShading: true }),
        part('Foliage mid', 'icosa', { r: 0.44, detail: 1 }, [0.16, 1.78, -0.08], null,
          { color: '#4fb26a', roughness: 0.85, flatShading: true }),
        part('Foliage top', 'icosa', { r: 0.32, detail: 1 }, [-0.1, 2.06, 0.06], null,
          { color: '#63c47c', roughness: 0.85, flatShading: true }),
      ];
      return { parts, A: {} };
    },
    anim: () => {
      const w = TAU / 4;
      const sway = (t) => Math.sin(w * t);
      return {
        Trunk: (t, b) => ({ pos: [b.pos[0], b.pos[1], b.pos[2]], rot: [0, 0, 1.6 * sway(t)] }),
        'Foliage low': (t, b) => ({ pos: [b.pos[0] + 0.05 * sway(t), b.pos[1], b.pos[2]], rot: [0, 0, 2.2 * sway(t)] }),
        'Foliage mid': (t, b) => ({ pos: [b.pos[0] + 0.08 * sway(t + 0.4), b.pos[1], b.pos[2]], rot: [0, 0, 3 * sway(t + 0.4)] }),
        'Foliage top': (t, b) => ({ pos: [b.pos[0] + 0.11 * sway(t + 0.8), b.pos[1], b.pos[2]], rot: [0, 0, 3.6 * sway(t + 0.8)] }),
      };
    },
  },
  {
    id: 'rocket', name: 'Rocket', cat: 'thing', emoji: '🚀',
    clip: 'Hover', duration: 2.4, samples: 16,
    make: () => {
      const parts = [
        part('Hull', 'cylinder', { rt: 0.19, rb: 0.24, h: 0.9, seg: 28 }, [0, 0.85, 0], null,
          { color: '#e8eef7', roughness: 0.34, metalness: 0.55 }),
        part('Nose', 'cone', { r: 0.19, h: 0.36, seg: 28 }, [0, 1.48, 0], null,
          { color: '#ff5d73', roughness: 0.4, metalness: 0.3 }),
        part('Window', 'sphere', { r: 0.11, wseg: 20, hseg: 14 }, [0, 1.0, 0.19], null,
          { color: '#0a1a26', roughness: 0.15, metalness: 0.2, emissive: '#2ec5ff', emissiveIntensity: 0.9 }),
        part('Fin L', 'box', { w: 0.05, h: 0.36, d: 0.28, taper: 0.7 }, [-0.22, 0.5, -0.02], [0, 0, -14],
          { color: '#ff5d73', roughness: 0.45, metalness: 0.35 }),
        part('Fin R', 'box', { w: 0.05, h: 0.36, d: 0.28, taper: 0.7 }, [0.22, 0.5, -0.02], [0, 0, 14],
          { color: '#ff5d73', roughness: 0.45, metalness: 0.35 }),
        part('Fin B', 'box', { w: 0.05, h: 0.34, d: 0.26, taper: 0.7 }, [0, 0.5, -0.2], [-14, 0, 0],
          { color: '#ff5d73', roughness: 0.45, metalness: 0.35 }),
        part('Thruster glow', 'torus', { r: 0.2, tube: 0.035, rseg: 10, tseg: 40 }, [0, 0.38, 0], [90, 0, 0],
          { color: '#1a0d10', roughness: 0.4, emissive: '#ff8a3d', emissiveIntensity: 2.2 }),
      ];
      return { parts, A: {} };
    },
    anim: () => {
      const w = TAU / 2.4;
      const y = (t) => 0.05 * Math.sin(w * t);
      const out = {};
      for (const n of ['Hull', 'Nose', 'Window', 'Fin L', 'Fin R', 'Fin B', 'Thruster glow']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + y(t), b.pos[2]], rot: b.rot });
      }
      out.Hull = (t, b) => ({ pos: [b.pos[0], b.pos[1] + y(t), b.pos[2]], rot: [0, 0, 2.2 * Math.sin(w * t)] });
      out['Thruster glow'] = (t, b) => {
        const s = 1 + 0.12 * Math.sin(4 * w * t);
        return { pos: [b.pos[0], b.pos[1] + y(t), b.pos[2]], rot: [90, 0, 0], scale: [s, s, s] };
      };
      return out;
    },
    float: 1,
  },
  {
    id: 'car', name: 'Car', cat: 'thing', emoji: '🚗',
    clip: 'Drive', duration: 2, samples: 16,
    make: () => {
      const parts = [
        part('Body', 'box', { w: 1.5, h: 0.3, d: 0.74, taper: 0.06 }, [0, 0.52, 0], null,
          { color: '#e0453f', roughness: 0.34, metalness: 0.55 }),
        part('Cabin', 'box', { w: 0.76, h: 0.3, d: 0.66, taper: 0.35 }, [0, 0.8, -0.02], null,
          { color: '#22303f', roughness: 0.22, metalness: 0.5 }),
        part('Light L', 'sphere', { r: 0.06, wseg: 14, hseg: 10 }, [-0.52, 0.52, 0.37], null,
          { color: '#fff3c4', roughness: 0.2, emissive: '#ffd166', emissiveIntensity: 1.6 }),
        part('Light R', 'sphere', { r: 0.06, wseg: 14, hseg: 10 }, [0.52, 0.52, 0.37], null,
          { color: '#fff3c4', roughness: 0.2, emissive: '#ffd166', emissiveIntensity: 1.6 }),
        part('Wheel FL', 'cylinder', { rt: 0.18, rb: 0.18, h: 0.13, seg: 24 }, [-0.62, 0.18, 0.26], [0, 0, 90], { color: '#181c22', roughness: 0.85 }),
        part('Wheel FR', 'cylinder', { rt: 0.18, rb: 0.18, h: 0.13, seg: 24 }, [0.62, 0.18, 0.26], [0, 0, 90], { color: '#181c22', roughness: 0.85 }),
        part('Wheel BL', 'cylinder', { rt: 0.18, rb: 0.18, h: 0.13, seg: 24 }, [-0.62, 0.18, -0.26], [0, 0, 90], { color: '#181c22', roughness: 0.85 }),
        part('Wheel BR', 'cylinder', { rt: 0.18, rb: 0.18, h: 0.13, seg: 24 }, [0.62, 0.18, -0.26], [0, 0, 90], { color: '#181c22', roughness: 0.85 }),
      ];
      return { parts, A: {} };
    },
    anim: () => {
      const w = TAU / 2;
      const bounce = (t) => 0.012 * Math.sin(4 * w * t);
      const out = {};
      for (const n of ['Body', 'Cabin', 'Light L', 'Light R']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + bounce(t), b.pos[2]], rot: [0, 0, 0.9 * Math.sin(2 * w * t)] });
      }
      for (const n of ['Wheel FL', 'Wheel FR', 'Wheel BL', 'Wheel BR']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + bounce(t) * 0.4, b.pos[2]], rot: b.rot });
      }
      return out;
    },
  },
  {
    id: 'drone', name: 'Drone', cat: 'thing', emoji: '🛸',
    clip: 'Fly', duration: 1.6, samples: 16,
    make: () => {
      const arm = '#7789a4';
      const parts = [
        part('Body', 'box', { w: 0.4, h: 0.14, d: 0.4, taper: 0.16 }, [0, 1.0, 0], null,
          { color: '#8fa4c2', roughness: 0.42, metalness: 0.35 }),
        part('Top plate', 'box', { w: 0.26, h: 0.05, d: 0.26, taper: 0.4 }, [0, 1.1, 0], null,
          { color: '#5b6c86', roughness: 0.5, metalness: 0.3 }),
        part('Camera', 'sphere', { r: 0.07, wseg: 16, hseg: 12 }, [0, 0.93, 0.08], null,
          { color: '#0d141c', roughness: 0.2, metalness: 0.3, emissive: '#35e0ff', emissiveIntensity: 0.7 }),
        part('Arm X1', 'cylinder', { rt: 0.028, rb: 0.028, h: 0.36, seg: 10 }, [0.17, 1.02, 0.17], [0, 90, -45], { color: arm, roughness: 0.55, metalness: 0.25 }),
        part('Arm X2', 'cylinder', { rt: 0.028, rb: 0.028, h: 0.36, seg: 10 }, [-0.17, 1.02, 0.17], [0, 90, 45], { color: arm, roughness: 0.55, metalness: 0.25 }),
        part('Arm X3', 'cylinder', { rt: 0.028, rb: 0.028, h: 0.36, seg: 10 }, [0.17, 1.02, -0.17], [0, 90, 45], { color: arm, roughness: 0.55, metalness: 0.25 }),
        part('Arm X4', 'cylinder', { rt: 0.028, rb: 0.028, h: 0.36, seg: 10 }, [-0.17, 1.02, -0.17], [0, 90, -45], { color: arm, roughness: 0.55, metalness: 0.25 }),
        part('Rotor 1', 'torus', { r: 0.17, tube: 0.016, rseg: 4, tseg: 6 }, [0.29, 1.05, 0.3], [90, 0, 0], { color: '#6ee7ff', roughness: 0.3, metalness: 0.4, emissive: '#2ec5ff', emissiveIntensity: 0.5 }),
        part('Rotor 2', 'torus', { r: 0.17, tube: 0.016, rseg: 4, tseg: 6 }, [-0.29, 1.05, 0.3], [90, 0, 0], { color: '#6ee7ff', roughness: 0.3, metalness: 0.4, emissive: '#2ec5ff', emissiveIntensity: 0.5 }),
        part('Rotor 3', 'torus', { r: 0.17, tube: 0.016, rseg: 4, tseg: 6 }, [0.29, 1.05, -0.3], [90, 0, 0], { color: '#6ee7ff', roughness: 0.3, metalness: 0.4, emissive: '#2ec5ff', emissiveIntensity: 0.5 }),
        part('Rotor 4', 'torus', { r: 0.17, tube: 0.016, rseg: 4, tseg: 6 }, [-0.29, 1.05, -0.3], [90, 0, 0], { color: '#6ee7ff', roughness: 0.3, metalness: 0.4, emissive: '#2ec5ff', emissiveIntensity: 0.5 }),
      ];
      return { parts, A: {} };
    },
    anim: () => {
      const w = TAU / 1.6;
      const y = (t) => 0.05 * Math.sin(w * t);
      const out = {};
      for (const n of ['Body', 'Top plate', 'Camera', 'Arm X1', 'Arm X2', 'Arm X3', 'Arm X4']) {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + y(t), b.pos[2]], rot: b.rot });
      }
      ['Rotor 1', 'Rotor 2', 'Rotor 3', 'Rotor 4'].forEach((n, i) => {
        out[n] = (t, b) => ({ pos: [b.pos[0], b.pos[1] + y(t) * 1.2, b.pos[2]], rot: [90, (i % 2 ? -1 : 1) * 900 * t, 0], ease: 'linear' });
      });
      return out;
    },
    float: 1,
  },
  {
    id: 'planet', name: 'Planet', cat: 'thing', emoji: '🪐',
    clip: 'Orbit', duration: 6, samples: 24,
    make: () => {
      const parts = [
        part('Planet', 'icosa', { r: 0.6, detail: 1 }, [0, 1.1, 0], null,
          { color: '#4f7fd6', roughness: 0.62, metalness: 0.12, flatShading: true }),
        part('Ring', 'torus', { r: 0.95, tube: 0.05, rseg: 6, tseg: 80 }, [0, 1.1, 0], [12, 0, 0],
          { color: '#c9b48a', roughness: 0.7, metalness: 0.25, flatShading: true }),
        part('Continent A', 'icosa', { r: 0.2, detail: 0 }, [0.42, 1.28, 0.34], null,
          { color: '#59c07d', roughness: 0.75, flatShading: true }),
        part('Continent B', 'icosa', { r: 0.15, detail: 0 }, [-0.38, 0.9, 0.36], null,
          { color: '#59c07d', roughness: 0.75, flatShading: true }),
        part('Moon', 'icosa', { r: 0.14, detail: 0 }, [1.35, 1.35, 0], null,
          { color: '#dfe3ea', roughness: 0.8, metalness: 0.05, flatShading: true }),
      ];
      return { parts, A: {} };
    },
    anim: () => {
      const D = 6;
      const spin = (t) => (360 * t) / D;
      const out = {
        Planet: (t, b) => ({ pos: b.pos, rot: [0, spin(t), 0], ease: 'linear' }),
        Ring: (t, b) => ({ pos: b.pos, rot: [12, spin(t) * 0.25, 0], ease: 'linear' }),
      };
      // continents ride on the planet surface
      const ride = (base, t) => {
        const a = rad(spin(t));
        return [base[0] * Math.cos(a) + base[2] * Math.sin(a), base[1], -base[0] * Math.sin(a) + base[2] * Math.cos(a)];
      };
      out['Continent A'] = (t) => ({ pos: ride([0.42, 1.28, 0.34], t), rot: [0, spin(t), 0], ease: 'linear' });
      out['Continent B'] = (t) => ({ pos: ride([-0.38, 0.9, 0.36], t), rot: [0, spin(t), 0], ease: 'linear' });
      out.Moon = (t) => {
        const a = rad((360 * t) / D) * 2;
        return { pos: [1.35 * Math.cos(a), 1.1 + 0.35 * Math.sin(a * 0.5) + 0.25, 1.35 * Math.sin(a)], rot: [0, spin(t), 0], ease: 'linear' };
      };
      return out;
    },
    float: 1,
  },
];

/* ════════════════════════════════════════════════════════════
   Instantiate
   ════════════════════════════════════════════════════════════ */

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'human', label: 'Humans' },
  { id: 'animal', label: 'Animals' },
  { id: 'thing', label: 'Props' },
];

export const LIBRARY = PRESETS;

const KEY_SAMPLES = (preset) => preset.samples || 12;

function sampleTrack(obj, fn, duration, samples) {
  if (!fn) return null;
  const base = { pos: obj.pos, rot: obj.rot, scale: obj.scale };
  const keys = [];
  for (let i = 0; i <= samples; i++) {
    const t = +((i * duration) / samples).toFixed(3);
    let o;
    try { o = fn(t, base) || {}; } catch { o = {}; }
    keys.push({
      t,
      ease: o.ease || 'smooth',
      pos: [...(o.pos || base.pos)],
      rot: [...(o.rot || base.rot)],
      scale: [...(o.scale || base.scale)],
    });
  }
  return keys;
}

/** move every anchor with the model so limb maths stays local to the drop point */
function shiftAnchors(A, xz) {
  const dx = xz[0] || 0, dz = xz[1] || 0;
  if (!dx && !dz) return;
  const shift = (v) => (Array.isArray(v) && v.length === 3 && typeof v[0] === 'number' ? [v[0] + dx, v[1], v[2] + dz] : v);
  for (const k of Object.keys(A)) {
    const v = A[k];
    if (Array.isArray(v)) A[k] = shift(v);
    else if (v && typeof v === 'object') for (const kk of Object.keys(v)) v[kk] = shift(v[kk]);
  }
}

/** drop a whole animated model into the current scene */
export function insertPreset(preset, xz = [0, 0], opts = {}) {
  const proj = state.project;
  if (!proj || !preset) return null;
  const built = preset.make();
  const parts = built.parts;
  const A = built.A || {};
  shiftAnchors(A, xz);

  pushHistory();

  const gid = uid('g');
  const created = [];
  for (const d of parts) {
    const obj = makeObject({
      name: d.name,
      type: d.type,
      params: d.params,
      pos: [d.pos[0] + xz[0], d.pos[1], d.pos[2] + xz[1]],
      rot: d.rot,
      scale: d.scale,
      material: { ...d.material },
      group: gid,
      preset: preset.id,
    });
    proj.objects.push(obj);
    created.push(obj);
  }

  /* either a new clip for this model, or the tracks are merged into the active clip */
  const activeClip = clip() || null;
  const merge = !!opts.intoCurrentClip && !!activeClip;
  const taken = new Set(proj.clips.map((c) => c.name));
  let clipName = preset.clip;
  for (let i = 2; taken.has(clipName); i++) clipName = `${preset.clip} ${i}`;
  const clipObj = merge
    ? activeClip
    : { id: uid('c'), name: clipName, duration: preset.duration, tracks: {} };
  if (merge) clipObj.duration = Math.max(clipObj.duration, preset.duration);
  const anim = preset.anim ? preset.anim(A) : {};
  parts.forEach((d, i) => {
    const fn = anim[d.name] || anim['*'];
    const keys = sampleTrack(created[i], fn, preset.duration, KEY_SAMPLES(preset));
    if (keys) clipObj.tracks[created[i].id] = keys;
  });

  if (!merge) proj.clips.push(clipObj);
  proj.activeClipId = clipObj.id;
  state.selectedIds = [created[0].id];
  state.time = 0;

  commit('objects');
  emit('selection');
  emit('clip');
  emit('toast', {
    msg: merge
      ? `${preset.name} added to “${clipObj.name}” · ${created.length} parts`
      : `${preset.name} added · ${created.length} parts · clip “${clipObj.name}”`,
    kind: 'ok',
  });

  return { objects: created, clip: clipObj, primary: created[0], group: gid };
}

export const getPreset = (id) => PRESETS.find((p) => p.id === id) || null;
