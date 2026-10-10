import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { Screen, Header, ChipRow, AskBar, ScreenFooter } from '../../components/common';
import {
  DocumentHeader,
  SummaryPanel,
  SuggestionPill,
  QuestionThread,
  KeyPointsPanel,
  sampleDocument,
  tabs,
  summary,
  keyPoints,
  suggestion,
  answerQuestion,
  formatSize,
} from './components';
import { spacing } from '../../theme';

export default function PdfAssistantScreen({ navigation }) {
  const [document, setDocument] = useState(sampleDocument);
  const [tab, setTab] = useState('summary');
  const [entries, setEntries] = useState([]);

  const ask = (question) => {
    const reply = answerQuestion(question, document);
    setEntries((prev) => [
      ...prev,
      { id: `q${Date.now()}`, question, answer: reply.text, page: reply.page },
    ]);
    setTab('ask');
  };

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
      copyToCacheDirectory: true,
    });
    if (result.canceled || !result.assets?.length) return;
    const file = result.assets[0];
    setDocument({
      id: file.uri,
      name: file.name,
      meta: `${formatSize(file.size)} · Ready`,
      sample: false,
    });
    setEntries([]);
    setTab('summary');
  };

  const footer = (
    <ScreenFooter note="Answers include sources. Your files stay private.">
      <AskBar placeholder="Ask about this document..." onSubmit={ask} />
    </ScreenFooter>
  );

  return (
    <Screen scroll keyboardAware footer={footer}>
      <Header
        title="PDF assistant"
        onBack={() => navigation.goBack()}
        rightIcon="folder-open-outline"
        onRightPress={pickDocument}
      />
      <DocumentHeader document={document} onReplace={pickDocument} />
      <ChipRow items={tabs} activeId={tab} onChange={setTab} style={{ marginTop: spacing.lg }} />

      {tab === 'summary' ? (
        <>
          <SummaryPanel document={document} summary={summary} />
          {document.sample ? <SuggestionPill label={suggestion} onPress={() => ask(suggestion)} /> : null}
        </>
      ) : null}
      {tab === 'ask' ? <QuestionThread entries={entries} /> : null}
      {tab === 'points' ? <KeyPointsPanel document={document} points={keyPoints} /> : null}
    </Screen>
  );
}
