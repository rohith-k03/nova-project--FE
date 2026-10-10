import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';
import AppText from './AppText';
import { colors, radius, spacing } from '../../theme';

type InfoBoxProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function InfoBox({ children, style }: InfoBoxProps) {
  return (
    <View style={[styles.box, style]}>
      <AppText variant="caption" color={colors.textMuted}>
        {children}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
});
