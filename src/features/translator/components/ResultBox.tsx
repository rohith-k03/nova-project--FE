import React, { useEffect, useRef, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AppText, Card } from '../../../components/common';
import { shareText } from '../../../utils/share';
import { colors, sizes, spacing } from '../../../theme';

export default function ResultBox({ label, text, tone, saved, onToggleSave }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(text);
    setCopied(true);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Card highlight style={styles.card}>
      <View style={styles.top}>
        <AppText variant="overline" color={colors.primaryText}>
          {label}
        </AppText>
        <Ionicons name="sparkles-outline" size={14} color={colors.primaryText} />
      </View>

      <AppText variant="h2" style={styles.text}>
        {text}
      </AppText>

      {tone ? (
        <AppText variant="caption" color={colors.textMuted}>
          {tone}
        </AppText>
      ) : null}

      <View style={styles.actions}>
        <Pressable onPress={handleCopy} hitSlop={8} style={styles.action}>
          <Ionicons
            name={copied ? 'checkmark' : 'copy-outline'}
            size={sizes.iconMd}
            color={copied ? colors.success : colors.textSecondary}
          />
        </Pressable>
        <Pressable onPress={onToggleSave} hitSlop={8} style={styles.action}>
          <Ionicons
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={sizes.iconMd}
            color={saved ? colors.primaryText : colors.textSecondary}
          />
        </Pressable>
        <Pressable onPress={() => shareText(text)} hitSlop={8} style={styles.action}>
          <Ionicons name="share-social-outline" size={sizes.iconMd} color={colors.textSecondary} />
        </Pressable>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.lg,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
    fontSize: 22,
    lineHeight: 30,
  },
  actions: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  action: {
    marginRight: spacing.xl,
  },
});
