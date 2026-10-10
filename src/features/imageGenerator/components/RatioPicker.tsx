import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { ratioShapes } from './imageData';
import { colors, radius, spacing } from '../../../theme';

export default function RatioPicker({ options, value, onChange }) {
  return (
    <View style={styles.row}>
      {options.map((option, index) => {
        const active = option.id === value;
        const shape = ratioShapes[option.id];
        return (
          <Pressable
            key={option.id}
            onPress={() => onChange(option.id)}
            style={[styles.card, active && styles.active, index > 0 && styles.gap]}
          >
            <View
              style={[
                styles.shape,
                shape,
                { borderColor: active ? colors.primaryText : colors.textMuted },
              ]}
            />
            <AppText
              variant="caption"
              color={active ? colors.primaryText : colors.textSecondary}
              style={styles.label}
            >
              {option.id}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
  },
  gap: {
    marginLeft: spacing.md,
  },
  active: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  shape: {
    borderWidth: 1.5,
    borderRadius: 4,
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: 11,
  },
});
