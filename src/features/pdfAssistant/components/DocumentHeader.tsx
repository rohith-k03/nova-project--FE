import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, FileCard } from '../../../components/common';
import { colors, sizes, spacing } from '../../../theme';

export default function DocumentHeader({ document, onReplace }) {
  return (
    <>
      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}
      >
        Less reading. More understanding. Ask your documents anything.
      </AppText>
      <FileCard
        name={document.name}
        meta={document.meta}
        status="Document analyzed securely"
        right={
          <Pressable onPress={onReplace} hitSlop={10}>
            <Ionicons name="add" size={sizes.iconLg} color={colors.textMuted} />
          </Pressable>
        }
      />
    </>
  );
}
