export const sampleCode = `import { useState } from 'react';

type Task = { id: number; title: string; done: boolean };

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Drink water', done: false },
  ]);

  const toggle = (id: number) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => toggle(t.id)}
          />
          {t.title}
        </li>
      ))}
    </ul>
  );
}`;

export const sampleExplanation =
  'Typed tasks live in local state. Each checkbox toggles its task without mutating the list.';

export const fileExtensions = {
  TypeScript: 'tsx',
  JavaScript: 'jsx',
  Python: 'py',
  Java: 'java',
  Go: 'go',
};
