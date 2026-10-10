import React from 'react';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export const appVersion = '1.0.0';

export default function VersionFooter() {
  return (
    <AppText
      variant="caption"
      color={colors.textMuted}
      align="center"
      style={{ marginTop: spacing.xxxl, marginBottom: spacing.lg }}
    >
      {`Nova AI · Version ${appVersion}`}
    </AppText>
  );
}
