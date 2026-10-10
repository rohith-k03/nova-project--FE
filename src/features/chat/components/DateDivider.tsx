import React from 'react';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export const formatTime = (date) =>
  date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

export default function DateDivider({ date }) {
  return (
    <AppText
      variant="caption"
      color={colors.textMuted}
      align="center"
      style={{ marginBottom: spacing.lg }}
    >
      {`Today, ${formatTime(date)}`}
    </AppText>
  );
}
