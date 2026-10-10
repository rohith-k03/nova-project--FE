import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen, Header, AppText, Button, Input } from '../../components/common';
import { routes } from '../../constants';
import { useAdminActionsMutation } from '../Rtk/api/appquery/controllerappapi';
import routeApi from '@/features/Rtk/endpoint/api';
import { getPasswordChecks } from '../../utils/validators';
import { colors, radius, spacing } from '../../theme';

const rules = [
  { key: 'length', label: 'At least 8 characters' },
  { key: 'mixed', label: 'One uppercase letter and one number' },
  { key: 'match', label: 'Passwords match' },
];

const getResetError = (error: any): string => {
  if (error?.status === 'FETCH_ERROR' || error?.status === 'TIMEOUT_ERROR') {
    return 'Network error. Check your connection and try again.';
  }

  return error?.data?.message ?? 'Something went wrong, try again';
};

export default function ResetPasswordScreen({ navigation, route }) {
  const resetToken: string = route.params?.resetToken ?? '';
  const [authAction, { isLoading }] = useAdminActionsMutation();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const checks = getPasswordChecks(password, confirm);
  const allValid = checks.length && checks.mixed && checks.match;

  const handleReset = async () => {
    if (!allValid || isLoading) return;

    if (!resetToken) {
      setError('Session expired, verify your email again');
      return;
    }

    setError('');

    try {
      await authAction({
        endpoint: routeApi.auth.resetPass,
        method: 'POST',
        body: { resetToken, newPassword: password },
      }).unwrap();

      await AsyncStorage.removeItem('token');
      navigation.reset({ index: 0, routes: [{ name: routes.login }] });
    } catch (err) {
      setError(getResetError(err));
    }
  };

  return (
    <Screen scroll keyboardAware>
      <Header title="New password" onBack={() => navigation.goBack()} />

      <View style={styles.pill}>
        <Ionicons name="checkmark-circle-outline" size={14} color={colors.primaryText} />
        <AppText variant="caption" color={colors.textSecondary} style={styles.pillText}>
          Identity verified
        </AppText>
      </View>

      <AppText variant="h1">A fresh start.</AppText>
      <AppText variant="caption" color={colors.textSecondary} style={styles.subtitle}>
        Choose a strong password you haven't used before to keep your account safe.
      </AppText>

      <Input
        label="New password"
        icon="lock-closed-outline"
        placeholder="Enter new password"
        secure
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          setError('');
        }}
      />
      <Input
        label="Confirm new password"
        icon="lock-closed-outline"
        placeholder="Re-enter new password"
        secure
        value={confirm}
        onChangeText={(value) => {
          setConfirm(value);
          setError('');
        }}
      />

      <View style={styles.rules}>
        {rules.map((rule) => {
          const ok = checks[rule.key];
          return (
            <View key={rule.key} style={styles.rule}>
              <Ionicons
                name={ok ? 'checkmark-circle' : 'ellipse-outline'}
                size={15}
                color={ok ? colors.success : colors.textDisabled}
              />
              <AppText
                variant="caption"
                color={ok ? colors.textSecondary : colors.textMuted}
                style={styles.ruleText}
              >
                {rule.label}
              </AppText>
            </View>
          );
        })}
      </View>

      {error ? (
        <AppText variant="caption" color={colors.danger} style={styles.formError}>
          {error}
        </AppText>
      ) : null}

      <Button
        title={isLoading ? 'Updating password...' : 'Reset password'}
        icon="checkmark"
        onPress={handleReset}
        disabled={!allValid || isLoading}
      />

      <AppText variant="caption" color={colors.textMuted} align="center" style={styles.note}>
        You'll be signed out of other devices after your password is updated.
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.primarySoft,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  pillText: {
    marginLeft: spacing.xs + 2,
  },
  subtitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxl,
  },
  rules: {
    marginBottom: spacing.xl,
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  ruleText: {
    marginLeft: spacing.sm,
  },
  formError: {
    marginBottom: spacing.md,
  },
  note: {
    marginTop: spacing.xxl,
  },
});