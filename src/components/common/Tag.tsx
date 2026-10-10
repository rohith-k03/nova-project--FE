import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, radius, spacing } from '../../theme';

type TagProps = {
  label: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  tone?: 'primary' | 'neutral';
  style?: StyleProp<ViewStyle>;
};

export default function Tag({ label, icon, tone = 'primary', style }: TagProps) {
  const primary = tone === 'primary';
  const tint = primary ? colors.primaryText : colors.textSecondary;

  return (
    <View style={[styles.tag, primary ? styles.primary : styles.neutral, style]}>
      {icon ? <Ionicons name={icon} size={12} color={tint} style={styles.icon} /> : null}
      <AppText variant="caption" color={tint}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
  },
  primary: {
    borderColor: colors.primaryBorder,
    backgroundColor: colors.primarySoft,
  },
  neutral: {
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  icon: {
    marginRight: spacing.xs + 2,
  },
});
