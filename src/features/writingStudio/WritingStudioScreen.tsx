import React, { useState } from 'react';
import { Screen, Header, AppText, ChipRow, Button, ScreenFooter } from '../../components/common';
import { DraftBox, RewriteResult, goals, defaultDraft, rewrite } from './components';
import { colors, spacing } from '../../theme';

export default function WritingStudioScreen({ navigation }) {
  const [draft, setDraft] = useState(defaultDraft);
  const [goal, setGoal] = useState('polish');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (value) => {
    setDraft(value);
    setError('');
  };

  const handleImprove = () => {
    if (draft.trim().length < 10) {
      setError('Write a little more so Nova has something to work with.');
      return;
    }
    setResult({ text: rewrite(draft, goal), goal });
  };

  const footer = (
    <ScreenFooter>
      <Button title="Improve writing" icon="create-outline" onPress={handleImprove} />
    </ScreenFooter>
  );

  return (
    <Screen scroll keyboardAware footer={footer}>
      <Header title="Writing studio" onBack={() => navigation.goBack()} />

      <AppText variant="h1" style={{ marginTop: spacing.sm }}>
        Find your best voice.
      </AppText>
      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={{ marginTop: spacing.sm, marginBottom: spacing.xl }}
      >
        Paste a draft and choose how you want it to sound.
      </AppText>

      <ChipRow items={goals} activeId={goal} onChange={setGoal} style={{ marginBottom: spacing.md }} />
      <DraftBox
        value={draft}
        onChangeText={handleChange}
        onClear={() => {
          setDraft('');
          setResult(null);
        }}
        error={error}
      />

      {result ? (
        <RewriteResult
          text={result.text}
          goalLabel={goals.find((item) => item.id === result.goal).label}
        />
      ) : null}
    </Screen>
  );
}
