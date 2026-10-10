import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Pill } from '../../../components/common';
import { spacing } from '../../../theme';

export default function ResultBadges({ language, framework, seconds }) {
  const stack = framework && framework !== 'None' ? `${framework} + ${language}` : language;

  return (
    <View style={styles.row}>
      <Pill label={stack} icon="code-slash-outline" style={styles.gap} />
      <Pill label={`Generated in ${seconds}s`} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  gap: {
    marginRight: spacing.sm,
  },
});
