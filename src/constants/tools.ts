import { routes } from './routes';

export const toolFilters = ['All tools', 'Create', 'Productivity'];

export const tools = [
  { id: 'code', title: 'Code assistant', subtitle: 'Build, debug, explain', icon: 'code-slash-outline', category: 'Create', route: routes.codeAssistant },
  { id: 'image', title: 'Image generator', subtitle: 'Imagine it. Create it.', icon: 'image-outline', category: 'Create', route: routes.imageGenerator },
  { id: 'pdf', title: 'PDF assistant', subtitle: 'Make documents clear', icon: 'document-text-outline', category: 'Productivity', route: routes.pdfAssistant },
  { id: 'voice', title: 'Voice assistant', subtitle: 'Just say the word', icon: 'mic-outline', category: 'Productivity', route: routes.voiceAssistant },
  { id: 'translator', title: 'Translator', subtitle: 'Find the right words', icon: 'language-outline', category: 'Productivity', route: routes.translator },
  { id: 'study', title: 'Study helper', subtitle: 'Learn with confidence', icon: 'school-outline', category: 'Productivity', route: routes.studyHelper },
  { id: 'data', title: 'Data analyzer', subtitle: 'Turn data into insight', icon: 'bar-chart-outline', category: 'Productivity', route: routes.dataAnalyzer },
  { id: 'writing', title: 'Writing studio', subtitle: 'Find your best voice', icon: 'create-outline', category: 'Create', route: routes.writingStudio },
];
