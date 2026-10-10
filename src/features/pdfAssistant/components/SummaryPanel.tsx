import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function SummaryPanel({ document, summary }) {
  if (!document.sample) {
    return (
      <Card style={styles.card}>
        <AppText variant="h3">Ready when you are</AppText>
        <AppText variant="body" color={colors.textSecondary} style={styles.text}>
          {`Nova has read ${document.name}. Ask a question below to get answers with sources.`}
        </AppText>
      </Card>
    );
  }

  return (
    <Card style={styles.card}>
      <AppText variant="h3">{summary.title}</AppText>
      <AppText variant="body" color={colors.textSecondary} style={styles.text}>
        {summary.text}
      </AppText>
      {summary.metrics.map((metric) => (
        <View key={metric.id} style={styles.metric}>
          <AppText variant="bodyStrong">{metric.headline}</AppText>
          <AppText variant="caption" color={colors.textMuted}>
            {metric.detail}
          </AppText>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.lg,
  },
  text: {
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  metric: {
    marginTop: spacing.md,
  },
});
