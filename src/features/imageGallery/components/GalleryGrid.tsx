import React from 'react';
import { View, StyleSheet } from 'react-native';
import GalleryTile from './GalleryTile';

export default function GalleryGrid({ items, onOpen, onToggleFavorite }) {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <GalleryTile
          key={item.id}
          item={item}
          onPress={() => onOpen(item)}
          onToggleFavorite={() => onToggleFavorite(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
