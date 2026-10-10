import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, fontFamily, fontSize, gradients, radius, sizes, spacing } from '../../../theme';

export default function Composer({ onSend, disabled = false }) {
  const [value, setValue] = useState('');
  const canSend = value.trim().length > 0 && !disabled;

  const handleSend = () => {
    if (!canSend) return;
    onSend(value);
    setValue('');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.field}>
        <Pressable hitSlop={8}>
          <Ionicons name="add" size={sizes.iconLg} color={colors.textMuted} />
        </Pressable>

        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Message Nova..."
          placeholderTextColor={colors.textMuted}
          selectionColor={colors.primary}
          style={styles.input}
          multiline
          maxLength={2000}
        />

        <Pressable onPress={handleSend} disabled={!canSend} style={!canSend && styles.sendDisabled}>
          <LinearGradient
            colors={gradients.primary}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.send}
          >
            <Ionicons name="arrow-up" size={sizes.iconMd} color={colors.white} />
          </LinearGradient>
        </Pressable>
      </View>

      <AppText variant="caption" color={colors.textMuted} align="center" style={styles.note}>
        Nova can make mistakes. Check important information.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: sizes.screenPadding,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  input: {
    flex: 1,
    maxHeight: 110,
    marginHorizontal: spacing.sm,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },
  send: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendDisabled: {
    opacity: 0.45,
  },
  note: {
    marginTop: spacing.sm,
    fontSize: 10,
  },
});
