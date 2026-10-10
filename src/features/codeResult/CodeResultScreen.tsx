import React from 'react';
import { Pressable, Share } from 'react-native';
import { Screen, Header, Button, AppText, ScreenFooter } from '../../components/common';
import { routes } from '../../constants';
import {
  ResultBadges,
  CodeBlock,
  HowItWorks,
  sampleCode,
  sampleExplanation,
  fileExtensions,
} from './components';
import { colors, spacing } from '../../theme';

export default function CodeResultScreen({ navigation, route }) {
  const { language = 'TypeScript', framework = 'React', explain = true, prompt = '' } =
    route.params ?? {};
  const extension = fileExtensions[language] ?? 'txt';
  const fileName = `TaskList.${extension}`;

  const handleDownload = () => Share.share({ title: fileName, message: sampleCode });

  const handleRefine = () =>
    navigation.navigate(routes.chat, {
      prompt: `Refine this code. Original request: ${prompt}`,
    });

  const footer = (
    <ScreenFooter>
      <Button title={`Download .${extension}`} icon="download-outline" onPress={handleDownload} />
      <Pressable onPress={handleRefine} style={{ paddingTop: spacing.lg }}>
        <AppText variant="caption" color={colors.primaryText} align="center">
          Refine this code with Nova →
        </AppText>
      </Pressable>
    </ScreenFooter>
  );

  return (
    <Screen scroll footer={footer}>
      <Header
        title="Your code is ready"
        onBack={() => navigation.goBack()}
        rightIcon="share-social-outline"
        onRightPress={handleDownload}
      />
      <ResultBadges language={language} framework={framework} seconds="2.4" />
      <CodeBlock fileName={fileName} code={sampleCode} />
      {explain ? <HowItWorks text={sampleExplanation} /> : null}
    </Screen>
  );
}
