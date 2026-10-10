import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, type StyleProp, type ViewStyle, type TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, fontFamily, fontSize, radius, sizes, spacing } from '../../theme';

type InputProps = Omit<TextInputProps, 'style' | 'secureTextEntry' | 'multiline'> & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  secure?: boolean;
  rightIcon?: React.ComponentProps<typeof Ionicons>['name'];
  rightColor?: string;
  error?: string;
  multiline?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function Input({
  label,
  icon,
  secure = false,
  rightIcon,
  rightColor,
  error,
  multiline = false,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(secure);

  return (
    <View style={[styles.wrapper, style]}>
      {label ? (
        <AppText variant="label" color={colors.textSecondary} style={styles.label}>
          {label}
        </AppText>
      ) : null}
      <View
        style={[
          styles.field,
          multiline && styles.multiline,
          focused && styles.focused,
          error && styles.errored,
        ]}
      >
        {icon ? (
          <Ionicons name={icon} size={sizes.iconMd} color={colors.textMuted} style={styles.icon} />
        ) : null}
        <TextInput
          style={[styles.input, multiline && styles.inputMultiline]}
          placeholderTextColor={colors.textMuted}
          selectionColor={colors.primary}
          secureTextEntry={hidden}
          multiline={multiline}
          autoCapitalize="none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
        {secure ? (
          <Pressable onPress={() => setHidden((prev) => !prev)} hitSlop={10}>
            <Ionicons
              name={hidden ? 'eye-off-outline' : 'eye-outline'}
              size={sizes.iconMd}
              color={colors.textMuted}
            />
          </Pressable>
        ) : null}
        {!secure && rightIcon ? (
          <Ionicons name={rightIcon} size={sizes.iconMd} color={rightColor ?? colors.textMuted} />
        ) : null}
      </View>
      {error ? (
        <AppText variant="caption" color={colors.danger} style={styles.error}>
          {error}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.lg,
  },
  label: {
    marginBottom: spacing.sm,
  },
  field: {
    minHeight: sizes.inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
  },
  multiline: {
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
  },
  focused: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceAlt,
  },
  errored: {
    borderColor: colors.danger,
  },
  icon: {
    marginRight: spacing.md,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    paddingVertical: spacing.md,
  },
  inputMultiline: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  error: {
    marginTop: spacing.xs,
  },
});
