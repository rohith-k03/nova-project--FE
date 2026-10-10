import React from 'react';
import { MenuGroup, MenuRow } from '../../../components/common';

export default function ProfileMenu({ planLabel, onEdit, onSubscription, onSettings, onHelp }) {
  return (
    <MenuGroup>
      <MenuRow icon="person-outline" label="Edit profile" onPress={onEdit} />
      <MenuRow icon="diamond-outline" label="Subscription" value={planLabel} onPress={onSubscription} />
      <MenuRow icon="settings-outline" label="Settings" onPress={onSettings} />
      <MenuRow icon="help-circle-outline" label="Help & support" onPress={onHelp} last />
    </MenuGroup>
  );
}
