import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const initialProfile = {
  name: 'Alex Morgan',
  email: 'alex.morgan@email.com',
  about: 'Product designer, curious creator, and a believer in calmer mornings. Based in San Francisco.',
  joined: 'September 2026',
  plan: 'free',
  stats: { conversations: 48, creations: 6, notes: 16 },
};

export const getInitials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

type Profile = typeof initialProfile & {
  photoUri?: string;
};

type ProfileContextValue = {
  profile: Profile;
  initials: string;
  firstName: string;
  isPro: boolean;
  updateProfile: (patch: Partial<Profile>) => void;
  setPlan: (plan: string) => void;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(initialProfile);

  const updateProfile = useCallback((patch) => {
    setProfile((prev) => ({ ...prev, ...patch }));
  }, []);

  const setPlan = useCallback((plan) => {
    setProfile((prev) => ({ ...prev, plan }));
  }, []);

  const value = useMemo(
    () => ({
      profile,
      initials: getInitials(profile.name),
      firstName: profile.name.trim().split(/\s+/)[0],
      isPro: profile.plan === 'pro',
      updateProfile,
      setPlan,
    }),
    [profile, updateProfile, setPlan]
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
