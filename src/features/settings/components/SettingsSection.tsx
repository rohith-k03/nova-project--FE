import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, MenuGroup } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function SettingsSection({ title, children }) {
  return (
    <View style={styles.wrap}>
      <AppText variant="overline" color={colors.textMuted} style={styles.title}>
        {title}
      </AppText>
      <MenuGroup>{children}</MenuGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: spacing.xl,
  },
  title: {
    marginBottom: spacing.sm,
    marginLeft: spacing.xs,
  },
});
