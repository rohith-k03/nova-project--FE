export const maxPromptLength = 1000;

export const defaultPrompt =
  'A lone astronaut on dunes, a giant lavender planet on the horizon. Cinematic light, silver suit, drifting dust.';

const enhancement = 'ultra detailed, dramatic lighting, rich color, sharp focus';

export const enhancePrompt = (prompt) => {
  const trimmed = prompt.trim();
  if (!trimmed || trimmed.toLowerCase().includes(enhancement)) return prompt;
  const base = trimmed.replace(/[.,\s]+$/, '');
  return `${base}, ${enhancement}`.slice(0, maxPromptLength);
};

export const ratioShapes = {
  '1:1': { width: 18, height: 18 },
  '3:4': { width: 16, height: 22 },
  '16:9': { width: 24, height: 14 },
};

export const generateDelay = 1400;
