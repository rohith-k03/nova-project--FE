import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function CollectionTitle({ title, count }) {
  return (
    <View style={styles.row}>
      <AppText variant="h3">{title}</AppText>
      <AppText variant="caption" color={colors.textMuted}>
        {count}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
});
