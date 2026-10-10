import React, { useState } from 'react';
import { View, Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import OptionSheet, { normalizeOptions } from './OptionSheet';
import { colors, radius, sizes, spacing } from '../../theme';

type SelectOption = string | { id: string; label: string };
type SelectProps = {
  label?: string;
  title?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  variant?: 'field' | 'pill';
  style?: StyleProp<ViewStyle>;
};

export default function Select({
  label,
  title,
  icon,
  value,
  options,
  onChange,
  variant = 'field',
  style,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = normalizeOptions(options).find((option) => option.id === value);
  const isPill = variant === 'pill';

  return (
    <View style={[!isPill && styles.fieldWrap, style]}>
      {label && !isPill ? (
        <AppText variant="label" color={colors.textSecondary} style={styles.label}>
          {label}
        </AppText>
      ) : null}

      <Pressable onPress={() => setOpen(true)} style={isPill ? styles.pill : styles.field}>
        {icon && !isPill ? (
          <Ionicons name={icon} size={sizes.iconMd} color={colors.textMuted} style={styles.icon} />
        ) : null}
        <AppText
          variant={isPill ? 'label' : 'body'}
          numberOfLines={1}
          style={styles.value}
        >
          {selected?.label ?? ''}
        </AppText>
        <Ionicons name="chevron-down" size={sizes.iconSm} color={colors.textMuted} />
      </Pressable>

      <OptionSheet
        visible={open}
        title={title ?? label}
        options={options}
        selected={value}
        onSelect={onChange}
        onClose={() => setOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldWrap: {
    marginBottom: spacing.lg,
  },
  label: {
    marginBottom: spacing.sm,
  },
  field: {
    height: sizes.inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md + 2,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    marginRight: spacing.md,
  },
  value: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
