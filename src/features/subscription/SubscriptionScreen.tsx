import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Screen, Header, AppText } from '../../components/common';
import { useProfile } from '../../context/ProfileContext';
import {
  BillingToggle,
  CurrentPlanCard,
  ProPlanCard,
  UpgradeFooter,
  billingOptions,
  freePlan,
  proFeatures,
  getPricing,
} from './components';
import { colors, spacing } from '../../theme';

export default function SubscriptionScreen({ navigation }) {
  const { isPro, setPlan } = useProfile();
  const [billing, setBilling] = useState('monthly');

  const pricing = getPricing(billing);
  const current = isPro
    ? { name: 'Nova Pro', detail: '300 messages + 100 images per month', price: pricing.headline }
    : freePlan;

  const handleUpgrade = () => {
    setPlan('pro');
    Alert.alert('Welcome to Nova Pro', 'Your plan is active. Enjoy the extra room for big ideas.', [
      { text: 'Continue', onPress: () => navigation.goBack() },
    ]);
  };

  const handleRestore = () =>
    Alert.alert('Restore purchases', 'We could not find any earlier purchases on this account.');

  const footer = (
    <UpgradeFooter
      isPro={isPro}
      note={pricing.note}
      onUpgrade={handleUpgrade}
      onRestore={handleRestore}
    />
  );

  return (
    <Screen scroll footer={footer}>
      <Header title="Discover Nova Pro" onBack={() => navigation.goBack()} />

      <AppText variant="h1" style={{ marginTop: spacing.sm }}>
        A little more limitless.
      </AppText>
      <AppText variant="caption" color={colors.textSecondary} style={{ marginTop: spacing.sm }}>
        More power for your ideas. More space to make them happen.
      </AppText>

      <BillingToggle options={billingOptions} value={billing} onChange={setBilling} />
      <CurrentPlanCard name={current.name} detail={current.detail} price={current.price} />
      <ProPlanCard price={pricing.headline} unit={pricing.unit} features={proFeatures} />
    </Screen>
  );
}
