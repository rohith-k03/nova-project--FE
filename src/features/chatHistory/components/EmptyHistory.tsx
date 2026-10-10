import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function EmptyHistory({ searching }) {
  return (
    <View style={styles.wrap}>
      <Ionicons
        name={searching ? 'search-outline' : 'chatbubbles-outline'}
        size={36}
        color={colors.textDisabled}
      />
      <AppText variant="bodyStrong" style={styles.title}>
        {searching ? 'No matches found' : 'Nothing here yet'}
      </AppText>
      <AppText variant="caption" color={colors.textMuted} align="center">
        {searching ? 'Try a different word or clear the search.' : 'Start a conversation and it will show up here.'}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingTop: spacing.huge,
  },
  title: {
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
});
