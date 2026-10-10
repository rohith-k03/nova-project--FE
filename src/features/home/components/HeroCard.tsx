import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Button, Card, Orb } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function HeroCard({ onAsk }) {
  return (
    <Card highlight style={styles.card}>
      <View style={styles.orb}>
        <Orb size={58} />
      </View>

      <View style={styles.texts}>
        <AppText variant="h2" style={styles.title}>
          What's on your mind?
        </AppText>
        <AppText variant="caption" color={colors.textSecondary}>
          A big question or a small spark. I'm here for it.
        </AppText>
      </View>

      <Button title="Ask Nova anything" icon="sparkles-outline" onPress={onAsk} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.xl,
  },
  orb: {
    position: 'absolute',
    top: -4,
    right: -14,
  },
  texts: {
    width: '62%',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    marginBottom: spacing.sm,
  },
});
