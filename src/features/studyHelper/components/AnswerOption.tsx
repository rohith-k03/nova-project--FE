import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function AnswerOption({ letter, label, state, onPress, disabled }) {
  const correct = state === 'correct';
  const wrong = state === 'wrong';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.row, correct && styles.correct, wrong && styles.wrong]}
    >
      <AppText variant="caption" color={colors.textMuted} style={styles.letter}>
        {letter}
      </AppText>
      <AppText variant="body" style={styles.label}>
        {label}
      </AppText>
      {correct ? <Ionicons name="checkmark-circle-outline" size={20} color={colors.success} /> : null}
      {wrong ? <Ionicons name="close-circle-outline" size={20} color={colors.danger} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
  },
  correct: {
    backgroundColor: 'rgba(52, 211, 153, 0.12)',
    borderColor: colors.success,
  },
  wrong: {
    backgroundColor: colors.dangerSoft,
    borderColor: colors.danger,
  },
  letter: {
    width: 24,
  },
  label: {
    flex: 1,
  },
});
