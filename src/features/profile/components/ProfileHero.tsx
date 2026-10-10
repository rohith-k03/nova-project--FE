import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Avatar } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function ProfileHero({ name, email, initials, photoUri, planLabel, joined }) {
  return (
    <View style={styles.row}>
      <Avatar initials={initials} uri={photoUri} size={64} />
      <View style={styles.texts}>
        <AppText variant="h2" numberOfLines={1}>
          {name}
        </AppText>
        <AppText variant="caption" color={colors.textSecondary} numberOfLines={1}>
          {email}
        </AppText>
        <AppText variant="caption" color={colors.primaryText}>
          {`${planLabel} · Joined ${joined}`}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  texts: {
    flex: 1,
    marginLeft: spacing.lg,
  },
});
