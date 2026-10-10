import React from 'react';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function AssistantIntro() {
  return (
    <>
      <AppText variant="overline" color={colors.primaryText} style={{ marginTop: spacing.lg }}>
        From idea to implementation
      </AppText>
      <AppText variant="h1" style={{ marginTop: spacing.sm }}>
        Build with a head start.
      </AppText>
      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={{ marginTop: spacing.sm, marginBottom: spacing.xl }}
      >
        Describe what you need. Nova handles the first draft.
      </AppText>
    </>
  );
}
