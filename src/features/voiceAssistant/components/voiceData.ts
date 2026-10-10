export const voices = ['Luna', 'Orion', 'Sol', 'Nova'];

export const transcriptText =
  'Help me build a calmer morning routine. I have 30 minutes before work, and I would like it to feel slow and intentional.';

export const typingSpeed = 70;

export const barCount = 26;

export const formatClock = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};
