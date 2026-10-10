import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, radius, sizes, spacing } from '../../../theme';

export default function ToolTile({ tool, onPress }) {
  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name={tool.icon} size={sizes.iconMd} color={colors.primaryText} />
      </View>
      <AppText variant="bodyStrong" numberOfLines={1}>
        {tool.title}
      </AppText>
      <AppText variant="caption" color={colors.textMuted} numberOfLines={2}>
        {tool.subtitle}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: spacing.xs + 2,
    padding: spacing.lg,
    minHeight: 124,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: radius.md,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
});
