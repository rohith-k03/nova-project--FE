import React, { useMemo, useState } from 'react';
import { Share } from 'react-native';
import { Screen, Header, ChipRow, AskBar, ScreenFooter } from '../../components/common';
import {
  FileHeader,
  MetricCard,
  MetricsRow,
  ChartCard,
  TakeawayCard,
  DataTable,
  FollowUpThread,
  dataset,
  months,
  tabs,
  getSummary,
  getTakeaway,
  answerQuestion,
  formatMoney,
} from './components';
import { spacing } from '../../theme';

const revenueBars = months.map((month) => ({ label: month.label, value: month.revenue }));
const retentionBars = months.map((month) => ({ label: month.label, value: month.retention }));

export default function DataAnalyzerScreen({ navigation }) {
  const [tab, setTab] = useState('insights');
  const [entries, setEntries] = useState([]);

  const summary = useMemo(getSummary, []);
  const takeaway = useMemo(getTakeaway, []);

  const handleAsk = (question) => {
    setEntries((prev) => [
      ...prev,
      { id: `a${Date.now()}`, question, answer: answerQuestion(question) },
    ]);
    setTab('insights');
  };

  const handleExport = () =>
    Share.share({
      title: dataset.name,
      message: `${dataset.name}\nQ3 revenue ${formatMoney(summary.revenue)} (+${summary.growth.toFixed(1)}% vs Q2)\nRetention ${summary.retention.toFixed(1)}% (+${summary.retentionDelta.toFixed(1)} pts vs Q2)\n${takeaway}`,
    });

  const footer = (
    <ScreenFooter>
      <AskBar placeholder="Ask a follow-up about your data..." onSubmit={handleAsk} />
    </ScreenFooter>
  );

  return (
    <Screen scroll keyboardAware footer={footer}>
      <Header
        title="Data analyzer"
        onBack={() => navigation.goBack()}
        rightIcon="download-outline"
        onRightPress={handleExport}
      />
      <FileHeader name={dataset.name} meta={dataset.meta} />
      <ChipRow items={tabs} activeId={tab} onChange={setTab} style={{ marginTop: spacing.lg }} />

      {tab === 'insights' ? (
        <>
          <MetricsRow>
            <MetricCard
              label="Q3 revenue"
              value={formatMoney(summary.revenue)}
              delta={`+${summary.growth.toFixed(1)}% vs. Q2`}
              style={{ marginRight: spacing.md }}
            />
            <MetricCard
              label="Retention"
              value={`${summary.retention.toFixed(1)}%`}
              delta={`+${summary.retentionDelta.toFixed(1)} pts vs. Q2`}
            />
          </MetricsRow>
          <ChartCard
            title="Revenue by month"
            caption={dataset.quarter}
            data={revenueBars}
            step={20000}
            formatTick={(value) => `$${value / 1000}k`}
            formatValue={formatMoney}
          />
          <TakeawayCard text={takeaway} />
          <FollowUpThread entries={entries} />
        </>
      ) : null}

      {tab === 'table' ? <DataTable rows={months} /> : null}

      {tab === 'charts' ? (
        <>
          <ChartCard
            title="Revenue by month"
            caption={dataset.quarter}
            data={revenueBars}
            step={20000}
            formatTick={(value) => `$${value / 1000}k`}
            formatValue={formatMoney}
          />
          <ChartCard
            title="Retention by month"
            caption="Percent"
            data={retentionBars}
            step={25}
            formatTick={(value) => `${value}%`}
            formatValue={(value) => `${value.toFixed(1)}%`}
          />
        </>
      ) : null}
    </Screen>
  );
}
