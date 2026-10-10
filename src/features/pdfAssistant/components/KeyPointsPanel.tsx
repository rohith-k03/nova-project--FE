import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function KeyPointsPanel({ document, points }) {
  if (!document.sample) {
    return (
      <Card style={styles.card}>
        <AppText variant="bodyStrong">No key points yet</AppText>
        <AppText variant="caption" color={colors.textMuted} style={styles.hint}>
          Ask a question and Nova will pull out what matters.
        </AppText>
      </Card>
    );
  }

  return (
    <Card style={styles.card}>
      {points.map((point, index) => (
        <View key={point.id} style={[styles.row, index > 0 && styles.gap]}>
          <View style={styles.dot} />
          <View style={styles.texts}>
            <AppText variant="body">{point.text}</AppText>
            <AppText variant="caption" color={colors.textMuted}>
              {`Page ${point.page}`}
            </AppText>
          </View>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.lg,
  },
  hint: {
    marginTop: spacing.xs,
  },
  row: {
    flexDirection: 'row',
  },
  gap: {
    marginTop: spacing.lg,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 8,
    marginRight: spacing.md,
  },
  texts: {
    flex: 1,
  },
});
