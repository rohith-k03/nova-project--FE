import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import { tableColumns, formatCell } from './analyzerData';
import { colors, radius, spacing } from '../../../theme';

export default function DataTable({ rows }) {
  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.head]}>
        {tableColumns.map((column) => (
          <AppText
            key={column.id}
            variant="overline"
            color={colors.textMuted}
            style={{ flex: column.flex }}
          >
            {column.title}
          </AppText>
        ))}
      </View>
      {rows.map((row, index) => (
        <View key={row.id} style={[styles.row, index < rows.length - 1 && styles.divider]}>
          {tableColumns.map((column) => (
            <AppText
              key={column.id}
              variant="caption"
              color={column.id === 'label' ? colors.textPrimary : colors.textSecondary}
              style={{ flex: column.flex }}
            >
              {formatCell(column.id, row[column.id])}
            </AppText>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.lg,
  },
  head: {
    backgroundColor: colors.surfaceAlt,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderSoft,
  },
});
