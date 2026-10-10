import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { Screen, AppText, Orb } from '../../components/common';
import { strings, routes } from '../../constants';
import { colors, radius, spacing } from '../../theme';

const SPLASH_DURATION = 2600;

export default function SplashScreen({ navigation }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: SPLASH_DURATION,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => navigation.replace(routes.onboarding), SPLASH_DURATION + 200);
    return () => clearTimeout(timer);
  }, [navigation, progress]);

  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Screen>
      <View style={styles.center}>
        <Orb size={130} />
        <AppText variant="h1" style={styles.title}>
          {strings.appName}
        </AppText>
        <AppText variant="caption" color={colors.textSecondary} align="center">
          {strings.tagline}
        </AppText>
      </View>

      <View style={styles.footer}>
        <View style={styles.track}>
          <Animated.View style={[styles.fill, { width: barWidth }]} />
        </View>
        <AppText variant="overline" color={colors.textMuted} style={styles.footerText}>
          {strings.splashFooter}
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },
  track: {
    width: 80,
    height: 3,
    borderRadius: radius.pill,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
  },
  footerText: {
    marginTop: spacing.lg,
  },
});
