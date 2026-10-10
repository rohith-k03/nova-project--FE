import React from 'react';
import { Text, type ColorValue, type StyleProp, type TextProps, type TextStyle } from 'react-native';
import { colors, textVariants } from '../../theme';

type AppTextProps = Omit<TextProps, 'color' | 'style'> & {
  variant?: keyof typeof textVariants;
  color?: ColorValue;
  align?: TextStyle['textAlign'];
  style?: StyleProp<TextStyle>;
};

export default function AppText({
  variant = 'body',
  color = colors.textPrimary,
  align,
  style,
  children,
  ...rest
}: AppTextProps) {
  return (
    <Text
      style={[textVariants[variant], { color }, align && { textAlign: align }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}
