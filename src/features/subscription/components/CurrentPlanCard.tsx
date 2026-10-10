import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function CurrentPlanCard({ name, detail, price }) {
  return (
    <Card style={styles.card}>
      <View style={styles.texts}>
        <AppText variant="bodyStrong">{`${name} · Your current plan`}</AppText>
        <AppText variant="caption" color={colors.textMuted}>
          {detail}
        </AppText>
      </View>
      <AppText variant="h3">{price}</AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  texts: {
    flex: 1,
    marginRight: spacing.md,
  },
});
