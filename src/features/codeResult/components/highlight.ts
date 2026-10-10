const KEYWORDS = new Set([
  'import', 'from', 'type', 'export', 'default', 'function', 'const', 'let', 'return',
  'if', 'else', 'new', 'true', 'false',
]);

const TYPES = new Set(['number', 'string', 'boolean', 'Task', 'void']);

const TOKEN_PATTERN = /('[^']*'|"[^"]*")|(\b[A-Za-z_]\w*\b)|(\b\d+\b)|(\s+)|(.)/g;

export const syntaxColors = {
  keyword: '#A78BFA',
  type: '#7DD3FC',
  string: '#5EEAD4',
  number: '#FBBF24',
  plain: '#C7D0E5',
};

export const tokenizeLine = (line) => {
  const tokens = [];
  let match;
  TOKEN_PATTERN.lastIndex = 0;

  while ((match = TOKEN_PATTERN.exec(line)) !== null) {
    const [text, str, word, num] = match;
    let kind = 'plain';
    if (str) kind = 'string';
    else if (word && KEYWORDS.has(word)) kind = 'keyword';
    else if (word && TYPES.has(word)) kind = 'type';
    else if (num) kind = 'number';
    tokens.push({ text, kind });
  }

  return tokens;
};
