import React from 'react';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function SummaryCard({ summary }) {
  return (
    <Card highlight style={{ marginTop: spacing.sm }}>
      <AppText variant="overline" color={colors.primaryText} style={{ marginBottom: spacing.sm }}>
        Conversation summary
      </AppText>
      <AppText variant="body" color={colors.textPrimary}>
        {summary}
      </AppText>
    </Card>
  );
}
