import { images } from '../constants/images';

const g = images.gallery;

const pools = {
  Cinematic: [g.lunarSolitude, g.neonAfterHours],
  '3D render': [g.glassBloom, g.orbitalRhythm, g.quietArchitecture],
  Illustration: [g.softHorizons],
};

export const pickImage = (style, seed = 0) => {
  const pool = pools[style] ?? Object.values(g);
  return pool[seed % pool.length];
};
