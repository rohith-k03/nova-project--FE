import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors, sizes } from '../../theme';

type ScreenProps = {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  scroll?: boolean;
  padded?: boolean;
  keyboardAware?: boolean;
  edges?: Edge[];
  style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
  contentStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
};

export default function Screen({
  children,
  footer,
  scroll = false,
  padded = true,
  keyboardAware = false,
  edges = ['top', 'bottom', 'left', 'right'],
  style,
  contentStyle,
}: ScreenProps) {
  const body = scroll ? (
    <ScrollView
      style={styles.flex}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.scrollContent, padded && styles.padded, contentStyle]}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.flex, padded && styles.padded, contentStyle]}>{children}</View>
  );

  const content = (
    <>
      {body}
      {footer}
    </>
  );

  return (
    <SafeAreaView edges={edges} style={[styles.root, style]}>
      <StatusBar style="light" />
      {keyboardAware ? (
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {content}
        </KeyboardAvoidingView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  padded: {
    paddingHorizontal: sizes.screenPadding,
  },
});
