import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function TakeawayCard({ text }) {
  return (
    <Card highlight style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="sparkles-outline" size={14} color={colors.primaryText} />
        <AppText variant="bodyStrong" style={styles.title}>
          Nova's takeaway
        </AppText>
      </View>
      <AppText variant="caption" color={colors.textSecondary} style={styles.text}>
        {text}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: spacing.sm,
  },
  text: {
    marginTop: spacing.sm,
  },
});
