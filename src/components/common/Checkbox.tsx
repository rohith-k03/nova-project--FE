import React from 'react';
import { Pressable, View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, radius, spacing } from '../../theme';

type CheckboxProps = {
  checked: boolean;
  onToggle: () => void;
  label?: string;
  style?: StyleProp<ViewStyle>;
};

export default function Checkbox({ checked, onToggle, label, style }: CheckboxProps) {
  return (
    <Pressable onPress={onToggle} style={[styles.row, style]} hitSlop={6}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked ? <Ionicons name="checkmark" size={13} color={colors.white} /> : null}
      </View>
      {label ? (
        <AppText variant="caption" color={colors.textSecondary} style={styles.label}>
          {label}
        </AppText>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 18,
    height: 18,
    borderRadius: radius.sm / 2,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    marginLeft: spacing.sm,
    flexShrink: 1,
  },
});
