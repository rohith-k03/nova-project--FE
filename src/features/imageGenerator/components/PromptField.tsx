import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, fontFamily, fontSize, radius, spacing } from '../../../theme';

export default function PromptField({ value, onChangeText, maxLength, onEnhance, error }) {
  return (
    <View style={styles.wrapper}>
      <AppText variant="label" color={colors.textSecondary} style={styles.label}>
        Your prompt
      </AppText>

      <View style={[styles.box, error && styles.errored]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          multiline
          placeholder="Describe the image you want to see"
          placeholderTextColor={colors.textMuted}
          selectionColor={colors.primary}
          style={styles.input}
        />
      </View>

      <View style={styles.meta}>
        <AppText variant="caption" color={error ? colors.danger : colors.textMuted}>
          {error || `${value.length} / ${maxLength.toLocaleString('en-US')} characters`}
        </AppText>
        <Pressable onPress={onEnhance} hitSlop={8} style={styles.enhance}>
          <Ionicons name="sparkles-outline" size={13} color={colors.primaryText} />
          <AppText variant="caption" color={colors.primaryText} style={styles.enhanceText}>
            Enhance prompt
          </AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.xl,
  },
  label: {
    marginBottom: spacing.sm,
  },
  box: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  errored: {
    borderColor: colors.danger,
  },
  input: {
    minHeight: 96,
    textAlignVertical: 'top',
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * 1.5,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  enhance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  enhanceText: {
    marginLeft: spacing.xs + 1,
  },
});
