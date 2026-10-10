import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function SectionLabel({ title, count }) {
  const prominent = title === 'Today';

  return (
    <View style={styles.row}>
      {prominent ? (
        <AppText variant="h3">{title}</AppText>
      ) : (
        <AppText variant="overline" color={colors.textMuted}>
          {title}
        </AppText>
      )}
      {prominent ? (
        <AppText variant="caption" color={colors.textMuted}>
          {`${count} ${count === 1 ? 'conversation' : 'conversations'}`}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
});
