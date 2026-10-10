import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export const aboutLimit = 200;

export default function AboutNotes({ length }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <AppText variant="caption" color={colors.textMuted} style={styles.hint}>
          A little context helps Nova understand you better.
        </AppText>
        <AppText variant="caption" color={colors.textMuted}>
          {`${length} / ${aboutLimit}`}
        </AppText>
      </View>
      <AppText variant="caption" color={colors.textMuted} style={styles.privacy}>
        Your profile is private. This information is never visible to other users.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: -spacing.sm,
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hint: {
    flex: 1,
    marginRight: spacing.md,
  },
  privacy: {
    marginTop: spacing.lg,
  },
});
