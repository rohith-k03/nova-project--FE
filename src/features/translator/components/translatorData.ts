export const languages = [
  { id: 'en', label: 'English', region: null },
  { id: 'pt', label: 'Portuguese', region: 'Portugal' },
  { id: 'es', label: 'Spanish', region: 'Spain' },
  { id: 'fr', label: 'French', region: 'France' },
  { id: 'de', label: 'German', region: 'Germany' },
  { id: 'hi', label: 'Hindi', region: 'India' },
  { id: 'ta', label: 'Tamil', region: 'India' },
];

export const languageOptions = languages.map((item) => ({ id: item.id, label: item.label }));

export const maxLength = 5000;

export const defaultText = "I'd like a table for two, please.";

const phrasebook = [
  {
    en: "I'd like a table for two, please.",
    pt: 'Gostaria de uma mesa para duas pessoas, por favor.',
    es: 'Quisiera una mesa para dos, por favor.',
    fr: "Je voudrais une table pour deux, s'il vous plaît.",
    de: 'Ich hätte gern einen Tisch für zwei, bitte.',
    hi: 'मुझे दो लोगों के लिए एक मेज़ चाहिए, कृपया।',
    ta: 'இருவருக்கான ஒரு மேசை வேண்டும், தயவுசெய்து.',
    tone: 'Polite · Natural phrasing',
    tip: 'A warm, polite way to ask for something in a restaurant.',
  },
  {
    en: 'Thank you very much.',
    pt: 'Muito obrigado.',
    es: 'Muchas gracias.',
    fr: 'Merci beaucoup.',
    de: 'Vielen Dank.',
    hi: 'बहुत-बहुत धन्यवाद।',
    ta: 'மிக்க நன்றி.',
    tone: 'Polite · Everyday',
    tip: 'Works in almost any situation, formal or casual.',
  },
  {
    en: 'Where is the train station?',
    pt: 'Onde fica a estação de comboios?',
    es: '¿Dónde está la estación de tren?',
    fr: 'Où est la gare ?',
    de: 'Wo ist der Bahnhof?',
    hi: 'रेलवे स्टेशन कहाँ है?',
    ta: 'ரயில் நிலையம் எங்கே இருக்கிறது?',
    tone: 'Neutral · Directions',
    tip: 'Handy for asking directions anywhere you travel.',
  },
  {
    en: 'Good morning.',
    pt: 'Bom dia.',
    es: 'Buenos días.',
    fr: 'Bonjour.',
    de: 'Guten Morgen.',
    hi: 'सुप्रभात।',
    ta: 'காலை வணக்கம்.',
    tone: 'Friendly · Greeting',
    tip: 'A friendly greeting for the first half of the day.',
  },
  {
    en: 'How much does this cost?',
    pt: 'Quanto custa isto?',
    es: '¿Cuánto cuesta esto?',
    fr: 'Combien ça coûte ?',
    de: 'Was kostet das?',
    hi: 'इसकी कीमत कितनी है?',
    ta: 'இதன் விலை என்ன?',
    tone: 'Neutral · Shopping',
    tip: 'Use it in shops and markets when prices are not shown.',
  },
];

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/[.,!?¿¡;:'’"।]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const translate = (text, fromId, toId) => {
  if (fromId === toId) return { text, tone: 'Same language', tip: null };
  const needle = normalize(text);
  const entry = phrasebook.find((item) => normalize(item[fromId]) === needle);
  if (!entry) return null;
  return { text: entry[toId], tone: entry.tone, tip: entry.tip };
};

export const getLanguage = (id) => languages.find((item) => item.id === id);

export const resultLabel = (id) => {
  const language = getLanguage(id);
  const base = language.label.toUpperCase();
  return language.region ? `${base} · ${language.region.toUpperCase()}` : base;
};

export const sampleHints = phrasebook.map((item) => item.en);
