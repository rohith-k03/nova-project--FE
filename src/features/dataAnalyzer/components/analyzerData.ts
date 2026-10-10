export const dataset = {
  name: 'q3-revenue-2026.csv',
  meta: '92 rows · 6 columns · Analyzed',
  quarter: 'Q3 2026',
  previousRevenue: 108450,
  previousRetention: 88.4,
};

export const months = [
  { id: 'jul', label: 'Jul', revenue: 36000, orders: 412, newCustomers: 128, returning: 284, retention: 90.1 },
  { id: 'aug', label: 'Aug', revenue: 41000, orders: 468, newCustomers: 133, returning: 335, retention: 91.8 },
  { id: 'sep', label: 'Sep', revenue: 51400, orders: 585, newCustomers: 141, returning: 444, retention: 92.9 },
];

export const tabs = [
  { id: 'insights', label: 'Insights' },
  { id: 'table', label: 'Data table' },
  { id: 'charts', label: 'Charts' },
];

export const tableColumns = [
  { id: 'label', title: 'Month', flex: 1 },
  { id: 'revenue', title: 'Revenue', flex: 1.3 },
  { id: 'orders', title: 'Orders', flex: 1 },
  { id: 'newCustomers', title: 'New', flex: 0.9 },
  { id: 'returning', title: 'Return', flex: 1 },
  { id: 'retention', title: 'Ret.', flex: 1 },
];

export const sum = (items, key) => items.reduce((total, item) => total + item[key], 0);

export const formatMoney = (value) =>
  value >= 1000 ? `$${(value / 1000).toFixed(1)}k` : `$${value}`;

export const formatCell = (key, value) => {
  if (key === 'revenue') return `$${value.toLocaleString('en-US')}`;
  if (key === 'retention') return `${value.toFixed(1)}%`;
  return String(value);
};

export const getSummary = () => {
  const revenue = sum(months, 'revenue');
  const retention = sum(months, 'retention') / months.length;
  const best = months.reduce((top, item) => (item.revenue > top.revenue ? item : top), months[0]);
  const bestShare = Math.round((best.revenue / revenue) * 100);
  const growth = ((revenue - dataset.previousRevenue) / dataset.previousRevenue) * 100;
  const retentionDelta = retention - dataset.previousRetention;
  const returningShare = Math.round((sum(months, 'returning') / sum(months, 'orders')) * 100);

  return { revenue, retention, best, bestShare, growth, retentionDelta, returningShare };
};

export const getTakeaway = () => {
  const { best, bestShare } = getSummary();
  const month = { jul: 'July', aug: 'August', sep: 'September' }[best.id];
  return `${month} contributed ${bestShare}% of Q3 revenue. Returning customers drove the strongest growth.`;
};

export const answerQuestion = (question) => {
  const summary = getSummary();
  const lower = question.toLowerCase();

  if (/(best|top|highest|strongest)/.test(lower)) {
    return `${summary.best.label} was the strongest month with ${formatMoney(summary.best.revenue)} in revenue, ${summary.bestShare}% of the quarter.`;
  }
  if (/(retention|churn)/.test(lower)) {
    return `Average retention was ${summary.retention.toFixed(1)}%, up ${summary.retentionDelta.toFixed(1)} points on Q2, and it improved every month.`;
  }
  if (/(total|revenue|sales|growth)/.test(lower)) {
    return `Q3 revenue was ${formatMoney(summary.revenue)}, up ${summary.growth.toFixed(1)}% on Q2.`;
  }
  if (/(returning|new customer|customers)/.test(lower)) {
    return `Returning customers placed ${summary.returningShare}% of all orders this quarter.`;
  }
  return 'I can answer questions about revenue, retention, the best month or returning customers in this file.';
};
