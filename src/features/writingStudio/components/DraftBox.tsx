import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { maxLength, wordCount } from './writingData';
import { colors, fontFamily, fontSize, radius, spacing } from '../../../theme';

export default function DraftBox({ value, onChangeText, onClear, error }) {
  return (
    <View>
      <AppText variant="label" color={colors.textSecondary} style={styles.label}>
        Your draft
      </AppText>
      <View style={[styles.box, error && styles.errored]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          multiline
          placeholder="Paste or write what you want to improve"
          placeholderTextColor={colors.textMuted}
          selectionColor={colors.primary}
          style={styles.input}
        />
      </View>
      <View style={styles.meta}>
        <AppText variant="caption" color={error ? colors.danger : colors.textMuted}>
          {error || `${wordCount(value)} words`}
        </AppText>
        {value.length > 0 ? (
          <Pressable onPress={onClear} hitSlop={8} style={styles.clear}>
            <Ionicons name="close" size={14} color={colors.textMuted} />
            <AppText variant="caption" color={colors.textMuted}>
              Clear
            </AppText>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    minHeight: 130,
    textAlignVertical: 'top',
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * 1.5,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  clear: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
