import React, { useMemo, useState } from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Screen, Button } from '../../components/common';
import { routes } from '../../constants';
import {
  HistoryHeader,
  SearchBar,
  FilterTabs,
  SectionLabel,
  ConversationItem,
  EmptyHistory,
  filters,
  conversations,
  buildSections,
  applyFilters,
} from './components';
import { sizes, spacing } from '../../theme';

export default function ChatHistoryScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const sections = useMemo(
    () => buildSections(applyFilters(conversations, activeFilter, query)),
    [activeFilter, query]
  );

  const openChat = (conversationId) => navigation.navigate(routes.chat, { conversationId });
  const openDetails = (conversationId) =>
    navigation.navigate(routes.chatDetails, { conversationId });
  const startNewChat = () => navigation.navigate(routes.chat);

  return (
    <Screen edges={['top']} padded={false}>
      <View style={styles.top}>
        <HistoryHeader onNewChat={startNewChat} />
        <SearchBar value={query} onChangeText={setQuery} placeholder="Search your conversations" />
        <FilterTabs filters={filters} activeId={activeFilter} onChange={setActiveFilter} />
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <SectionLabel title={section.title} count={section.data.length} />
        )}
        renderItem={({ item }) => (
          <ConversationItem
            item={item}
            onPress={() => openChat(item.id)}
            onLongPress={() => openDetails(item.id)}
          />
        )}
        ListEmptyComponent={<EmptyHistory searching={query.trim().length > 0} />}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />

      <View style={styles.footer}>
        <Button title="Start a new conversation" icon="add" onPress={startNewChat} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: {
    paddingHorizontal: sizes.screenPadding,
  },
  list: {
    flexGrow: 1,
    paddingHorizontal: sizes.screenPadding,
    paddingBottom: spacing.lg,
  },
  footer: {
    paddingHorizontal: sizes.screenPadding,
    paddingVertical: spacing.md,
  },
});
