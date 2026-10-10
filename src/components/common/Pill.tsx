import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, radius, spacing } from '../../theme';

type PillProps = {
  label: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  tone?: 'primary' | 'success';
  style?: StyleProp<ViewStyle>;
};

export default function Pill({ label, icon, tone = 'primary', style }: PillProps) {
  const isSuccess = tone === 'success';
  const tint = isSuccess ? colors.success : colors.primaryText;

  return (
    <View style={[styles.pill, isSuccess && styles.success, style]}>
      {icon ? <Ionicons name={icon} size={12} color={tint} /> : null}
      <AppText
        variant="caption"
        color={isSuccess ? colors.success : colors.textSecondary}
        style={icon ? styles.text : null}
      >
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.primarySoft,
  },
  success: {
    borderColor: 'rgba(52, 211, 153, 0.4)',
    backgroundColor: colors.successSoft,
  },
  text: {
    marginLeft: spacing.xs + 2,
  },
});
