import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Avatar, AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function PhotoPicker({ initials, uri, onChange, onRemove }) {
  return (
    <View style={styles.wrap}>
      <Avatar initials={initials} uri={uri} size={84} />
      <Pressable onPress={onChange} hitSlop={8} style={styles.change}>
        <AppText variant="caption" color={colors.primaryText}>
          Change photo
        </AppText>
      </Pressable>
      {uri ? (
        <Pressable onPress={onRemove} hitSlop={8} style={styles.remove}>
          <AppText variant="caption" color={colors.textMuted}>
            Remove photo
          </AppText>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  change: {
    marginTop: spacing.md,
  },
  remove: {
    marginTop: spacing.sm,
  },
});
