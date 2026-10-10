import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { AppText, Avatar } from '../../../components/common';
import { colors, spacing } from '../../../theme';

const formatToday = () =>
  new Date()
    .toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    .toUpperCase();

export default function HomeHeader({ name, initials, photoUri, onAvatarPress }) {
  return (
    <View style={styles.row}>
      <View style={styles.texts}>
        <AppText variant="overline" color={colors.textMuted}>
          {formatToday()}
        </AppText>
        <AppText variant="h2" style={styles.greeting}>
          {`Hello, ${name} ✨`}
        </AppText>
      </View>
      <Pressable onPress={onAvatarPress} hitSlop={8}>
        <Avatar initials={initials} uri={photoUri} size={44} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  texts: {
    flex: 1,
  },
  greeting: {
    marginTop: spacing.xs,
  },
});
