import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function EmptyTools() {
  return (
    <View style={styles.wrap}>
      <Ionicons name="search-outline" size={36} color={colors.textDisabled} />
      <AppText variant="bodyStrong" style={styles.title}>
        No tools found
      </AppText>
      <AppText variant="caption" color={colors.textMuted} align="center">
        Try a different word or pick another filter.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingTop: spacing.huge,
  },
  title: {
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
});
