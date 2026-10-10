import React from 'react';
import { MenuGroup, AppText } from '../../../components/common';
import FaqItem from './FaqItem';
import { colors, spacing } from '../../../theme';

export default function FaqList({ items, expandedId, onToggle }) {
  if (items.length === 0) {
    return (
      <AppText
        variant="caption"
        color={colors.textMuted}
        align="center"
        style={{ marginVertical: spacing.xl }}
      >
        No articles match your search. Try a different word, or contact support below.
      </AppText>
    );
  }

  return (
    <MenuGroup>
      {items.map((item, index) => (
        <FaqItem
          key={item.id}
          item={item}
          expanded={item.id === expandedId}
          onToggle={() => onToggle(item.id)}
          last={index === items.length - 1}
        />
      ))}
    </MenuGroup>
  );
}
