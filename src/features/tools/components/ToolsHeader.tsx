import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, IconBadge } from '../../../components/common';
import { colors, sizes, spacing } from '../../../theme';

export default function ToolsHeader({ onGalleryPress }) {
  return (
    <View style={styles.row}>
      <IconBadge name="sparkles-outline" size={36} />
      <AppText variant="h3" style={styles.title}>
        Explore tools
      </AppText>
      <Pressable onPress={onGalleryPress} hitSlop={10}>
        <Ionicons name="images-outline" size={sizes.iconLg} color={colors.textSecondary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
  },
  title: {
    flex: 1,
    marginLeft: spacing.md,
  },
});
