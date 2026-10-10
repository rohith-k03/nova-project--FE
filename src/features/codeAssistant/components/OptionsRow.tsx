import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Select } from '../../../components/common';
import { languages, frameworks } from './codeData';
import { spacing } from '../../../theme';

export default function OptionsRow({ language, framework, onLanguageChange, onFrameworkChange }) {
  return (
    <View style={styles.row}>
      <Select
        label="Language"
        value={language}
        options={languages}
        onChange={onLanguageChange}
        style={[styles.item, styles.gap]}
      />
      <Select
        label="Framework"
        value={framework}
        options={frameworks}
        onChange={onFrameworkChange}
        style={styles.item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
  gap: {
    marginRight: spacing.md,
  },
});
