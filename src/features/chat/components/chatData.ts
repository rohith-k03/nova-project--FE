const todayAt = (hours, minutes) => {
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

export const seedConversations = {
  c1: [
    {
      id: 'c1-m1',
      role: 'user',
      text: 'Help me build a calmer morning routine. I have 30 minutes before work.',
      time: todayAt(9, 38),
    },
    {
      id: 'c1-m2',
      role: 'assistant',
      text: "Absolutely. Let's make your first 30 minutes feel intentional, not rushed.",
      steps: [
        { id: '01', title: 'Wake gently', duration: '5 min', detail: 'Water, daylight, and no phone.' },
        { id: '02', title: 'Move & breathe', duration: '10 min', detail: 'A light stretch and five slow breaths.' },
        { id: '03', title: 'Set your direction', duration: '15 min', detail: 'Enjoy breakfast. Write one priority.' },
      ],
      time: todayAt(9, 39),
    },
  ],
};

export const followUps = ['Make a checklist', 'Adapt for weekends'];

export const starterPrompts = [
  'Plan my day',
  'Explain a concept simply',
  'Brainstorm project ideas',
  'Draft a polite email',
];

export const modelLabel = 'Nova 2.5 · Balanced';

export const buildReply = () =>
  "Happy to help with that. Tell me a little more about what you're aiming for and we'll shape it together.";
