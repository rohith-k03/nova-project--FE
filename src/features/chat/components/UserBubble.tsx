import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppText } from '../../../components/common';
import { colors, gradients, radius, spacing } from '../../../theme';

export default function UserBubble({ text }) {
  return (
    <View style={styles.row}>
      <LinearGradient
        colors={gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.bubble}
      >
        <AppText variant="body" color={colors.white}>
          {text}
        </AppText>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'flex-end',
    marginBottom: spacing.xl,
  },
  bubble: {
    maxWidth: '82%',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
    borderBottomRightRadius: radius.sm / 2,
  },
});
