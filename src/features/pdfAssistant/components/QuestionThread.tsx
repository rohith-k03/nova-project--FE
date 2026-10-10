import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function QuestionThread({ entries }) {
  if (entries.length === 0) {
    return (
      <Card style={styles.empty}>
        <AppText variant="bodyStrong">Ask anything about this document</AppText>
        <AppText variant="caption" color={colors.textMuted} style={styles.hint}>
          Nova answers from the pages you uploaded and shows where each answer comes from.
        </AppText>
      </Card>
    );
  }

  return (
    <View style={styles.thread}>
      {entries.map((entry) => (
        <View key={entry.id}>
          <View style={styles.askedRow}>
            <View style={styles.asked}>
              <AppText variant="caption" color={colors.white}>
                {entry.question}
              </AppText>
            </View>
          </View>
          <Card style={styles.answer}>
            <AppText variant="body" color={colors.textSecondary}>
              {entry.answer}
            </AppText>
            {entry.page ? (
              <AppText variant="caption" color={colors.primaryText} style={styles.source}>
                {`Source: Page ${entry.page}`}
              </AppText>
            ) : null}
          </Card>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    marginTop: spacing.lg,
  },
  hint: {
    marginTop: spacing.xs,
  },
  thread: {
    marginTop: spacing.lg,
  },
  askedRow: {
    alignItems: 'flex-end',
    marginBottom: spacing.sm,
  },
  asked: {
    maxWidth: '85%',
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    borderBottomRightRadius: 4,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
  },
  answer: {
    marginBottom: spacing.lg,
  },
  source: {
    marginTop: spacing.sm,
  },
});
