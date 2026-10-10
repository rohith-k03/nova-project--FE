import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Chip } from '../../../components/common';
import { colors, radius, sizes, spacing } from '../../../theme';

export default function DetailsHero({ icon, title, createdAt, tags }) {
  return (
    <View>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={sizes.iconLg} color={colors.primaryText} />
      </View>
      <AppText variant="h1" style={styles.title}>
        {title}
      </AppText>
      <AppText variant="caption" color={colors.textMuted}>
        {`Created ${createdAt}`}
      </AppText>
      <View style={styles.tags}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} active />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  title: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.md,
  },
});
