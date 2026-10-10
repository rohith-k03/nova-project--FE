import React from 'react';
import { Screen } from '../../components/common';
import { routes } from '../../constants';
import { useProfile } from '../../context/ProfileContext';
import {
  HomeHeader,
  HeroCard,
  SectionHeader,
  ToolkitRow,
  RecentChatCard,
  UsageMeter,
  toolkitItems,
  recentChat,
  usage,
} from './components';

const toolkitRoutes = {
  image: routes.imageGenerator,
  code: routes.codeAssistant,
};

export default function HomeScreen({ navigation }) {
  const { firstName, initials, profile, isPro } = useProfile();

  const limit = isPro ? usage.proLimit : usage.freeLimit;
  const remaining = limit - usage.usedToday;

  const openNewChat = () => navigation.navigate(routes.chat);
  const openChat = () => navigation.navigate(routes.chat, { conversationId: recentChat.id });
  const openTools = () => navigation.navigate(routes.tools);
  const openHistory = () => navigation.navigate(routes.chats);
  const openProfile = () => navigation.navigate(routes.profile);
  const openUpgrade = () => navigation.navigate(routes.subscription);
  const openToolkitItem = (item) => navigation.navigate(toolkitRoutes[item.id] ?? routes.tools);

  return (
    <Screen scroll edges={['top']}>
      <HomeHeader
        name={firstName}
        initials={initials}
        photoUri={profile.photoUri}
        onAvatarPress={openProfile}
      />

      <HeroCard onAsk={openNewChat} />

      <SectionHeader title="Your creative toolkit" actionLabel="See all" onActionPress={openTools} />
      <ToolkitRow items={toolkitItems} onItemPress={openToolkitItem} />

      <SectionHeader title="Pick up where you left off" actionLabel="History" onActionPress={openHistory} />
      <RecentChatCard title={recentChat.title} meta={recentChat.meta} onPress={openChat} />

      <UsageMeter remaining={remaining} limit={limit} onUpgrade={isPro ? undefined : openUpgrade} />
    </Screen>
  );
}
