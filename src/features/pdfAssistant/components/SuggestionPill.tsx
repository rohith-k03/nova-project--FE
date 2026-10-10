import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function SuggestionPill({ label, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.pill}>
      <Ionicons name="chatbubble-outline" size={14} color={colors.textMuted} />
      <AppText variant="caption" color={colors.textSecondary} style={styles.text}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginTop: spacing.lg,
  },
  text: {
    marginLeft: spacing.sm,
  },
});
