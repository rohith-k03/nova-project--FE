import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import StepItem from './StepItem';
import MessageActions from './MessageActions';
import { formatTime } from './DateDivider';
import { colors, radius, spacing } from '../../../theme';

export default function AssistantMessage({ message }) {
  const { text, steps, time } = message;

  return (
    <View style={styles.wrapper}>
      <View style={styles.labelRow}>
        <View style={styles.logo}>
          <Ionicons name="sparkles" size={11} color={colors.white} />
        </View>
        <AppText variant="caption" color={colors.textSecondary} style={styles.name}>
          Nova AI
        </AppText>
        <AppText variant="caption" color={colors.textMuted}>
          {formatTime(time)}
        </AppText>
      </View>

      <View style={styles.card}>
        <AppText variant="body">{text}</AppText>
        {steps
          ? steps.map((step) => (
              <StepItem
                key={step.id}
                index={step.id}
                title={step.title}
                duration={step.duration}
                detail={step.detail}
              />
            ))
          : null}
        <MessageActions text={text} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.xl,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 6,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginHorizontal: spacing.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    borderTopLeftRadius: radius.sm / 2,
    padding: spacing.lg,
  },
});
