import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius } from '../../theme';

type ProgressBarProps = {
  progress: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

export default function ProgressBar({ progress, height = 4, style }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, progress * 100));

  return (
    <View style={[styles.track, { height }, style]}>
      <View style={[styles.fill, { width: `${percent}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
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
