import React from 'react';
import { AuthProvider } from './AuthContext';
import { ProfileProvider } from './ProfileContext';
import { SettingsProvider } from './SettingsContext';
import { GalleryProvider } from './GalleryContext';

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ProfileProvider>
        <SettingsProvider>
          <GalleryProvider>{children}</GalleryProvider>
        </SettingsProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}
