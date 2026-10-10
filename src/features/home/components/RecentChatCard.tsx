import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, radius, sizes, spacing } from '../../../theme';

export default function RecentChatCard({ title, meta, onPress }) {
  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name="chatbubble-outline" size={sizes.iconMd} color={colors.textSecondary} />
      </View>

      <View style={styles.texts}>
        <AppText variant="bodyStrong" numberOfLines={1}>
          {title}
        </AppText>
        <AppText variant="caption" color={colors.textMuted}>
          {meta}
        </AppText>
      </View>

      <Ionicons name="chevron-forward" size={sizes.iconMd} color={colors.textMuted} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  texts: {
    flex: 1,
  },
});
