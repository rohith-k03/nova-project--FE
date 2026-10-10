import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function PromiseCard({ text }) {
  return (
    <Card highlight style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="shield-checkmark-outline" size={26} color={colors.primaryText} />
        <AppText variant="body" style={styles.text}>
          {text}
        </AppText>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    marginLeft: spacing.md,
  },
});
