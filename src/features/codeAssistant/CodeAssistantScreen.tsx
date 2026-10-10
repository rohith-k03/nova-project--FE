import React, { useState } from 'react';
import { Screen, Header, Input, ChipRow, Button, ScreenFooter } from '../../components/common';
import { routes } from '../../constants';
import {
  AssistantIntro,
  OptionsRow,
  ExplanationToggle,
  modes,
  modeCopy,
  defaultPrompt,
  dailyLimit,
} from './components';
import { spacing } from '../../theme';

export default function CodeAssistantScreen({ navigation }) {
  const [mode, setMode] = useState('generate');
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [language, setLanguage] = useState('TypeScript');
  const [framework, setFramework] = useState('React');
  const [explain, setExplain] = useState(true);
  const [error, setError] = useState('');

  const copy = modeCopy[mode];

  const handleGenerate = () => {
    if (prompt.trim().length < 10) {
      setError('Tell Nova a little more about what you need.');
      return;
    }
    setError('');
    navigation.navigate(routes.codeResult, { prompt, language, framework, explain, mode });
  };

  const footer = (
    <ScreenFooter note={`Uses 1 message · ${dailyLimit - 4} remaining today`}>
      <Button title={copy.action} icon="sparkles-outline" onPress={handleGenerate} />
    </ScreenFooter>
  );

  return (
    <Screen scroll keyboardAware footer={footer}>
      <Header
        title="Code assistant"
        onBack={() => navigation.goBack()}
        rightIcon="time-outline"
        onRightPress={() => navigation.navigate(routes.chats)}
      />
      <AssistantIntro />
      <ChipRow items={modes} activeId={mode} onChange={setMode} style={{ marginBottom: spacing.sm }} />
      <Input
        label={copy.label}
        placeholder={copy.placeholder}
        multiline
        autoCapitalize="sentences"
        value={prompt}
        onChangeText={setPrompt}
        error={error}
      />
      <OptionsRow
        language={language}
        framework={framework}
        onLanguageChange={setLanguage}
        onFrameworkChange={setFramework}
      />
      <ExplanationToggle value={explain} onToggle={() => setExplain((v) => !v)} />
    </Screen>
  );
}
