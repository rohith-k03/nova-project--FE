import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, radius, sizes, spacing } from '../../../theme';

export default function ToolkitCard({ title, subtitle, icon, onPress, style }) {
  return (
    <Card onPress={onPress} style={[styles.card, style]}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={sizes.iconMd} color={colors.primaryText} />
      </View>
      <AppText variant="bodyStrong" style={styles.title}>
        {title}
      </AppText>
      <AppText variant="caption" color={colors.textMuted}>
        {subtitle}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: spacing.lg,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    marginBottom: spacing.xs,
  },
});
