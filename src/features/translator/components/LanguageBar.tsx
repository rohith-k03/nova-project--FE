import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Select } from '../../../components/common';
import { languageOptions } from './translatorData';
import { colors, spacing } from '../../../theme';

export default function LanguageBar({ from, to, onFromChange, onToChange, onSwap }) {
  return (
    <View style={styles.row}>
      <Select
        variant="pill"
        title="Translate from"
        value={from}
        options={languageOptions}
        onChange={onFromChange}
        style={styles.select}
      />
      <Pressable onPress={onSwap} hitSlop={10} style={styles.swap}>
        <Ionicons name="swap-horizontal" size={20} color={colors.textSecondary} />
      </Pressable>
      <Select
        variant="pill"
        title="Translate to"
        value={to}
        options={languageOptions}
        onChange={onToChange}
        style={styles.select}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  select: {
    flex: 1,
  },
  swap: {
    paddingHorizontal: spacing.md,
  },
});
