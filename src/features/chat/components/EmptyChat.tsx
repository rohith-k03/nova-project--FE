import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Orb } from '../../../components/common';
import SuggestionChips from './SuggestionChips';
import { starterPrompts } from './chatData';
import { colors, spacing } from '../../../theme';

export default function EmptyChat({ onPick }) {
  return (
    <View style={styles.wrap}>
      <Orb size={96} />
      <AppText variant="h2" align="center" style={styles.title}>
        What can I help with?
      </AppText>
      <AppText variant="caption" color={colors.textSecondary} align="center" style={styles.subtitle}>
        Ask anything, or start with one of these.
      </AppText>
      <SuggestionChips items={starterPrompts} onPick={onPick} style={styles.chips} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  title: {
    marginTop: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
  chips: {
    justifyContent: 'center',
  },
});
