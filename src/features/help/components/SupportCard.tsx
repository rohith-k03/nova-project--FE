import React from 'react';
import { Linking } from 'react-native';
import { AppText, Button, Card } from '../../../components/common';
import { supportEmail } from './helpData';
import { colors, spacing } from '../../../theme';

export default function SupportCard() {
  const handleContact = () =>
    Linking.openURL(`mailto:${supportEmail}?subject=${encodeURIComponent('Nova AI support')}`);

  return (
    <Card highlight style={{ marginTop: spacing.xl }}>
      <AppText variant="h3">Still need a hand?</AppText>
      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={{ marginTop: spacing.xs, marginBottom: spacing.lg }}
      >
        Our team usually replies within 24 hours.
      </AppText>
      <Button title="Contact support" icon="chatbubble-outline" onPress={handleContact} />
    </Card>
  );
}
