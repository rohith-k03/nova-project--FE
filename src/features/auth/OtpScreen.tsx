import React, { useRef, useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Screen, Header, AppText, Button, IconBadge, InfoBox } from '../../components/common';
import { routes } from '../../constants';
import useCountdown from '../../hooks/useCountdown';
import { useAdminActionsMutation } from '../Rtk/api/appquery/controllerappapi';
import routeApi from '@/features/Rtk/endpoint/api';
import { formatTimer } from '../../utils/validators';
import { colors, fontFamily, fontSize, radius, spacing } from '../../theme';

const CODE_LENGTH = 6;
const RESEND_SECONDS = 60;

interface VerifyOtpResponse {
  message: string;
  resetToken: string;
}

const getOtpError = (error: any): string => {
  if (error?.status === 'FETCH_ERROR' || error?.status === 'TIMEOUT_ERROR') {
    return 'Network error. Check your connection and try again.';
  }

  return error?.data?.message ?? 'Something went wrong, try again';
};

export default function OtpScreen({ navigation, route }) {
  const email: string = route.params?.email ?? '';
  const inputRef = useRef(null);
  const [verifyAction, { isLoading: verifying }] = useAdminActionsMutation();
  const [resendAction, { isLoading: resending }] = useAdminActionsMutation();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const { seconds, finished, restart } = useCountdown(RESEND_SECONDS);

  const handleChange = (value) => {
    setCode(value.replace(/\D/g, '').slice(0, CODE_LENGTH));
    setError('');
  };

  const handleVerify = async () => {
    if (verifying) return;

    if (!email) {
      setError('Email is missing. Go back and enter your email again.');
      return;
    }

    if (code.length < CODE_LENGTH) {
      setError('Enter the 6-digit code');
      return;
    }

    try {
      const response = (await verifyAction({
        endpoint: routeApi.auth.verifyOtp,
        method: 'POST',
        body: { email, otp: code },
      }).unwrap()) as unknown as VerifyOtpResponse;

      navigation.navigate(routes.resetPassword, { resetToken: response.resetToken });
    } catch (err) {
      setError(getOtpError(err));
    }
  };

  const handleResend = async () => {
    if (resending) return;

    if (!email) {
      setError('Email is missing. Go back and enter your email again.');
      return;
    }

    try {
      await resendAction({
        endpoint: routeApi.auth.forgotPass,
        method: 'POST',
        body: { email },
      }).unwrap();

      setCode('');
      setError('');
      restart();
    } catch (err) {
      setError(getOtpError(err));
    }
  };

  return (
    <Screen scroll keyboardAware>
      <Header title="Verify your email" onBack={() => navigation.goBack()} />

      <View style={styles.badge}>
        <IconBadge name="mail-open-outline" />
      </View>

      <AppText variant="h1">Check your inbox.</AppText>
      <AppText variant="caption" color={colors.textSecondary} style={styles.subtitle}>
        {`We sent a 6-digit recovery code to ${email || 'your email'}.`}
      </AppText>

      <Pressable onPress={() => inputRef.current?.focus()} style={styles.boxes}>
        {Array.from({ length: CODE_LENGTH }).map((_, i) => {
          const active = i === Math.min(code.length, CODE_LENGTH - 1);
          return (
            <View key={i} style={[styles.box, active && styles.boxActive]}>
              <AppText variant="h2">{code[i] ?? ''}</AppText>
            </View>
          );
        })}
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={handleChange}
          keyboardType="number-pad"
          maxLength={CODE_LENGTH}
          style={styles.hidden}
          caretHidden
        />
      </Pressable>

      {error ? (
        <AppText variant="caption" color={colors.danger} align="center" style={styles.error}>
          {error}
        </AppText>
      ) : null}

      {finished ? (
        <Pressable onPress={handleResend} style={styles.resend}>
          <AppText variant="caption" color={colors.primaryText} align="center">
            {resending ? 'Sending code...' : 'Resend code'}
          </AppText>
        </Pressable>
      ) : (
        <AppText variant="caption" color={colors.textMuted} align="center" style={styles.resend}>
          {`Resend code in ${formatTimer(seconds)}`}
        </AppText>
      )}

      <Button
        title={verifying ? 'Verifying...' : 'Verify code'}
        icon="shield-checkmark-outline"
        onPress={handleVerify}
      />

      <InfoBox style={styles.info}>
        Can't find it? Check your spam folder or make sure your email address is correct.
      </InfoBox>

      <Pressable onPress={() => navigation.goBack()} style={styles.bottom}>
        <AppText variant="caption" color={colors.primaryText} align="center">
          Use a different email address
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
  boxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 46,
    height: 54,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxActive: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceAlt,
  },
  hidden: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },
  error: {
    marginTop: spacing.md,
  },
  resend: {
    marginVertical: spacing.xl,
  },
  info: {
    marginTop: spacing.xl,
  },
  bottom: {
    marginTop: spacing.xxl,
    paddingVertical: spacing.md,
  },
});