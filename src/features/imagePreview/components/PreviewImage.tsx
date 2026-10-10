import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../../theme';

const aspectRatios = {
  '1:1': 1,
  '3:4': 3 / 4,
  '16:9': 16 / 9,
};

export default function PreviewImage({ source, ratio }) {
  return (
    <Image
      source={source}
      resizeMode="cover"
      style={[styles.image, { aspectRatio: aspectRatios[ratio] ?? 3 / 4 }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    maxHeight: 420,
    borderRadius: radius.xl,
    backgroundColor: colors.surfaceAlt,
    marginTop: spacing.sm,
  },
});
