import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { sampleHints } from './translatorData';
import { colors, radius, spacing } from '../../../theme';

export default function PhraseHints({ onPick }) {
  return (
    <View style={styles.wrap}>
      <AppText variant="caption" color={colors.textMuted} style={styles.title}>
        Try a phrase
      </AppText>
      <View style={styles.row}>
        {sampleHints.map((hint) => (
          <Pressable key={hint} onPress={() => onPick(hint)} style={styles.chip}>
            <AppText variant="caption" color={colors.textSecondary}>
              {hint}
            </AppText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: spacing.xl,
  },
  title: {
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
});
