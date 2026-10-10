import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';
import AppText from './AppText';
import { colors, sizes, spacing } from '../../theme';

type ScreenFooterProps = {
  children?: ReactNode;
  note?: string;
  style?: StyleProp<ViewStyle>;
};

export default function ScreenFooter({ children, note, style }: ScreenFooterProps) {
  return (
    <View style={[styles.footer, style]}>
      {children}
      {note ? (
        <AppText variant="caption" color={colors.textMuted} align="center" style={styles.note}>
          {note}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: sizes.screenPadding,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  note: {
    marginTop: spacing.md,
    fontSize: 11,
  },
});
