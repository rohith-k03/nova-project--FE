import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, radius, sizes, spacing } from '../../../theme';

export default function ConversationItem({ item, onPress, onLongPress }) {
  return (
    <Card onPress={onPress} onLongPress={onLongPress} style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name={item.icon} size={sizes.iconMd} color={colors.textSecondary} />
      </View>

      <View style={styles.texts}>
        <View style={styles.titleRow}>
          <AppText variant="bodyStrong" numberOfLines={1} style={styles.title}>
            {item.title}
          </AppText>
          {item.pinned ? (
            <Ionicons name="pin" size={12} color={colors.primaryText} style={styles.pin} />
          ) : null}
        </View>
        <AppText variant="caption" color={colors.textMuted} numberOfLines={1}>
          {item.preview}
        </AppText>
      </View>

      <AppText variant="caption" color={colors.textMuted}>
        {item.time}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderRadius: radius.lg,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  texts: {
    flex: 1,
    marginRight: spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flexShrink: 1,
  },
  pin: {
    marginLeft: spacing.sm,
  },
});
