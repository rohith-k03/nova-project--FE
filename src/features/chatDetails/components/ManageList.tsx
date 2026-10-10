import React from 'react';
import { MenuGroup, MenuRow, AppText, Toggle } from '../../../components/common';
import { spacing } from '../../../theme';

export default function ManageList({ pinned, onTogglePin, onExport }) {
  return (
    <>
      <AppText variant="h3" style={{ marginTop: spacing.xxl, marginBottom: spacing.md }}>
        Manage conversation
      </AppText>
      <MenuGroup>
        <MenuRow
          icon="pin-outline"
          label="Pin conversation"
          subtitle="Keep this one close"
          right={<Toggle value={pinned} onValueChange={onTogglePin} />}
        />
        <MenuRow
          icon="download-outline"
          label="Export conversation"
          subtitle="Save as PDF or text"
          onPress={onExport}
          last
        />
      </MenuGroup>
    </>
  );
}
