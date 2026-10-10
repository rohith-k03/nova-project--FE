import React, { createContext, useContext, useMemo, useState } from 'react';
import { nameFromEmail } from '../utils/format';

const emptyUser = {
  name: 'Alex Morgan',
  email: 'alex.morgan@email.com',
  about: '',
  plan: 'Free',
  joined: 'October 2026',
};

type User = typeof emptyUser;
type AuthContextValue = {
  isAuthenticated: boolean;
  user: User;
  signIn: (profile?: Partial<User>) => void;
  signOut: () => void;
  updateUser: (patch: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  user: emptyUser,
  signIn: () => {},
  signOut: () => {},
  updateUser: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(emptyUser);

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      signIn: (profile: Partial<User> = {}) => {
        const email = profile.email || emptyUser.email;
        setUser({
          ...emptyUser,
          ...profile,
          email,
          name: profile.name || nameFromEmail(email) || emptyUser.name,
        });
        setIsAuthenticated(true);
      },
      signOut: () => setIsAuthenticated(false),
      updateUser: (patch: Partial<User>) => setUser((prev) => ({ ...prev, ...patch })),
    }),
    [isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
