import React from 'react';
import { Image, StyleSheet, type ImageStyle, type StyleProp } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppText from './AppText';
import { colors, gradients } from '../../theme';

type AvatarProps = {
  initials: string;
  uri?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
};

export default function Avatar({ initials, uri, size = 44, style }: AvatarProps) {
  const shape = { width: size, height: size, borderRadius: size / 2 };

  if (uri) {
    return <Image source={{ uri }} style={[shape, style]} />;
  }

  return (
    <LinearGradient
      colors={gradients.primary}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.avatar, shape, style]}
    >
      <AppText variant="bodyStrong" color={colors.white} style={{ fontSize: size * 0.34 }}>
        {initials}
      </AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
