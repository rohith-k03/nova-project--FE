import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import Chip from './Chip';

type ChipRowProps = {
  items: { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};

export default function ChipRow({ items, activeId, onChange, style }: ChipRowProps) {
  return (
    <View style={[styles.row, style]}>
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.label}
          active={item.id === activeId}
          onPress={() => onChange(item.id)}
          style={styles.chip}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    marginBottom: 8,
  },
});
