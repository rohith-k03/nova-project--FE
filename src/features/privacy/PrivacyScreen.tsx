import React from 'react';
import { Screen, Header, AppText, Button, ScreenFooter } from '../../components/common';
import { routes } from '../../constants';
import { PromiseCard, PolicySection, policyMeta, promise, sections, contactNote } from './components';
import { colors, spacing } from '../../theme';

export default function PrivacyScreen({ navigation }) {
  const footer = (
    <ScreenFooter>
      <Button
        title="Manage my privacy"
        icon="options-outline"
        variant="secondary"
        onPress={() => navigation.navigate(routes.settings)}
      />
    </ScreenFooter>
  );

  return (
    <Screen scroll footer={footer}>
      <Header title="Privacy policy" onBack={() => navigation.goBack()} />

      <AppText variant="h1" style={{ marginTop: spacing.sm }}>
        Your trust comes first.
      </AppText>
      <AppText variant="caption" color={colors.textMuted} style={{ marginTop: spacing.sm }}>
        {policyMeta}
      </AppText>

      <PromiseCard text={promise} />

      {sections.map((section) => (
        <PolicySection key={section.id} title={section.title} body={section.body} />
      ))}

      <AppText variant="caption" color={colors.textMuted}>
        {contactNote}
      </AppText>
    </Screen>
  );
}
