export const goals = [
  { id: 'polish', label: 'Polish' },
  { id: 'shorten', label: 'Shorten' },
  { id: 'friendly', label: 'Friendlier' },
  { id: 'formal', label: 'Formal' },
];

export const defaultDraft =
  'hey, just wanted to check if you got my last mail about the project timeline, we really need to lock it in this week';

export const maxLength = 3000;

const capitalize = (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1);

const finish = (sentence) => (/[.!?]$/.test(sentence) ? sentence : `${sentence}.`);

const splitClauses = (text) => text.replace(/,\s+(we)\b/gi, '. $1');

const sentences = (text) =>
  (splitClauses(text.replace(/\s+/g, ' ')).match(/[^.!?]+[.!?]*/g) || [text])
    .map((part) => finish(capitalize(part.trim())))
    .filter((part) => part.length > 1);

const fillers = /\b(just|really|actually|basically|very)\s+/gi;

const dropGreeting = (text) => capitalize(text.replace(/^hey,?\s*/i, ''));

export const rewrite = (text, goal) => {
  const parts = sentences(text);

  if (goal === 'shorten') {
    const kept = parts.length > 1 ? parts.slice(0, -1) : parts;
    return kept
      .join(' ')
      .replace(fillers, '')
      .replace(/\bwanted to check if\b/gi, 'check if');
  }

  const body = parts.join(' ');

  if (goal === 'friendly') return `Hi there! ${dropGreeting(body)} Thanks so much!`;
  if (goal === 'formal') {
    const formal = dropGreeting(body)
      .replace(/\bjust wanted to\b/gi, 'I am writing to')
      .replace(/\bmail\b/gi, 'email');
    return `Dear colleague, ${formal} Kind regards.`;
  }
  return body;
};

export const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;
