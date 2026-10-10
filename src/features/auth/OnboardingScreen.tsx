import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, AppText, Button, Orb } from '../../components/common';
import { images, strings, routes } from '../../constants';
import { colors, radius, spacing } from '../../theme';

const pages = strings.onboarding;
const lastIndex = pages.length - 1;

function PageVisual({ index }) {
  if (index === 1) {
    return (
      <View style={styles.imageCard}>
        <Image source={images.onboardingHero} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.captionRow}>
          <AppText variant="caption" color={colors.textMuted}>
            From thought to thing
          </AppText>
          <AppText variant="caption" color={colors.textMuted}>
            Made with Nova
          </AppText>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.orbArea}>
      <Orb size={120} />
      {index === 0 ? (
        <View style={styles.pill}>
          <Ionicons name="sparkles-outline" size={12} color={colors.primaryText} />
          <AppText variant="caption" color={colors.textSecondary} style={styles.pillText}>
            Always curious. Always ready.
          </AppText>
        </View>
      ) : (
        <View style={styles.featureCard}>
          <Ionicons name="finger-print-outline" size={26} color={colors.primaryText} />
          <View style={styles.featureText}>
            <AppText variant="bodyStrong">An assistant that gets you</AppText>
            <AppText variant="caption" color={colors.textMuted}>
              Your goals. Your style. Your pace.
            </AppText>
          </View>
        </View>
      )}
    </View>
  );
}

function Dots({ active }) {
  return (
    <View style={styles.dots}>
      {pages.map((page, i) => (
        <View key={page.id} style={[styles.dot, i === active && styles.dotActive]} />
      ))}
    </View>
  );
}

export default function OnboardingScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const page = pages[index];
  const isLast = index === lastIndex;

  const goToLogin = () => navigation.replace(routes.login);

  const handleNext = () => {
    if (isLast) {
      navigation.replace(routes.register);
      return;
    }
    setIndex((prev) => prev + 1);
  };

  return (
    <Screen>
      <View style={styles.header}>
        <AppText variant="label" color={colors.textPrimary}>
          {strings.appName}
        </AppText>
        {isLast ? (
          <AppText variant="caption" color={colors.textMuted}>
            {`0${index + 1} / 0${pages.length}`}
          </AppText>
        ) : (
          <Pressable onPress={goToLogin} hitSlop={10}>
            <AppText variant="caption" color={colors.textMuted}>
              Skip
            </AppText>
          </Pressable>
        )}
      </View>

      <View style={styles.visual}>
        <PageVisual index={index} />
      </View>

      <View style={styles.textBlock}>
        <AppText variant="overline" color={colors.primaryText} align="center">
          {page.overline}
        </AppText>
        <AppText variant="h1" align="center" style={styles.title}>
          {page.title}
        </AppText>
        <AppText variant="caption" color={colors.textSecondary} align="center">
          {page.description}
        </AppText>
      </View>

      <Dots active={index} />

      <Button
        title={isLast ? 'Get started' : 'Continue'}
        icon="arrow-forward"
        onPress={handleNext}
      />

      <Pressable onPress={goToLogin} disabled={!isLast} style={styles.footer}>
        <AppText variant="caption" color={colors.textMuted} align="center">
          {page.footer}
        </AppText>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  visual: {
    flex: 1,
    justifyContent: 'center',
  },
  orbArea: {
    alignItems: 'center',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.primarySoft,
    marginTop: spacing.sm,
  },
  pillText: {
    marginLeft: spacing.xs + 2,
  },
  featureCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.md,
  },
  featureText: {
    marginLeft: spacing.md,
  },
  imageCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
  },
  heroImage: {
    width: '100%',
    height: 190,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceAlt,
  },
  captionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  textBlock: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },
  title: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginHorizontal: 3,
  },
  dotActive: {
    width: 20,
    backgroundColor: colors.primary,
  },
  footer: {
    paddingVertical: spacing.lg,
  },
});
