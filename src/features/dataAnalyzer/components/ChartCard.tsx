import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import BarChart from './BarChart';
import { colors, spacing } from '../../../theme';

export default function ChartCard({ title, caption, data, step, formatTick, formatValue }) {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <AppText variant="bodyStrong">{title}</AppText>
        <AppText variant="caption" color={colors.textMuted}>
          {caption}
        </AppText>
      </View>
      <BarChart data={data} step={step} formatTick={formatTick} formatValue={formatValue} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
