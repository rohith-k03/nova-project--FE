import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function GalleryTile({ item, onPress, onToggleFavorite }) {
  return (
    <Pressable onPress={onPress} style={styles.tile}>
      <View>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Pressable onPress={onToggleFavorite} hitSlop={8} style={styles.heart}>
          <Ionicons
            name={item.favorite ? 'heart' : 'heart-outline'}
            size={16}
            color={item.favorite ? colors.danger : colors.white}
          />
        </Pressable>
      </View>
      <AppText variant="bodyStrong" numberOfLines={1} style={styles.title}>
        {item.title}
      </AppText>
      <AppText variant="caption" color={colors.textMuted}>
        {`${item.when} · ${item.style}`}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: '48%',
    marginBottom: spacing.lg,
  },
  image: {
    width: '100%',
    aspectRatio: 1.15,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceAlt,
  },
  heart: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(5, 8, 16, 0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: spacing.sm,
  },
});
