import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToolkitCard from './ToolkitCard';
import { spacing } from '../../../theme';

export default function ToolkitRow({ items, onItemPress }) {
  return (
    <View style={styles.row}>
      {items.map((item, index) => (
        <ToolkitCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          onPress={() => onItemPress(item)}
          style={index === 0 ? styles.gap : null}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  gap: {
    marginRight: spacing.md,
  },
});
