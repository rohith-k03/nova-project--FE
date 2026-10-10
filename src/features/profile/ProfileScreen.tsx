import React from 'react';
import { Alert } from 'react-native';
import { Screen } from '../../components/common';
import { routes } from '../../constants';
import { useAuth } from '../../context/AuthContext';
import { useGallery } from '../../context/GalleryContext';
import { useProfile } from '../../context/ProfileContext';
import {
  ProfileHeader,
  ProfileHero,
  StatsRow,
  UpgradeBanner,
  ProfileMenu,
  LogoutButton,
} from './components';

export default function ProfileScreen({ navigation }) {
  const { signOut } = useAuth();
  const { items } = useGallery();
  const { profile, initials, isPro } = useProfile();

  const planLabel = isPro ? 'Pro' : 'Free';
  const stats = [
    { value: profile.stats.conversations, label: 'Conversations' },
    { value: items.length, label: 'Creations' },
    { value: profile.stats.notes, label: 'Saved notes' },
  ];

  const confirmLogout = () =>
    Alert.alert('Log out', 'You will need to sign in again to continue.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log out', style: 'destructive', onPress: signOut },
    ]);

  return (
    <Screen scroll edges={['top']}>
      <ProfileHeader onSettingsPress={() => navigation.navigate(routes.settings)} />
      <ProfileHero
        name={profile.name}
        email={profile.email}
        initials={initials}
        photoUri={profile.photoUri}
        planLabel={`Nova ${planLabel}`}
        joined={profile.joined}
      />
      <StatsRow stats={stats} />
      <UpgradeBanner isPro={isPro} onPress={() => navigation.navigate(routes.subscription)} />
      <ProfileMenu
        planLabel={planLabel}
        onEdit={() => navigation.navigate(routes.editProfile)}
        onSubscription={() => navigation.navigate(routes.subscription)}
        onSettings={() => navigation.navigate(routes.settings)}
        onHelp={() => navigation.navigate(routes.help)}
      />
      <LogoutButton onPress={confirmLogout} />
    </Screen>
  );
}
