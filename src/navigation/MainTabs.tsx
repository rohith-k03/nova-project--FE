import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from '../constants';
import BottomTabBar from '../components/navigation/BottomTabBar';
import HomeScreen from '../features/home';
import ChatHistoryScreen from '../features/chatHistory';
import ToolsScreen from '../features/tools';
import ProfileScreen from '../features/profile';

type MainTabParamList = {
  Home: undefined;
  Chats: undefined;
  Tools: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList, undefined>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName={routes.home}
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={routes.home} component={HomeScreen} />
      <Tab.Screen name={routes.chats} component={ChatHistoryScreen} />
      <Tab.Screen name={routes.tools} component={ToolsScreen} />
      <Tab.Screen name={routes.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
