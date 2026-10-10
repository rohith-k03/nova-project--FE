import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const languageOptions = ['English', 'Tamil', 'Hindi', 'Spanish', 'French', 'Portuguese'];

const initialSettings = {
  notifications: true,
  personalMemory: true,
  readAloud: false,
  language: 'English',
};

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(initialSettings);

  const setSetting = useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const value = useMemo(() => ({ settings, setSetting }), [settings, setSetting]);

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export const useSettings = () => useContext(SettingsContext);
