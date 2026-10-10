import React from 'react';
import { View, Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients, radius, spacing } from '../../theme';

type CardProps = {
  children?: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  highlight?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function Card({ children, onPress, onLongPress, highlight = false, style }: CardProps) {
  const interactive = Boolean(onPress || onLongPress);
  const Wrapper = interactive ? Pressable : View;
  const handlers = interactive ? { onPress, onLongPress } : {};

  return (
    <Wrapper {...handlers} style={[styles.card, highlight && styles.highlight, style]}>
      {highlight ? (
        <LinearGradient
          colors={gradients.card}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
      ) : null}
      {children}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    overflow: 'hidden',
  },
  highlight: {
    borderColor: colors.primaryBorder,
  },
});
