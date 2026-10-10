import React from 'react';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function NovaTip({ text }) {
  return (
    <AppText variant="caption" color={colors.textMuted} style={{ marginTop: spacing.lg }}>
      <AppText variant="caption" color={colors.primaryText}>
        Nova tip:{' '}
      </AppText>
      {text}
    </AppText>
  );
}
