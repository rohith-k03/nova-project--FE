import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function GenerateSummary({ resolution }) {
  return (
    <View style={styles.row}>
      <Ionicons name="sparkles-outline" size={14} color={colors.primaryText} />
      <AppText variant="caption" color={colors.textSecondary} style={styles.text}>
        {`High quality · ${resolution} · 1 image`}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  text: {
    marginLeft: spacing.sm,
  },
});
