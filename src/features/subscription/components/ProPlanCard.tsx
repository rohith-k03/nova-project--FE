import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function ProPlanCard({ price, unit, features }) {
  return (
    <Card highlight style={styles.card}>
      <View style={styles.top}>
        <AppText variant="h3">Nova Pro</AppText>
        <AppText variant="overline" color={colors.primaryText}>
          FOR BIGGER IDEAS
        </AppText>
      </View>

      <View style={styles.priceRow}>
        <AppText variant="display">{price}</AppText>
        <AppText variant="caption" color={colors.textMuted} style={styles.unit}>
          {unit}
        </AppText>
      </View>

      <View style={styles.divider} />

      {features.map((feature) => (
        <View key={feature} style={styles.feature}>
          <Ionicons name="checkmark-circle-outline" size={18} color={colors.success} />
          <AppText variant="caption" color={colors.textSecondary} style={styles.featureText}>
            {feature}
          </AppText>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.lg,
    padding: spacing.xl,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: spacing.md,
  },
  unit: {
    marginLeft: spacing.sm,
    marginBottom: spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  featureText: {
    marginLeft: spacing.md,
    flex: 1,
  },
});
