import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '../constants';
import { colors } from '../theme';
import MainTabs from './MainTabs';
import ChatScreen from '../features/chat';
import ChatDetailsScreen from '../features/chatDetails';
import CodeAssistantScreen from '../features/codeAssistant';
import CodeResultScreen from '../features/codeResult';
import ImageGeneratorScreen from '../features/imageGenerator';
import ImagePreviewScreen from '../features/imagePreview';
import ImageGalleryScreen from '../features/imageGallery';
import PdfAssistantScreen from '../features/pdfAssistant';
import VoiceAssistantScreen from '../features/voiceAssistant';
import TranslatorScreen from '../features/translator';
import StudyHelperScreen from '../features/studyHelper';
import DataAnalyzerScreen from '../features/dataAnalyzer';
import WritingStudioScreen from '../features/writingStudio';
import SubscriptionScreen from '../features/subscription';
import EditProfileScreen from '../features/editProfile';
import SettingsScreen from '../features/settings';
import HelpScreen from '../features/help';
import PrivacyScreen from '../features/privacy';

type MainStackParamList = {
  Main: undefined;
  Chat: undefined;
  ChatDetails: undefined;
  CodeAssistant: undefined;
  CodeResult: undefined;
  ImageGenerator: { prompt?: string; style?: string; ratio?: string } | undefined;
  ImagePreview: { id: string } | undefined;
  ImageGallery: undefined;
  PdfAssistant: undefined;
  VoiceAssistant: undefined;
  Translator: undefined;
  StudyHelper: undefined;
  DataAnalyzer: undefined;
  WritingStudio: undefined;
  Subscription: undefined;
  EditProfile: undefined;
  Settings: undefined;
  Help: undefined;
  Privacy: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList, undefined>();

const screens = [
  { name: routes.chat, component: ChatScreen },
  { name: routes.chatDetails, component: ChatDetailsScreen },
  { name: routes.codeAssistant, component: CodeAssistantScreen },
  { name: routes.codeResult, component: CodeResultScreen },
  { name: routes.imageGenerator, component: ImageGeneratorScreen },
  { name: routes.imagePreview, component: ImagePreviewScreen },
  { name: routes.imageGallery, component: ImageGalleryScreen },
  { name: routes.pdfAssistant, component: PdfAssistantScreen },
  { name: routes.voiceAssistant, component: VoiceAssistantScreen },
  { name: routes.translator, component: TranslatorScreen },
  { name: routes.studyHelper, component: StudyHelperScreen },
  { name: routes.dataAnalyzer, component: DataAnalyzerScreen },
  { name: routes.writingStudio, component: WritingStudioScreen },
  { name: routes.subscription, component: SubscriptionScreen },
  { name: routes.editProfile, component: EditProfileScreen },
  { name: routes.settings, component: SettingsScreen },
  { name: routes.help, component: HelpScreen },
  { name: routes.privacy, component: PrivacyScreen },
];

export default function MainNavigator() {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={routes.main}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name={routes.main} component={MainTabs} options={{ animation: 'fade' }} />
      {screens.map((screen) => (
        <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
      ))}
    </Stack.Navigator>
  );
}
