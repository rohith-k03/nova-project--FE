const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'of', 'on', 'in', 'at', 'to', 'with', 'for', 'from', 'into',
  'its', 'his', 'her', 'their', 'this', 'that', 'giant', 'small', 'big', 'very',
]);

export const formatDayLabel = (timestamp) => {
  const date = new Date(timestamp);
  if (date.toDateString() === new Date().toDateString()) return 'Today';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const titleFromPrompt = (prompt) => {
  const words = (prompt.toLowerCase().match(/[a-z]+/g) ?? []).filter(
    (word) => word.length > 2 && !STOP_WORDS.has(word)
  );
  const picked = words.slice(0, 3).map((word) => word[0].toUpperCase() + word.slice(1));
  return picked.length > 0 ? picked.join(' ') : 'Untitled creation';
};

export const nameFromEmail = (email) => {
  const local = (email ?? '').split('@')[0];
  return local
    .split(/[._\-+\d]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
};
