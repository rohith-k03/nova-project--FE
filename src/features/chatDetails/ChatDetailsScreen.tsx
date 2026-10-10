import React, { useState } from 'react';
import { Share } from 'react-native';
import { Screen, Header, Button, ScreenFooter } from '../../components/common';
import { routes } from '../../constants';
import { getConversation } from '../../data/conversations';
import { DetailsHero, SummaryCard, StatsRow, ManageList } from './components';

export default function ChatDetailsScreen({ navigation, route }) {
  const conversation = getConversation(route.params?.conversationId);
  const [pinned, setPinned] = useState(conversation.pinned);

  const stats = [
    { value: conversation.messages, label: 'Messages' },
    { value: `${conversation.readMinutes} min`, label: 'Read time' },
    { value: conversation.savedNotes, label: 'Saved note' },
  ];

  const handleExport = () =>
    Share.share({
      title: conversation.title,
      message: `${conversation.title}\n\n${conversation.summary}`,
    });

  const footer = (
    <ScreenFooter>
      <Button
        title="Continue conversation"
        icon="chatbubble-outline"
        onPress={() => navigation.navigate(routes.chat, { conversationId: conversation.id })}
      />
    </ScreenFooter>
  );

  return (
    <Screen scroll footer={footer}>
      <Header
        title="Conversation details"
        onBack={() => navigation.goBack()}
        rightIcon="ellipsis-horizontal"
      />
      <DetailsHero
        icon={conversation.icon}
        title={conversation.title}
        createdAt={conversation.createdAt}
        tags={conversation.tags}
      />
      <SummaryCard summary={conversation.summary} />
      <StatsRow stats={stats} />
      <ManageList pinned={pinned} onTogglePin={setPinned} onExport={handleExport} />
    </Screen>
  );
}
