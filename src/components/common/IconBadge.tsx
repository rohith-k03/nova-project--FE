import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, gradients, radius, shadows } from '../../theme';

export default function IconBadge({ name, size = 72 }) {
  return (
    <LinearGradient
      colors={gradients.primary}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.badge, shadows.glow, { width: size, height: size }]}
    >
      <Ionicons name={name} size={size * 0.44} color={colors.white} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
