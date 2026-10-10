import React from 'react';
import { View, Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, radius, sizes, spacing } from '../../theme';

type MenuRowProps = {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  subtitle?: string;
  value?: string;
  right?: React.ReactNode;
  onPress?: () => void;
  showChevron?: boolean;
  danger?: boolean;
  last?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function MenuRow({
  icon,
  label,
  subtitle,
  value,
  right,
  onPress,
  showChevron = true,
  danger = false,
  last = false,
}: MenuRowProps) {
  const tint = danger ? colors.danger : colors.textSecondary;

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [styles.row, !last && styles.divider, pressed && styles.pressed]}
    >
      {icon ? (
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={sizes.iconMd} color={tint} />
        </View>
      ) : null}

      <View style={styles.texts}>
        <AppText variant="body" color={danger ? colors.danger : colors.textPrimary}>
          {label}
        </AppText>
        {subtitle ? (
          <AppText variant="caption" color={colors.textMuted}>
            {subtitle}
          </AppText>
        ) : null}
      </View>

      {value ? (
        <AppText variant="caption" color={colors.textMuted} style={styles.value}>
          {value}
        </AppText>
      ) : null}
      {right}
      {onPress && showChevron && !right ? (
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.lg,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderSoft,
  },
  pressed: {
    backgroundColor: colors.surfaceAlt,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  texts: {
    flex: 1,
  },
  value: {
    marginRight: spacing.sm,
  },
});
