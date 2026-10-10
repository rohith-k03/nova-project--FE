import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppText } from '../../../components/common';
import { colors, gradients, radius, spacing } from '../../../theme';

export default function BillingToggle({ options, value, onChange }) {
  return (
    <View style={styles.track}>
      {options.map((option) => {
        const active = option.id === value;
        const label = (
          <View style={styles.labelRow}>
            <AppText variant="bodyStrong" color={active ? colors.white : colors.textSecondary}>
              {option.label}
            </AppText>
            {option.badge ? (
              <AppText
                variant="caption"
                color={active ? colors.white : colors.success}
                style={styles.badge}
              >
                {option.badge}
              </AppText>
            ) : null}
          </View>
        );

        return (
          <Pressable key={option.id} onPress={() => onChange(option.id)} style={styles.item}>
            {active ? (
              <LinearGradient
                colors={gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.pill}
              >
                {label}
              </LinearGradient>
            ) : (
              <View style={styles.pill}>{label}</View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 4,
    marginTop: spacing.xl,
  },
  item: {
    flex: 1,
  },
  pill: {
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    marginLeft: spacing.sm,
    fontSize: 11,
  },
});
