import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Screen, Header, AppText, Button, Input, IconBadge, InfoBox } from '../../components/common';
import { routes } from '../../constants';
import { useAdminActionsMutation } from '../Rtk/api/appquery/controllerappapi';
import routeApi from '@/features/Rtk/endpoint/api';
import { isValidEmail } from '../../utils/validators';
import { colors, spacing } from '../../theme';

const getForgotError = (error: any): string => {
  if (error?.status === 'FETCH_ERROR' || error?.status === 'TIMEOUT_ERROR') {
    return 'Network error. Check your connection and try again.';
  }

  return error?.data?.message ?? 'Something went wrong, try again';
};

export default function ForgotPasswordScreen({ navigation }) {
  const [authAction, { isLoading }] = useAdminActionsMutation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (isLoading) return;

    if (!isValidEmail(email)) {
      setError('Enter a valid email address');
      return;
    }

    setError('');
    const cleanEmail = email.trim();

    try {
      await authAction({
        endpoint: routeApi.auth.forgotPass,
        method: 'POST',
        body: { email: cleanEmail },
      }).unwrap();

      navigation.navigate(routes.otp, { email: cleanEmail });
    } catch (err) {
      setError(getForgotError(err));
    }
  };

  return (
    <Screen scroll keyboardAware>
      <Header title="Account recovery" onBack={() => navigation.goBack()} />

      <View style={styles.badge}>
        <IconBadge name="key-outline" />
      </View>

      <AppText variant="h1">Let's get you back in.</AppText>
      <AppText variant="caption" color={colors.textSecondary} style={styles.subtitle}>
        Enter your email and we'll send a secure code to reset your password.
      </AppText>

      <Input
        label="Email address"
        icon="mail-outline"
        placeholder="alex.morgan@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        error={error}
      />

      <Button
        title={isLoading ? 'Sending code...' : 'Send recovery code'}
        icon="arrow-forward"
        onPress={handleSend}
      />

      <InfoBox style={styles.info}>
        For your security, the code expires after 10 minutes. Only you can use it.
      </InfoBox>

      <Pressable onPress={() => navigation.navigate(routes.login)} style={styles.bottom}>
        <AppText variant="caption" color={colors.primaryText} align="center">
          Remember your password? Back to log in
        </AppText>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    marginVertical: spacing.xxl,
  },
  subtitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxl,
  },
  info: {
    marginTop: spacing.xl,
  },
  bottom: {
    marginTop: spacing.xxxl,
    paddingVertical: spacing.md,
  },
});