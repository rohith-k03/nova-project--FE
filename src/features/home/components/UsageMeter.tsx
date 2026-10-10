import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function UsageMeter({ remaining, limit, onUpgrade }) {
  const usedPercent = Math.min(100, Math.max(0, ((limit - remaining) / limit) * 100));

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <AppText variant="caption" color={colors.textMuted}>
          {`Today's messages · ${remaining} of ${limit} left`}
        </AppText>
        {onUpgrade ? (
          <Pressable onPress={onUpgrade} hitSlop={10}>
            <AppText variant="caption" color={colors.primaryText}>
              Upgrade
            </AppText>
          </Pressable>
        ) : (
          <AppText variant="caption" color={colors.primaryText}>
            Pro
          </AppText>
        )}
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${usedPercent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: spacing.xl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  track: {
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
  },
});
