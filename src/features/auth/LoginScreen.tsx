import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen, AppText, Button, Input, Checkbox, IconBadge } from '../../components/common';
import { routes } from '../../constants';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import routeApi from '@/features/Rtk/endpoint/api';
import { isValidEmail } from '../../utils/validators';
import { colors, spacing } from '../../theme';
import { useAdminActionsMutation } from '../Rtk/api/appquery/controllerappapi';

type LoginErrors = { email?: string; password?: string; form?: string };

interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

const getLoginError = (error: any): LoginErrors => {
  if (error?.status === 'FETCH_ERROR' || error?.status === 'TIMEOUT_ERROR') {
    return { form: 'Network error. Check your connection and try again.' };
  }

  return { form: error?.data?.message ?? 'Something went wrong, try again' };
};

export default function LoginScreen({ navigation }) {
  const { signIn } = useAuth();
  const { updateProfile } = useProfile();
  const [authAction, { isLoading }] = useAdminActionsMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleLogin = async () => {
    if (isLoading) return;

    const next: LoginErrors = {};
    if (!isValidEmail(email)) next.email = 'Enter a valid email address';
    if (password.length < 8) next.password = 'Password must be at least 8 characters';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    try {
      const response = (await authAction({
        endpoint: routeApi.auth.login,
        method: 'POST',
        body: { email: email.trim(), password },
      }).unwrap()) as unknown as LoginResponse;

      await AsyncStorage.setItem('token', response.token);

      updateProfile({
        email: response.user.email,
        name: response.user.fullName,
      });
      signIn();
    } catch (error) {
      setErrors(getLoginError(error));
    }
  };

  return (
    <Screen scroll keyboardAware>
      <View style={styles.badge}>
        <IconBadge name="sparkles-outline" size={56} />
      </View>

      <AppText variant="h1">Welcome back.</AppText>
      <AppText variant="caption" color={colors.textSecondary} style={styles.subtitle}>
        Your ideas have a place here. Let's pick up where you left off.
      </AppText>

      <Input
        label="Email address"
        icon="mail-outline"
        placeholder="alex.morgan@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
      />
      <Input
        label="Password"
        icon="lock-closed-outline"
        placeholder="Enter your password"
        secure
        value={password}
        onChangeText={setPassword}
        error={errors.password}
      />

      <View style={styles.optionsRow}>
        <Checkbox checked={remember} onToggle={() => setRemember((v) => !v)} label="Remember me" />
        <Pressable onPress={() => navigation.navigate(routes.forgotPassword)} hitSlop={8}>
          <AppText variant="caption" color={colors.primaryText}>
            Forgot password?
          </AppText>
        </Pressable>
      </View>

      {errors.form ? (
        <AppText variant="caption" color={colors.danger} style={styles.formError}>
          {errors.form}
        </AppText>
      ) : null}

      <Button
        title={isLoading ? 'Logging in...' : 'Log in'}
        icon="arrow-forward"
        onPress={handleLogin}
      />

      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <AppText variant="caption" color={colors.textMuted} style={styles.dividerText}>
          or continue with
        </AppText>
        <View style={styles.line} />
      </View>

      <Button title="Continue with Google" icon="globe-outline" variant="secondary" onPress={() => {}} />

      <View style={styles.bottom}>
        <Pressable onPress={() => navigation.navigate(routes.register)}>
          <AppText variant="caption" color={colors.textSecondary} align="center">
            New to Nova? Create an account
          </AppText>
        </Pressable>
        <AppText variant="caption" color={colors.textMuted} align="center" style={styles.terms}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  badge: {
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },
  subtitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxl,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  formError: {
    marginBottom: spacing.md,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: spacing.md,
  },
  bottom: {
    marginTop: spacing.xxxl,
  },
  terms: {
    marginTop: spacing.lg,
  },
});