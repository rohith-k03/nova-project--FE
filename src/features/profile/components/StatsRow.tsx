import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function StatsRow({ stats }) {
  return (
    <View style={styles.row}>
      {stats.map((stat, index) => (
        <View key={stat.label} style={[styles.card, index > 0 && styles.gap]}>
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
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
  },
  gap: {
    marginLeft: spacing.md,
  },
});
