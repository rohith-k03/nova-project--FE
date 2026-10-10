import React from 'react';
import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Chip } from '../../../components/common';
import { spacing } from '../../../theme';

type SuggestionChipsProps = {
  items: string[];
  onPick: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

export default function SuggestionChips({ items, onPick, style }: SuggestionChipsProps) {
  return (
    <View style={[styles.row, style]}>
      {items.map((label) => (
        <Chip key={label} label={label} onPress={() => onPick(label)} style={styles.chip} />
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
    marginBottom: spacing.sm,
  },
});
