import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { maxLength } from './translatorData';
import { colors, fontFamily, fontSize, radius, spacing } from '../../../theme';

export default function SourceBox({ label, value, onChangeText, onClear }) {
  return (
    <View style={styles.box}>
      <View style={styles.top}>
        <AppText variant="overline" color={colors.textMuted}>
          {label}
        </AppText>
        {value.length > 0 ? (
          <Pressable onPress={onClear} hitSlop={10}>
            <Ionicons name="close" size={18} color={colors.textMuted} />
          </Pressable>
        ) : null}
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        multiline
        placeholder="Type or paste text to translate"
        placeholderTextColor={colors.textMuted}
        selectionColor={colors.primary}
        style={styles.input}
      />

      <View style={styles.bottom}>
        <Ionicons name="mic-outline" size={18} color={colors.textMuted} />
        <AppText variant="caption" color={colors.textMuted}>
          {`${value.length} / ${maxLength.toLocaleString('en-US')}`}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.lg,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    minHeight: 64,
    marginTop: spacing.sm,
    textAlignVertical: 'top',
    color: colors.textPrimary,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * 1.4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
});
