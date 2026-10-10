import React from 'react';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function HowItWorks({ text }) {
  return (
    <Card style={{ marginTop: spacing.lg }}>
      <AppText variant="bodyStrong" style={{ marginBottom: spacing.sm }}>
        How it works
      </AppText>
      <AppText variant="caption" color={colors.textSecondary}>
        {text}
      </AppText>
    </Card>
  );
}
