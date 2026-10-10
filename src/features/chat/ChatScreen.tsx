import React, { useEffect, useRef } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Screen, Header } from '../../components/common';
import { routes } from '../../constants';
import {
  ModelBadge,
  DateDivider,
  MessageBubble,
  TypingIndicator,
  SuggestionChips,
  EmptyChat,
  Composer,
  useChat,
  followUps,
  modelLabel,
} from './components';
import { sizes, spacing } from '../../theme';

export default function ChatScreen({ navigation, route }) {
  const conversationId = route.params?.conversationId;
  const initialPrompt = route.params?.prompt;
  const listRef = useRef(null);
  const { messages, typing, send, reset } = useChat(conversationId);

  const sentInitial = useRef(false);

  useEffect(() => {
    if (!initialPrompt || sentInitial.current) return;
    sentInitial.current = true;
    send(initialPrompt);
  }, [initialPrompt, send]);

  const lastMessage = messages[messages.length - 1];
  const showFollowUps = !typing && lastMessage?.role === 'assistant';

  const scrollToEnd = () => listRef.current?.scrollToEnd({ animated: true });

  const renderHeader = () => (
    <View>
      <ModelBadge label={modelLabel} />
      <DateDivider date={messages[0].time} />
    </View>
  );

  const renderFooter = () => (
    <View>
      {typing ? <TypingIndicator /> : null}
      {showFollowUps ? <SuggestionChips items={followUps} onPick={send} /> : null}
    </View>
  );

  return (
    <Screen keyboardAware padded={false}>
      <View style={styles.header}>
        <Header
          title="Nova AI"
          onBack={() => navigation.goBack()}
          rightIcon={conversationId ? 'ellipsis-horizontal' : 'create-outline'}
          onRightPress={
            conversationId
              ? () => navigation.navigate(routes.chatDetails, { conversationId })
              : reset
          }
        />
      </View>

      {messages.length === 0 ? (
        <EmptyChat onPick={send} />
      ) : (
        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MessageBubble message={item} />}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={scrollToEnd}
        />
      )}

      <Composer onSend={send} disabled={typing} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.screenPadding,
  },
  list: {
    paddingHorizontal: sizes.screenPadding,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
});
