import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradients } from '../../theme';

export default function Orb({ size = 140 }) {
  const glow = size * 1.9;
  const ring = size * 1.5;

  return (
    <View style={[styles.wrap, { width: glow, height: glow }]}>
      <View
        style={[
          styles.glow,
          { width: glow, height: glow, borderRadius: glow / 2 },
        ]}
      />
      <View
        style={[
          styles.ring,
          { width: ring, height: ring * 0.7, borderRadius: ring / 2 },
        ]}
      />
      <LinearGradient
        colors={gradients.orb}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    backgroundColor: 'rgba(139, 92, 246, 0.12)',
  },
  ring: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.55)',
    transform: [{ rotate: '-18deg' }],
  },
});
