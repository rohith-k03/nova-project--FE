export const supportEmail = 'support@nova.ai';

export const faqs = [
  {
    id: 'credits',
    question: 'How do image credits work?',
    answer:
      'Free accounts get 5 image credits each day. One generation uses one credit. Credits reset at midnight in your local time; unused credits do not roll over.',
  },
  {
    id: 'delete',
    question: 'Can I delete my conversations?',
    answer:
      'Yes. Contact support from this screen and we will remove them from your account. Deleted content leaves our backups within 30 days.',
  },
  {
    id: 'subscription',
    question: 'How do I manage my subscription?',
    answer:
      'Go to Profile, then Subscription. You can upgrade or restore purchases there. To cancel, open your app store subscription settings; your plan stays active until the end of the billing period.',
  },
  {
    id: 'privacy',
    question: 'Are my chats used to train models?',
    answer:
      'No. Your ideas are yours. Private chats are never used to train our models, and you can turn off personal memory at any time in Settings.',
  },
  {
    id: 'files',
    question: 'What file types can I upload?',
    answer:
      'PDF documents for the PDF assistant and CSV files for the Data analyzer. Nova Pro supports larger files, up to 25 MB.',
  },
];

export const searchFaqs = (items, query) => {
  const needle = query.trim().toLowerCase();
  if (!needle) return items;
  return items.filter(
    (item) =>
      item.question.toLowerCase().includes(needle) || item.answer.toLowerCase().includes(needle)
  );
};
