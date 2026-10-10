import React from 'react';
import { Pressable } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function LogoutButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={{ paddingVertical: spacing.xl }}>
      <AppText variant="bodyStrong" color={colors.textSecondary} align="center">
        Log out
      </AppText>
    </Pressable>
  );
}
