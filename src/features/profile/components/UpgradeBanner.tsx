import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, radius, sizes, spacing } from '../../../theme';

export default function UpgradeBanner({ isPro, onPress }) {
  return (
    <Card highlight onPress={onPress} style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons
          name={isPro ? 'diamond-outline' : 'sparkles-outline'}
          size={sizes.iconLg}
          color={colors.primaryText}
        />
      </View>
      <View style={styles.texts}>
        <AppText variant="bodyStrong">
          {isPro ? 'You are on Nova Pro' : 'Your next chapter: Nova Pro'}
        </AppText>
        <AppText variant="caption" color={colors.textSecondary}>
          {isPro ? 'Thank you for building with us.' : 'More messages. More possibilities.'}
        </AppText>
      </View>
      <Ionicons name="arrow-forward" size={sizes.iconMd} color={colors.textSecondary} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primarySoft,
    marginRight: spacing.md,
  },
  texts: {
    flex: 1,
  },
});
