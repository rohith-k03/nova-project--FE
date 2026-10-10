export const sampleDocument = {
  id: 'sample',
  name: 'Q3-business-review.pdf',
  meta: '12 pages · 2.4 MB · Ready',
  sample: true,
};

export const tabs = [
  { id: 'summary', label: 'Summary' },
  { id: 'ask', label: 'Ask questions' },
  { id: 'points', label: 'Key points' },
];

export const summary = {
  title: 'Q3 at a glance',
  text: 'A strong quarter driven by returning customers and a more focused acquisition strategy.',
  metrics: [
    { id: 'm1', headline: '$128,400 revenue', detail: 'Up 18.4% vs Q2 · Page 3' },
    { id: 'm2', headline: '91.6% customer retention', detail: 'Up 3.2 points · Page 6' },
    { id: 'm3', headline: 'Next: invest in onboarding', detail: 'Largest opportunity for Q4 · Page 10' },
  ],
};

export const keyPoints = [
  { id: 'k1', text: 'Revenue reached $128,400, up 18.4% on the previous quarter.', page: 3 },
  { id: 'k2', text: 'Retention improved to 91.6%, the strongest result this year.', page: 6 },
  { id: 'k3', text: 'Paid acquisition was trimmed in favor of referrals and partners.', page: 8 },
  { id: 'k4', text: 'Onboarding is the largest opportunity for Q4.', page: 10 },
];

export const suggestion = 'What are the biggest risks for Q4?';

const answers = [
  {
    match: ['risk', 'threat', 'concern'],
    text: 'The report flags three risks: slower paid acquisition, reliance on a few large returning customers, and a thin onboarding experience for new users.',
    page: 11,
  },
  {
    match: ['revenue', 'sales', 'growth'],
    text: 'Revenue reached $128,400 in Q3, up 18.4% on Q2, with September the strongest month.',
    page: 3,
  },
  {
    match: ['retention', 'churn', 'customers'],
    text: 'Retention rose to 91.6%, up 3.2 points. Returning customers drove most of the growth.',
    page: 6,
  },
  {
    match: ['onboarding', 'q4', 'next', 'plan'],
    text: 'The report recommends investing in onboarding first, since it is the largest opportunity for Q4.',
    page: 10,
  },
];

export const answerQuestion = (question, document) => {
  if (!document.sample) {
    return {
      text: `I have read ${document.name}. Ask about a specific section, figure or date and I will point to where it appears.`,
      page: null,
    };
  }
  const lower = question.toLowerCase();
  const hit = answers.find((entry) => entry.match.some((word) => lower.includes(word)));
  return (
    hit ?? {
      text: 'I could not find a direct answer in this document. Try asking about revenue, retention, risks or next steps.',
      page: null,
    }
  );
};

export const formatSize = (bytes) => {
  if (!bytes) return 'PDF';
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
};
