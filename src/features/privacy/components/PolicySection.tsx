import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function PolicySection({ title, body }) {
  return (
    <View style={styles.wrap}>
      <AppText variant="bodyStrong">{title}</AppText>
      <AppText variant="caption" color={colors.textSecondary} style={styles.body}>
        {body}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.xl,
  },
  body: {
    marginTop: spacing.xs,
    lineHeight: 19,
  },
});
