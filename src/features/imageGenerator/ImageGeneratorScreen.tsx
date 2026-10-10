import React, { useEffect, useRef, useState } from 'react';
import { Screen, Header, AppText, ChipRow, Button, ScreenFooter } from '../../components/common';
import { routes } from '../../constants';
import { useGallery, styleOptions, ratioOptions, getResolution } from '../../context/GalleryContext';
import {
  PromptField,
  RatioPicker,
  SectionLabel,
  GenerateSummary,
  maxPromptLength,
  defaultPrompt,
  enhancePrompt,
  generateDelay,
} from './components';
import { colors, spacing } from '../../theme';

const styleItems = styleOptions.map((label) => ({ id: label, label }));

export default function ImageGeneratorScreen({ navigation, route }) {
  const { addImage, credits } = useGallery();
  const [prompt, setPrompt] = useState(route.params?.prompt ?? defaultPrompt);
  const [style, setStyle] = useState(route.params?.style ?? styleOptions[0]);
  const [ratio, setRatio] = useState(route.params?.ratio ?? '3:4');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const outOfCredits = credits <= 0;

  const handlePromptChange = (value) => {
    setPrompt(value);
    setError('');
  };

  const handleGenerate = () => {
    if (prompt.trim().length < 8) {
      setError('Describe your image in a few more words.');
      return;
    }
    setLoading(true);
    timer.current = setTimeout(() => {
      const created = addImage({ prompt: prompt.trim(), style, ratio });
      setLoading(false);
      if (!created) {
        setError('You have used all image credits for today.');
        return;
      }
      navigation.navigate(routes.imagePreview, { id: created.id });
    }, generateDelay);
  };

  const footer = (
    <ScreenFooter
      note={`Uses 1 image credit · ${credits} remaining today`}
    >
      <Button
        title="Generate image"
        icon="sparkles-outline"
        onPress={handleGenerate}
        loading={loading}
        disabled={outOfCredits}
      />
    </ScreenFooter>
  );

  return (
    <Screen scroll keyboardAware footer={footer}>
      <Header
        title="Image generator"
        onBack={() => navigation.goBack()}
        rightIcon="images-outline"
        onRightPress={() => navigation.navigate(routes.imageGallery)}
      />

      <AppText variant="h1" style={{ marginTop: spacing.sm }}>
        Imagine beyond words.
      </AppText>
      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={{ marginTop: spacing.sm, marginBottom: spacing.xl }}
      >
        Describe a world. Nova brings it into focus.
      </AppText>

      <PromptField
        value={prompt}
        onChangeText={handlePromptChange}
        maxLength={maxPromptLength}
        onEnhance={() => setPrompt(enhancePrompt(prompt))}
        error={error}
      />

      <SectionLabel>Choose a style</SectionLabel>
      <ChipRow
        items={styleItems}
        activeId={style}
        onChange={setStyle}
        style={{ marginBottom: spacing.md }}
      />

      <SectionLabel>Aspect ratio</SectionLabel>
      <RatioPicker options={ratioOptions} value={ratio} onChange={setRatio} />

      <GenerateSummary resolution={getResolution(ratio)} />
    </Screen>
  );
}
