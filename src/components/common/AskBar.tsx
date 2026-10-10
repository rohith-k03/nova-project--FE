import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontFamily, fontSize, gradients, radius, sizes, spacing } from '../../theme';

type AskBarProps = {
  placeholder: string;
  onSubmit: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

export default function AskBar({ placeholder, onSubmit, style }: AskBarProps) {
  const [value, setValue] = useState('');
  const canSend = value.trim().length > 0;

  const handleSend = () => {
    if (!canSend) return;
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <View style={[styles.field, style]}>
      <Ionicons name="add" size={sizes.iconLg} color={colors.textMuted} />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        selectionColor={colors.primary}
        style={styles.input}
        returnKeyType="send"
        onSubmitEditing={handleSend}
      />
      <Pressable onPress={handleSend} disabled={!canSend} style={!canSend && styles.disabled}>
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
  );
}

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: spacing.sm,
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
  disabled: {
    opacity: 0.45,
  },
});
