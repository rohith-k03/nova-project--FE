import React from 'react';
import { Pressable } from 'react-native';
import { AppText, Button, ScreenFooter } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function UpgradeFooter({ isPro, note, onUpgrade, onRestore }) {
  return (
    <ScreenFooter note={note}>
      <Button
        title={isPro ? "You're on Nova Pro" : 'Upgrade to Nova Pro'}
        icon={isPro ? 'checkmark' : 'sparkles-outline'}
        onPress={onUpgrade}
        disabled={isPro}
      />
      <Pressable onPress={onRestore} style={{ paddingTop: spacing.md }}>
        <AppText variant="caption" color={colors.primaryText} align="center">
          Restore purchases
        </AppText>
      </Pressable>
    </ScreenFooter>
  );
}
