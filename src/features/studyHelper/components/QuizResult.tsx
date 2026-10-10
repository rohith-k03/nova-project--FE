import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

const verdict = (score, total) => {
  const ratio = score / total;
  if (ratio === 1) return 'Perfect score. You really know this one.';
  if (ratio >= 0.6) return 'Solid work. A quick review will lock it in.';
  return 'A good start. Try the Explain tab, then take the quiz again.';
};

export default function QuizResult({ score, total }) {
  return (
    <Card highlight style={styles.card}>
      <Ionicons name="trophy-outline" size={36} color={colors.primaryText} />
      <AppText variant="h1" style={styles.score}>
        {`${score} / ${total}`}
      </AppText>
      <AppText variant="bodyStrong">Quiz complete</AppText>
      <AppText variant="caption" color={colors.textSecondary} align="center" style={styles.text}>
        {verdict(score, total)}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: spacing.lg,
    paddingVertical: spacing.xxxl,
  },
  score: {
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  text: {
    marginTop: spacing.sm,
  },
});
