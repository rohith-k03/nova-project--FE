import React from 'react';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function SectionLabel({ children }) {
  return (
    <AppText
      variant="label"
      color={colors.textSecondary}
      style={{ marginBottom: spacing.sm }}
    >
      {children}
    </AppText>
  );
}
