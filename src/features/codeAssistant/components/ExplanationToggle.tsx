import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function ExplanationToggle({ value, onToggle }) {
  return (
    <Pressable onPress={onToggle} style={styles.card}>
      <Ionicons
        name={value ? 'checkmark-circle' : 'ellipse-outline'}
        size={20}
        color={value ? colors.primaryText : colors.textMuted}
      />
      <View style={styles.texts}>
        <AppText variant="bodyStrong">Include comments and an explanation</AppText>
        <AppText variant="caption" color={colors.textMuted}>
          Readable code, ready for your next project.
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.sm,
  },
  texts: {
    flex: 1,
    marginLeft: spacing.md,
  },
});
