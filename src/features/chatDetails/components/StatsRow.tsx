import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function StatsRow({ stats }) {
  return (
    <View style={styles.row}>
      {stats.map((stat, index) => (
        <View key={stat.label} style={[styles.tile, index < stats.length - 1 && styles.gap]}>
          <AppText variant="h2">{stat.value}</AppText>
          <AppText variant="caption" color={colors.textMuted}>
            {stat.label}
          </AppText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  tile: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  gap: {
    marginRight: spacing.md,
  },
});
