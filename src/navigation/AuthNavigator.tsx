import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '../constants';
import { colors } from '../theme';
import SplashScreen from '../features/auth/SplashScreen';
import OnboardingScreen from '../features/auth/OnboardingScreen';
import LoginScreen from '../features/auth/LoginScreen';
import RegisterScreen from '../features/auth/RegisterScreen';
import ForgotPasswordScreen from '../features/auth/ForgotPasswordScreen';
import OtpScreen from '../features/auth/OtpScreen';
import ResetPasswordScreen from '../features/auth/ResetPasswordScreen';

type AuthStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Otp: { email: string };
  ResetPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList, undefined>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={routes.splash}
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name={routes.splash} component={SplashScreen} options={{ animation: 'fade' }} />
      <Stack.Screen name={routes.onboarding} component={OnboardingScreen} options={{ animation: 'fade' }} />
      <Stack.Screen name={routes.login} component={LoginScreen} />
      <Stack.Screen name={routes.register} component={RegisterScreen} />
      <Stack.Screen name={routes.forgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={routes.otp} component={OtpScreen} />
      <Stack.Screen name={routes.resetPassword} component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
