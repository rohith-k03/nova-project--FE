import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function ModelBadge({ label }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.pill}>
        <Ionicons name="sparkles-outline" size={12} color={colors.primaryText} />
        <AppText variant="caption" color={colors.textSecondary} style={styles.text}>
          {label}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.primarySoft,
  },
  text: {
    marginLeft: spacing.xs + 2,
  },
});
