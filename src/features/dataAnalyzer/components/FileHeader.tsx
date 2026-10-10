import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FileCard } from '../../../components/common';
import { colors } from '../../../theme';

export default function FileHeader({ name, meta }) {
  return (
    <FileCard
      icon="grid-outline"
      name={name}
      meta={meta}
      right={<Ionicons name="checkmark-circle-outline" size={22} color={colors.success} />}
    />
  );
}
