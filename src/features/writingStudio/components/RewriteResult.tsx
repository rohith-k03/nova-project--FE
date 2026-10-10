import React, { useEffect, useRef, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AppText, Card } from '../../../components/common';
import { shareText } from '../../../utils/share';
import { colors, sizes, spacing } from '../../../theme';

export default function RewriteResult({ text, goalLabel }) {
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
      <AppText variant="overline" color={colors.primaryText}>
        {`${goalLabel.toUpperCase()} VERSION`}
      </AppText>
      <AppText variant="body" style={styles.text}>
        {text}
      </AppText>
      <View style={styles.actions}>
        <Pressable onPress={handleCopy} hitSlop={8} style={styles.action}>
          <Ionicons
            name={copied ? 'checkmark' : 'copy-outline'}
            size={sizes.iconMd}
            color={copied ? colors.success : colors.textSecondary}
          />
        </Pressable>
        <Pressable onPress={() => shareText(text)} hitSlop={8}>
          <Ionicons name="share-social-outline" size={sizes.iconMd} color={colors.textSecondary} />
        </Pressable>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.xl,
  },
  text: {
    marginTop: spacing.sm,
  },
  actions: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  action: {
    marginRight: spacing.xl,
  },
});
