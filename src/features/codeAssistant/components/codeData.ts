export const modes = [
  { id: 'generate', label: 'Generate' },
  { id: 'debug', label: 'Debug' },
  { id: 'explain', label: 'Explain' },
];

export const languages = ['TypeScript', 'JavaScript', 'Python', 'Java', 'Go'];

export const frameworks = ['React', 'React Native', 'Node.js', 'Express', 'None'];

export const modeCopy = {
  generate: {
    label: 'What are you building?',
    placeholder: 'Describe the component, function or feature you need.',
    action: 'Generate code',
  },
  debug: {
    label: 'What needs fixing?',
    placeholder: 'Paste your code and describe what goes wrong.',
    action: 'Find the bug',
  },
  explain: {
    label: 'What should I explain?',
    placeholder: 'Paste the code you want walked through.',
    action: 'Explain code',
  },
};

export const defaultPrompt =
  'Create a React task list component with checkboxes. Use TypeScript and let me mark tasks as complete.';

export const dailyLimit = 20;
