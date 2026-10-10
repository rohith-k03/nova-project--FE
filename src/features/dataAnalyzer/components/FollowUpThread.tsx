import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function FollowUpThread({ entries }) {
  return (
    <View>
      {entries.map((entry) => (
        <View key={entry.id} style={styles.entry}>
          <View style={styles.askedRow}>
            <View style={styles.asked}>
              <AppText variant="caption" color={colors.white}>
                {entry.question}
              </AppText>
            </View>
          </View>
          <Card>
            <AppText variant="caption" color={colors.textSecondary}>
              {entry.answer}
            </AppText>
          </Card>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  entry: {
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
});
