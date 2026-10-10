import React, { useEffect, useRef, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AppText, Card } from '../../../components/common';
import { colors, sizes, spacing } from '../../../theme';

export default function PromptCard({ title, prompt }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(prompt);
    setCopied(true);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <AppText variant="overline" color={colors.primaryText}>
          {title}
        </AppText>
        <Pressable onPress={handleCopy} hitSlop={10}>
          <Ionicons
            name={copied ? 'checkmark' : 'copy-outline'}
            size={sizes.iconMd}
            color={copied ? colors.success : colors.textMuted}
          />
        </Pressable>
      </View>
      <AppText variant="caption" color={colors.textSecondary} style={styles.prompt}>
        {prompt}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prompt: {
    marginTop: spacing.sm,
    lineHeight: 18,
  },
});
