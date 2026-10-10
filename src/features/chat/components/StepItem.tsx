import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function StepItem({ index, title, duration, detail }) {
  return (
    <View style={styles.row}>
      <AppText variant="caption" color={colors.primaryText} style={styles.index}>
        {index}
      </AppText>
      <View style={styles.texts}>
        <AppText variant="bodyStrong">{`${title} · ${duration}`}</AppText>
        <AppText variant="caption" color={colors.textMuted}>
          {detail}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  index: {
    width: 28,
    paddingTop: 2,
  },
  texts: {
    flex: 1,
  },
});
