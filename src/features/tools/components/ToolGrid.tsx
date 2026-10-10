import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../../../components/common';
import ToolCard from './ToolCard';
import { colors, spacing } from '../../../theme';

const chunk = (items, size) => {
  const rows = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
};

export default function ToolGrid({ tools, onToolPress }) {
  if (tools.length === 0) {
    return (
      <AppText variant="caption" color={colors.textMuted} align="center" style={styles.empty}>
        No tools match your search.
      </AppText>
    );
  }

  return (
    <View>
      {chunk(tools, 2).map((row) => (
        <View key={row[0].id} style={styles.row}>
          {row.map((tool, index) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onPress={() => onToolPress(tool)}
              style={index === 0 ? styles.gap : null}
            />
          ))}
          {row.length === 1 ? <View style={styles.filler} /> : null}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  gap: {
    marginRight: spacing.md,
  },
  filler: {
    flex: 1,
    marginLeft: spacing.md,
  },
  empty: {
    marginTop: spacing.xxl,
  },
});
