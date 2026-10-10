import React, { useState } from 'react';
import { Alert, Share } from 'react-native';
import { Screen, Header, MenuRow, Toggle, OptionSheet } from '../../components/common';
import { routes } from '../../constants';
import { useProfile } from '../../context/ProfileContext';
import { useSettings, languageOptions } from '../../context/SettingsContext';
import { SettingsSection, VersionFooter } from './components';

export default function SettingsScreen({ navigation }) {
  const { settings, setSetting } = useSettings();
  const { profile } = useProfile();
  const [languageOpen, setLanguageOpen] = useState(false);

  const handleManageData = () =>
    Alert.alert('Manage your data', 'Take a copy of your data or review how it is handled.', [
      {
        text: 'Export my data',
        onPress: () =>
          Share.share({
            title: 'My Nova data',
            message: `Name: ${profile.name}\nEmail: ${profile.email}\nPlan: ${profile.plan}`,
          }),
      },
      { text: 'Privacy policy', onPress: () => navigation.navigate(routes.privacy) },
      { text: 'Cancel', style: 'cancel' },
    ]);

  return (
    <Screen scroll>
      <Header title="Settings" onBack={() => navigation.goBack()} />

      <SettingsSection title="YOUR EXPERIENCE">
        <MenuRow icon="moon-outline" label="Appearance" value="Dark" showChevron={false} />
        <MenuRow
          icon="language-outline"
          label="Language"
          value={settings.language}
          onPress={() => setLanguageOpen(true)}
        />
        <MenuRow
          icon="notifications-outline"
          label="Notifications"
          last
          right={
            <Toggle
              value={settings.notifications}
              onValueChange={(value) => setSetting('notifications', value)}
            />
          }
        />
      </SettingsSection>

      <SettingsSection title="YOUR ASSISTANT">
        <MenuRow
          icon="hardware-chip-outline"
          label="Personal memory"
          right={
            <Toggle
              value={settings.personalMemory}
              onValueChange={(value) => setSetting('personalMemory', value)}
            />
          }
        />
        <MenuRow
          icon="volume-high-outline"
          label="Read replies aloud"
          last
          right={
            <Toggle
              value={settings.readAloud}
              onValueChange={(value) => setSetting('readAloud', value)}
            />
          }
        />
      </SettingsSection>

      <SettingsSection title="PRIVACY & ACCOUNT">
        <MenuRow
          icon="shield-checkmark-outline"
          label="Privacy policy"
          onPress={() => navigation.navigate(routes.privacy)}
        />
        <MenuRow icon="server-outline" label="Manage your data" onPress={handleManageData} last />
      </SettingsSection>

      <VersionFooter />

      <OptionSheet
        visible={languageOpen}
        title="Language"
        options={languageOptions}
        selected={settings.language}
        onSelect={(value) => setSetting('language', value)}
        onClose={() => setLanguageOpen(false)}
      />
    </Screen>
  );
}
