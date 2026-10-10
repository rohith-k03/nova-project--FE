import React, { useMemo, useState } from 'react';
import { Screen, Header, AppText, SearchField } from '../../components/common';
import { FaqList, SupportCard, StatusLine, faqs, searchFaqs } from './components';
import { colors, spacing } from '../../theme';

export default function HelpScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState(faqs[0].id);

  const visible = useMemo(() => searchFaqs(faqs, query), [query]);
  const toggle = (id) => setExpandedId((current) => (current === id ? null : id));

  return (
    <Screen scroll keyboardAware>
      <Header title="Help & support" onBack={() => navigation.goBack()} />

      <AppText variant="h1" style={{ marginTop: spacing.sm }}>
        We're here for you.
      </AppText>
      <AppText
        variant="caption"
        color={colors.textSecondary}
        style={{ marginTop: spacing.sm, marginBottom: spacing.xl }}
      >
        A little help goes a long way.
      </AppText>

      <SearchField value={query} onChangeText={setQuery} placeholder="Search help articles" />

      <AppText variant="h3" style={{ marginTop: spacing.xxl, marginBottom: spacing.md }}>
        Good questions, clear answers
      </AppText>
      <FaqList items={visible} expandedId={expandedId} onToggle={toggle} />

      <SupportCard />
      <StatusLine label="All systems operational" />
    </Screen>
  );
}
