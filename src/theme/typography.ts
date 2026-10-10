export const fontFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
  extraBold: 'Inter_800ExtraBold',
  mono: 'Courier',
};

export const fontSize = {
  xxs: 10,
  xs: 11,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 22,
  h3: 26,
  h2: 30,
  h1: 36,
};

export const lineHeight = {
  tight: 1.15,
  normal: 1.4,
  relaxed: 1.6,
};

export const textVariants = {
  display: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.h1,
    lineHeight: fontSize.h1 * lineHeight.tight,
    letterSpacing: -0.6,
  },
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h2,
    lineHeight: fontSize.h2 * lineHeight.tight,
    letterSpacing: -0.4,
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h3,
    lineHeight: fontSize.h3 * lineHeight.tight,
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xl * lineHeight.normal,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.relaxed,
  },
  bodyStrong: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
  },
  overline: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.xxs,
    lineHeight: fontSize.xxs * lineHeight.normal,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
  },
};
