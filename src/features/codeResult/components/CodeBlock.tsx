import React, { useState } from 'react';
import { View, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AppText } from '../../../components/common';
import { tokenizeLine, syntaxColors } from './highlight';
import { colors, fontSize, radius, spacing } from '../../../theme';

export default function CodeBlock({ fileName, code }) {
  const [copied, setCopied] = useState(false);
  const lines = code.split('\n');

  const handleCopy = async () => {
    await Clipboard.setStringAsync(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <AppText variant="caption" color={colors.textSecondary}>
          {fileName}
        </AppText>
        <Pressable onPress={handleCopy} style={styles.copy} hitSlop={8}>
          <Ionicons
            name={copied ? 'checkmark' : 'copy-outline'}
            size={14}
            color={copied ? colors.success : colors.textMuted}
          />
          <AppText
            variant="caption"
            color={copied ? colors.success : colors.textMuted}
            style={styles.copyText}
          >
            {copied ? 'Copied' : 'Copy'}
          </AppText>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.body}>
          {lines.map((line, index) => (
            <Text key={index} style={styles.line}>
              {tokenizeLine(line).map((token, i) => (
                <Text key={i} style={{ color: syntaxColors[token.kind] }}>
                  {token.text}
                </Text>
              ))}
              {line.length === 0 ? ' ' : null}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#0D1527',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderSoft,
  },
  copy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyText: {
    marginLeft: spacing.xs + 2,
  },
  body: {
    padding: spacing.lg,
  },
  line: {
    fontFamily: 'Courier',
    fontSize: fontSize.sm,
    lineHeight: 19,
    color: syntaxColors.plain,
  },
});
