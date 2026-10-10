import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, radius, sizes, spacing } from '../../theme';

type HeaderProps = {
  title: string;
  onBack?: () => void;
  rightIcon?: React.ComponentProps<typeof Ionicons>['name'];
  onRightPress?: () => void;
};

export default function Header({ title, onBack, rightIcon, onRightPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable onPress={onBack} style={styles.iconButton} hitSlop={8}>
            <Ionicons name="chevron-back" size={sizes.iconMd} color={colors.textPrimary} />
          </Pressable>
        ) : null}
      </View>

      <AppText variant="bodyStrong" numberOfLines={1} style={styles.title}>
        {title}
      </AppText>

      <View style={[styles.side, styles.sideRight]}>
        {rightIcon ? (
          <Pressable onPress={onRightPress} hitSlop={8}>
            <Ionicons name={rightIcon} size={sizes.iconLg} color={colors.textSecondary} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: sizes.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  side: {
    width: 44,
  },
  sideRight: {
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
});
