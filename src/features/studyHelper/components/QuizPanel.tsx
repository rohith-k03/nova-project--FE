import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Card } from '../../../components/common';
import AnswerOption from './AnswerOption';
import { optionLetters } from './studyData';
import { colors, spacing } from '../../../theme';

export default function QuizPanel({ question, picked, cheer, onPick }) {
  const answered = picked !== null;
  const isRight = answered && picked === question.answer;

  const stateFor = (index) => {
    if (!answered) return 'idle';
    if (index === question.answer) return 'correct';
    if (index === picked) return 'wrong';
    return 'idle';
  };

  return (
    <View>
      <Card style={styles.card}>
        <AppText variant="h2" style={styles.prompt}>
          {question.prompt}
        </AppText>
        {question.options.map((option, index) => (
          <AnswerOption
            key={option}
            letter={optionLetters[index]}
            label={option}
            state={stateFor(index)}
            disabled={answered}
            onPress={() => onPick(index)}
          />
        ))}
      </Card>

      {answered ? (
        <View style={styles.feedback}>
          <View style={styles.verdictRow}>
            <AppText variant="bodyStrong" color={isRight ? colors.success : colors.danger}>
              {isRight ? cheer : 'Not quite.'}
            </AppText>
            {isRight ? <Ionicons name="sparkles" size={13} color={colors.success} style={styles.spark} /> : null}
          </View>
          <AppText variant="caption" color={colors.textSecondary}>
            {question.explanation}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: spacing.lg,
  },
  prompt: {
    fontSize: 22,
    lineHeight: 29,
    marginBottom: spacing.xs,
  },
  feedback: {
    marginTop: spacing.lg,
  },
  verdictRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  spark: {
    marginLeft: spacing.xs + 1,
  },
});
