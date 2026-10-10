import React, { useState } from 'react';
import { Screen, Header, AppText, Button, OptionSheet, ScreenFooter } from '../../components/common';
import {
  LanguageBar,
  SourceBox,
  ResultBox,
  NovaTip,
  PhraseHints,
  defaultText,
  translate,
  getLanguage,
  resultLabel,
} from './components';
import { colors, spacing } from '../../theme';

const FROM = 'en';
const TO = 'pt';

export default function TranslatorScreen({ navigation }) {
  const [from, setFrom] = useState(FROM);
  const [to, setTo] = useState(TO);
  const [text, setText] = useState(defaultText);
  const [result, setResult] = useState(() => translate(defaultText, FROM, TO));
  const [resultLang, setResultLang] = useState(TO);
  const [notice, setNotice] = useState('');
  const [saved, setSaved] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyOpen, setHistoryOpen] = useState(false);

  const runTranslation = (source, fromId, toId) => {
    const next = translate(source, fromId, toId);
    setResultLang(toId);
    if (!next) {
      setResult(null);
      setNotice('This phrase is not in the offline phrasebook yet. Try one of the suggested phrases below.');
      return;
    }
    setNotice('');
    setResult(next);
    setHistory((prev) =>
      [{ id: `${Date.now()}`, label: `${source} → ${next.text}`, source, fromId, toId }, ...prev].slice(0, 8)
    );
  };

  const handleTranslate = () => {
    if (!text.trim()) {
      setNotice('Type something to translate first.');
      return;
    }
    runTranslation(text, from, to);
  };

  const handleSwap = () => {
    const nextText = result ? result.text : text;
    setFrom(to);
    setTo(from);
    setText(nextText);
    runTranslation(nextText, to, from);
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setNotice('');
  };

  const handleRestore = (id) => {
    const entry = history.find((item) => item.id === id);
    if (!entry) return;
    setFrom(entry.fromId);
    setTo(entry.toId);
    setText(entry.source);
    runTranslation(entry.source, entry.fromId, entry.toId);
  };

  const isSaved = result ? saved.includes(result.text) : false;
  const toggleSave = () =>
    setSaved((prev) =>
      prev.includes(result.text) ? prev.filter((item) => item !== result.text) : [...prev, result.text]
    );

  const footer = (
    <ScreenFooter>
      <Button title="Translate" icon="language-outline" onPress={handleTranslate} />
    </ScreenFooter>
  );

  return (
    <Screen scroll keyboardAware footer={footer}>
      <Header
        title="Translator"
        onBack={() => navigation.goBack()}
        rightIcon="time-outline"
        onRightPress={() => history.length > 0 && setHistoryOpen(true)}
      />

      <AppText variant="h1" style={{ marginTop: spacing.sm }}>
        Say it naturally.
      </AppText>
      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={{ marginTop: spacing.sm, marginBottom: spacing.xl }}
      >
        Thoughtful translations, not just word swaps.
      </AppText>

      <LanguageBar
        from={from}
        to={to}
        onFromChange={setFrom}
        onToChange={setTo}
        onSwap={handleSwap}
      />

      <SourceBox
        label={getLanguage(from).label.toUpperCase()}
        value={text}
        onChangeText={setText}
        onClear={handleClear}
      />

      {result ? (
        <>
          <ResultBox
            label={resultLabel(resultLang)}
            text={result.text}
            tone={result.tone}
            saved={isSaved}
            onToggleSave={toggleSave}
          />
          {result.tip ? <NovaTip text={result.tip} /> : null}
        </>
      ) : null}

      {notice ? (
        <AppText variant="caption" color={colors.textMuted} style={{ marginTop: spacing.lg }}>
          {notice}
        </AppText>
      ) : null}

      <PhraseHints onPick={setText} />

      <OptionSheet
        visible={historyOpen}
        title="Recent translations"
        options={history.map((item) => ({ id: item.id, label: item.label }))}
        selected={null}
        onSelect={handleRestore}
        onClose={() => setHistoryOpen(false)}
      />
    </Screen>
  );
}
