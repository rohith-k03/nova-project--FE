import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function FaqItem({ item, expanded, onToggle, last }) {
  return (
    <View style={!last && styles.divider}>
      <Pressable onPress={onToggle} style={styles.row}>
        <AppText variant="bodyStrong" style={styles.question}>
          {item.question}
        </AppText>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={colors.textMuted}
        />
      </Pressable>
      {expanded ? (
        <AppText variant="caption" color={colors.textSecondary} style={styles.answer}>
          {item.answer}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderSoft,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  question: {
    flex: 1,
    marginRight: spacing.md,
  },
  answer: {
    lineHeight: 19,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
