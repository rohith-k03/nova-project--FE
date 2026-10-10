export const modes = [
  { id: 'explain', label: 'Explain' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'quiz', label: 'Quiz me' },
];

export const topics = {
  photosynthesis: {
    label: 'Photosynthesis',
    level: 'High school biology',
    explanation:
      'Photosynthesis is how plants turn light into food. Chlorophyll in the leaves absorbs sunlight, and the plant uses that energy to convert water and carbon dioxide into glucose and oxygen.',
    ideas: [
      'Light is absorbed by chlorophyll inside chloroplasts.',
      'Water comes up through the roots, carbon dioxide enters through the leaves.',
      'Glucose feeds the plant, and oxygen is released into the air.',
    ],
    questions: [
      {
        id: 'p1',
        prompt: 'Where in a plant cell does photosynthesis take place?',
        options: ['Mitochondria', 'Chloroplasts', 'Nucleus'],
        answer: 1,
        explanation: 'Chloroplasts contain chlorophyll, the pigment that captures light energy.',
      },
      {
        id: 'p2',
        prompt: 'What provides the energy plants need for photosynthesis?',
        options: ['Water', 'Sunlight', 'Carbon dioxide'],
        answer: 1,
        explanation: 'Chlorophyll absorbs sunlight, which powers the conversion of water and carbon dioxide into glucose.',
      },
      {
        id: 'p3',
        prompt: 'Which gas do plants release during photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Hydrogen'],
        answer: 0,
        explanation: 'Oxygen is released as a by-product when water molecules are split.',
      },
      {
        id: 'p4',
        prompt: 'What sugar does photosynthesis produce?',
        options: ['Sucrose', 'Fructose', 'Glucose'],
        answer: 2,
        explanation: 'Plants build glucose, which they use for energy or store as starch.',
      },
      {
        id: 'p5',
        prompt: 'Which pigment gives leaves their green color?',
        options: ['Chlorophyll', 'Melanin', 'Keratin'],
        answer: 0,
        explanation: 'Chlorophyll reflects green light while absorbing red and blue light.',
      },
    ],
  },
  newton: {
    label: "Newton's laws of motion",
    level: 'High school physics',
    explanation:
      "Newton's three laws describe how forces change motion. Objects keep doing what they are doing until a force acts, force equals mass times acceleration, and every action has an equal and opposite reaction.",
    ideas: [
      'First law: an object stays at rest or in steady motion unless a force acts on it.',
      'Second law: force equals mass times acceleration (F = ma).',
      'Third law: every action has an equal and opposite reaction.',
    ],
    questions: [
      {
        id: 'n1',
        prompt: 'Which law says force equals mass times acceleration?',
        options: ['First law', 'Second law', 'Third law'],
        answer: 1,
        explanation: 'The second law is written as F = ma.',
      },
      {
        id: 'n2',
        prompt: 'A book rests on a table. Which law explains why it does not move?',
        options: ['First law', 'Second law', 'Law of gravity'],
        answer: 0,
        explanation: 'Forces are balanced, so the book stays at rest unless an unbalanced force acts.',
      },
      {
        id: 'n3',
        prompt: 'A rocket pushes gas down and moves up. Which law is this?',
        options: ['First law', 'Second law', 'Third law'],
        answer: 2,
        explanation: 'The gas is pushed down, and the rocket is pushed up with an equal and opposite force.',
      },
      {
        id: 'n4',
        prompt: 'If the same force acts on a heavier object, its acceleration will be',
        options: ['Greater', 'Smaller', 'The same'],
        answer: 1,
        explanation: 'With more mass, the same force produces less acceleration (a = F / m).',
      },
    ],
  },
  fractions: {
    label: 'Fractions',
    level: 'Middle school math',
    explanation:
      'A fraction shows a part of a whole. The bottom number says how many equal parts the whole is split into, and the top number says how many of those parts you have.',
    ideas: [
      'The denominator is the number of equal parts in the whole.',
      'The numerator is how many of those parts you are counting.',
      'To add fractions, give them the same denominator first.',
    ],
    questions: [
      {
        id: 'f1',
        prompt: 'In 3/4, what does the 4 represent?',
        options: ['Parts counted', 'Equal parts in the whole', 'The answer'],
        answer: 1,
        explanation: 'The denominator tells you how many equal parts make up the whole.',
      },
      {
        id: 'f2',
        prompt: 'Which fraction is equal to 1/2?',
        options: ['2/4', '1/3', '3/5'],
        answer: 0,
        explanation: 'Multiply the top and bottom of 1/2 by 2 to get 2/4.',
      },
      {
        id: 'f3',
        prompt: 'What is 1/4 + 2/4?',
        options: ['3/8', '3/4', '2/4'],
        answer: 1,
        explanation: 'The denominators match, so add the numerators: 1 + 2 = 3, giving 3/4.',
      },
      {
        id: 'f4',
        prompt: 'Which fraction is the largest?',
        options: ['1/8', '1/4', '1/2'],
        answer: 2,
        explanation: 'With the same numerator, fewer parts in the whole means each part is bigger.',
      },
    ],
  },
};

export const topicOptions = Object.keys(topics).map((id) => ({ id, label: topics[id].label }));

export const optionLetters = ['A', 'B', 'C', 'D'];

export const cheers = ['Exactly right!', 'Nicely done!', 'That is correct!', 'Spot on!'];
