import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function ExplainPanel({ topic }) {
  return (
    <Card style={styles.card}>
      <AppText variant="h3">{`${topic.label} in plain words`}</AppText>
      <AppText variant="body" color={colors.textSecondary} style={styles.text}>
        {topic.explanation}
      </AppText>
      <AppText variant="overline" color={colors.primaryText} style={styles.heading}>
        KEY IDEAS
      </AppText>
      {topic.ideas.map((idea) => (
        <View key={idea} style={styles.row}>
          <View style={styles.dot} />
          <AppText variant="body" style={styles.idea}>
            {idea}
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
  },
  heading: {
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    marginTop: spacing.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 8,
    marginRight: spacing.md,
  },
  idea: {
    flex: 1,
  },
});
