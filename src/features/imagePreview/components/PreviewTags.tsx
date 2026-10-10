import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tag } from '../../../components/common';
import { spacing } from '../../../theme';

export default function PreviewTags({ style, resolution, ratio }) {
  return (
    <View style={styles.row}>
      <Tag label={style} tone="primary" style={styles.tag} />
      <Tag label={resolution} tone="neutral" style={styles.tag} />
      <Tag label={ratio} tone="neutral" style={styles.tag} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.lg,
  },
  tag: {
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
});
