const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (value) => EMAIL_PATTERN.test(value.trim());

export const hasMinLength = (value, length = 8) => value.length >= length;

export const hasUppercaseAndNumber = (value) => /[A-Z]/.test(value) && /\d/.test(value);

export const getPasswordChecks = (password, confirm = '') => ({
  length: hasMinLength(password),
  mixed: hasUppercaseAndNumber(password),
  match: password.length > 0 && password === confirm,
});

export const formatTimer = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};
