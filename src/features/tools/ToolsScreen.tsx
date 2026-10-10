import React, { useMemo, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { AppText, Screen } from '../../components/common';
import { routes, tools, toolFilters } from '../../constants';
import {
  ToolsHeader,
  ToolsSearch,
  ToolsFilters,
  ToolTile,
  EmptyTools,
} from './components';
import { colors, sizes, spacing } from '../../theme';

export default function ToolsScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(toolFilters[0]);

  const visibleTools = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return tools.filter((tool) => {
      if (filter !== toolFilters[0] && tool.category !== filter) return false;
      if (!needle) return true;
      return (
        tool.title.toLowerCase().includes(needle) || tool.subtitle.toLowerCase().includes(needle)
      );
    });
  }, [query, filter]);

  const renderHeader = () => (
    <View>
      <ToolsHeader onGalleryPress={() => navigation.navigate(routes.imageGallery)} />
      <AppText variant="h1">A tool for every idea.</AppText>
      <AppText variant="caption" color={colors.textSecondary} style={styles.subtitle}>
        More possibilities. Less busywork.
      </AppText>
      <ToolsSearch value={query} onChangeText={setQuery} />
      <ToolsFilters filters={toolFilters} active={filter} onChange={setFilter} />
    </View>
  );

  return (
    <Screen edges={['top']} padded={false}>
      <FlatList
        data={visibleTools}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ToolTile tool={item} onPress={() => navigation.navigate(item.route)} />
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={<EmptyTools />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: sizes.screenPadding - spacing.xs - 2,
    paddingBottom: spacing.xl,
  },
  subtitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
});
