import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Button } from '../../../components/common';
import { colors, radius, spacing } from '../../../theme';

export default function FlashcardPanel({ questions }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [questions]);

  const card = questions[index];
  const move = (step) => {
    setFlipped(false);
    setIndex((index + step + questions.length) % questions.length);
  };

  return (
    <View style={styles.wrap}>
      <AppText variant="caption" color={colors.textMuted} align="center">
        {`Card ${index + 1} of ${questions.length} · Tap to flip`}
      </AppText>

      <Pressable onPress={() => setFlipped((value) => !value)} style={[styles.card, flipped && styles.cardBack]}>
        <AppText variant="overline" color={colors.primaryText}>
          {flipped ? 'ANSWER' : 'QUESTION'}
        </AppText>
        <AppText variant="h2" align="center" style={styles.text}>
          {flipped ? card.options[card.answer] : card.prompt}
        </AppText>
        {flipped ? (
          <AppText variant="caption" color={colors.textSecondary} align="center">
            {card.explanation}
          </AppText>
        ) : (
          <Ionicons name="sync-outline" size={20} color={colors.textMuted} />
        )}
      </Pressable>

      <View style={styles.row}>
        <Button
          title="Previous"
          icon="arrow-back"
          variant="secondary"
          onPress={() => move(-1)}
          style={styles.button}
        />
        <Button title="Next" icon="arrow-forward" onPress={() => move(1)} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: spacing.lg,
  },
  card: {
    minHeight: 240,
    marginVertical: spacing.lg,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
  },
  cardBack: {
    backgroundColor: colors.surfaceAlt,
    borderColor: colors.primaryBorder,
  },
  text: {
    marginVertical: spacing.lg,
    fontSize: 20,
    lineHeight: 27,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
});
