import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from '../../../components/common';
import { spacing } from '../../../theme';

export default function FilterTabs({ filters, activeId, onChange }) {
  return (
    <View style={styles.row}>
      {filters.map((filter) => (
        <Chip
          key={filter.id}
          label={filter.label}
          active={filter.id === activeId}
          onPress={() => onChange(filter.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
});
