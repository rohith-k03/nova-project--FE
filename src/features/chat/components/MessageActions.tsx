import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { colors, sizes, spacing } from '../../../theme';

export default function MessageActions({ text }) {
  const [reaction, setReaction] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const toggleReaction = (value) => setReaction((prev) => (prev === value ? null : value));

  return (
    <View style={styles.row}>
      <Pressable onPress={handleCopy} hitSlop={8} style={styles.action}>
        <Ionicons
          name={copied ? 'checkmark' : 'copy-outline'}
          size={sizes.iconSm}
          color={copied ? colors.success : colors.textMuted}
        />
      </Pressable>
      <Pressable onPress={() => toggleReaction('up')} hitSlop={8} style={styles.action}>
        <Ionicons
          name={reaction === 'up' ? 'thumbs-up' : 'thumbs-up-outline'}
          size={sizes.iconSm}
          color={reaction === 'up' ? colors.primaryText : colors.textMuted}
        />
      </Pressable>
      <Pressable onPress={() => toggleReaction('down')} hitSlop={8} style={styles.action}>
        <Ionicons
          name={reaction === 'down' ? 'thumbs-down' : 'thumbs-down-outline'}
          size={sizes.iconSm}
          color={reaction === 'down' ? colors.primaryText : colors.textMuted}
        />
      </Pressable>
      <Pressable hitSlop={8} style={styles.action}>
        <Ionicons name="volume-high-outline" size={sizes.iconSm} color={colors.textMuted} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  action: {
    marginRight: spacing.xl,
  },
});
