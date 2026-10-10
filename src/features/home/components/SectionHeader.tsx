import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function SectionHeader({ title, actionLabel, onActionPress }) {
  return (
    <View style={styles.row}>
      <AppText variant="h3">{title}</AppText>
      {actionLabel ? (
        <Pressable onPress={onActionPress} hitSlop={10}>
          <AppText variant="caption" color={colors.primaryText}>
            {actionLabel}
          </AppText>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
  },
});
