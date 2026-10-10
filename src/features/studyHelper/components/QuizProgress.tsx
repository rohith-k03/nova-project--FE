import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function QuizProgress({ level, total, current }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <AppText variant="caption" color={colors.textMuted}>
          {`${level} · ${total} questions`}
        </AppText>
        <AppText variant="caption" color={colors.textSecondary}>
          {`${current} / ${total}`}
        </AppText>
      </View>
      <View style={styles.segments}>
        {Array.from({ length: total }).map((_, index) => (
          <View
            key={index}
            style={[styles.segment, index < current && styles.segmentDone]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  segments: {
    flexDirection: 'row',
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.border,
    marginRight: spacing.xs,
  },
  segmentDone: {
    backgroundColor: colors.primary,
  },
});
