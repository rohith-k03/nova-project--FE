import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function EmptyGallery({ favorites }) {
  return (
    <View style={styles.wrap}>
      <Ionicons
        name={favorites ? 'heart-outline' : 'images-outline'}
        size={36}
        color={colors.textDisabled}
      />
      <AppText variant="bodyStrong" style={styles.title}>
        {favorites ? 'No favorites yet' : 'Nothing created yet'}
      </AppText>
      <AppText variant="caption" color={colors.textMuted} align="center">
        {favorites
          ? 'Tap the heart on any image to keep it here.'
          : 'Your creations will show up here.'}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingVertical: spacing.huge,
  },
  title: {
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
});
