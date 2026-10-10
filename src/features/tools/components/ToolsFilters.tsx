import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from '../../../components/common';
import { spacing } from '../../../theme';

export default function ToolsFilters({ filters, active, onChange }) {
  return (
    <View style={styles.row}>
      {filters.map((label) => (
        <Chip key={label} label={label} active={label === active} onPress={() => onChange(label)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
});
