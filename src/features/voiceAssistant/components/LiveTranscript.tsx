import React from 'react';
import { StyleSheet } from 'react-native';
import { AppText, Card } from '../../../components/common';
import { formatClock } from './voiceData';
import { colors, spacing } from '../../../theme';

export default function LiveTranscript({ seconds, text }) {
  return (
    <Card style={styles.card}>
      <AppText variant="overline" color={colors.primaryText}>
        {`LIVE TRANSCRIPT · ${formatClock(seconds)}`}
      </AppText>
      <AppText variant="body" style={styles.text}>
        {text ? `"${text}"` : 'Say something and it will appear here.'}
      </AppText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 96,
  },
  text: {
    marginTop: spacing.sm,
  },
});
