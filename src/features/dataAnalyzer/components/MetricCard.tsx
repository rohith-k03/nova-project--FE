import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

type MetricCardProps = {
  label: string;
  value: string;
  delta: string;
  style?: StyleProp<ViewStyle>;
};

export default function MetricCard({ label, value, delta, style }: MetricCardProps) {
  const positive = !delta.startsWith('-');

  return (
    <View style={[styles.card, style]}>
      <AppText variant="caption" color={colors.textMuted}>
        {label}
      </AppText>
      <AppText variant="h2" style={styles.value}>
        {value}
      </AppText>
      <AppText variant="caption" color={positive ? colors.success : colors.danger}>
        {delta}
      </AppText>
    </View>
  );
}

export function MetricsRow({ children }) {
  return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  value: {
    marginVertical: spacing.xs,
  },
});
