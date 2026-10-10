import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen, Header, AppText, Button, Input, Checkbox } from '../../components/common';
import { routes } from '../../constants';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import routeApi from '@/features/Rtk/endpoint/api';
import { isValidEmail, hasMinLength } from '../../utils/validators';
import { colors, spacing } from '../../theme';
import { useAdminActionsMutation } from '../Rtk/api/appquery/controllerappapi';

type RegisterErrors = {
  name?: string;
  email?: string;
  password?: string;
  terms?: string;
  form?: string;
};

interface RegisterResponse {
  message: string;
  token: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

const getRegisterError = (error: any): RegisterErrors => {
  const message = error?.data?.message;

  if (error?.status === 409) {
    return { email: message ?? 'Email is already registered' };
  }

  if (error?.status === 'FETCH_ERROR' || error?.status === 'TIMEOUT_ERROR') {
    return { form: 'Network error. Check your connection and try again.' };
  }

  return { form: message ?? 'Something went wrong, try again' };
};

export default function RegisterScreen({ navigation }) {
  const { signIn } = useAuth();
  const { updateProfile } = useProfile();
  const [authAction, { isLoading }] = useAdminActionsMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<RegisterErrors>({});

  const strong = hasMinLength(password);

  const handleRegister = async () => {
    if (isLoading) return;

    const next: RegisterErrors = {};
    const fullName = name.trim();

    if (fullName.length < 2 || fullName.length > 60) next.name = 'Enter your full name';
    if (!isValidEmail(email)) next.email = 'Enter a valid email address';
    if (!strong) next.password = 'Password must be at least 8 characters';
    if (!agreed) next.terms = 'Please accept the Terms of Service to continue';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    try {
      const response = (await authAction({
        endpoint: routeApi.auth.register,
        method: 'POST',
        body: { fullName, email: email.trim(), password },
      }).unwrap()) as unknown as RegisterResponse;

      await AsyncStorage.setItem('token', response.token);

      updateProfile({
        name: response.user.fullName,
        email: response.user.email,
        about: '',
        plan: 'free',
      });
      signIn();
    } catch (error) {
      setErrors(getRegisterError(error));
    }
  };

  return (
    <Screen scroll keyboardAware>
      <Header title="Create account" onBack={() => navigation.goBack()} />

      <AppText variant="h1" style={styles.title}>
        Start something great.
      </AppText>
      <AppText variant="caption" color={colors.textSecondary} style={styles.subtitle}>
        Meet the AI that makes every day a little easier.
      </AppText>

      <Input
        label="Full name"
        icon="person-outline"
        placeholder="Alex Morgan"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
        error={errors.name}
      />
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
        placeholder="Create a password"
        secure
        value={password}
        onChangeText={setPassword}
        error={errors.password}
      />

      {strong ? (
        <View style={styles.strength}>
          <Ionicons name="shield-checkmark-outline" size={14} color={colors.success} />
          <AppText variant="caption" color={colors.success} style={styles.strengthText}>
            Strong password · At least 8 characters
          </AppText>
        </View>
      ) : null}

      <Checkbox
        checked={agreed}
        onToggle={() => setAgreed((v) => !v)}
        label="I agree to Nova's Terms of Service and Privacy Policy."
        style={styles.terms}
      />
      {errors.terms ? (
        <AppText variant="caption" color={colors.danger} style={styles.termsError}>
          {errors.terms}
        </AppText>
      ) : null}

      {errors.form ? (
        <AppText variant="caption" color={colors.danger} style={styles.formError}>
          {errors.form}
        </AppText>
      ) : null}

      <Button
        title={isLoading ? 'Creating account...' : 'Create account'}
        icon="arrow-forward"
        onPress={handleRegister}
      />

      <AppText variant="caption" color={colors.textMuted} align="center" style={styles.note}>
        No credit card needed. Start on the free plan.
      </AppText>

      <Pressable onPress={() => navigation.navigate(routes.login)} style={styles.bottom}>
        <AppText variant="caption" color={colors.primaryText} align="center">
          Already have an account? Log in
        </AppText>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxl,
  },
  strength: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -spacing.sm,
    marginBottom: spacing.md,
  },
  strengthText: {
    marginLeft: spacing.sm,
  },
  terms: {
    marginBottom: spacing.lg,
  },
  termsError: {
    marginTop: -spacing.sm,
    marginBottom: spacing.md,
  },
  formError: {
    marginBottom: spacing.md,
  },
  note: {
    marginTop: spacing.lg,
  },
  bottom: {
    marginTop: spacing.xxxl,
    paddingVertical: spacing.md,
  },
});