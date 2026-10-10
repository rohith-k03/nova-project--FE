export const billingOptions = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'yearly', label: 'Yearly', badge: 'Save 20%' },
];

export const monthlyPrice = 9.99;
export const yearlyDiscount = 0.2;

export const freePlan = {
  name: 'Nova Free',
  detail: '30 messages + 5 images per day',
  price: '$0',
};

export const proFeatures = [
  '300 messages a day with Nova 2.5',
  '100 high-quality images per month',
  'Larger files, up to 25 MB',
  'Priority responses at busy times',
];

const money = (value) => `$${value.toFixed(2)}`;

export const getPricing = (billing) => {
  if (billing === 'yearly') {
    const yearly = monthlyPrice * 12 * (1 - yearlyDiscount);
    return {
      headline: money(yearly / 12),
      unit: '/ month',
      note: `${money(yearly)} billed yearly. Renews automatically. Cancel anytime in your app store settings.`,
    };
  }
  return {
    headline: money(monthlyPrice),
    unit: '/ month',
    note: `${money(monthlyPrice)} billed monthly. Renews automatically. Cancel anytime in your app store settings.`,
  };
};
