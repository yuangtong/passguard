const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const easyToReadChars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
const easyToSayChars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';

export const generatePassword = (options: PasswordGeneratorOptions): string => {
  let chars = '';
  
  if (options.easyToRead) {
    return Array.from(crypto.getRandomValues(new Uint32Array(options.length)))
      .map((x) => easyToReadChars[x % easyToReadChars.length])
      .join('');
  }
  
  if (options.easyToSay) {
    return Array.from(crypto.getRandomValues(new Uint32Array(options.length)))
      .map((x) => easyToSayChars[x % easyToSayChars.length])
      .join('');
  }

  if (options.uppercase) chars += uppercaseChars;
  if (options.lowercase) chars += lowercaseChars;
  if (options.numbers) chars += numberChars;
  if (options.symbols) chars += symbolChars;

  if (chars === '') chars = lowercaseChars;

  return Array.from(crypto.getRandomValues(new Uint32Array(options.length)))
    .map((x) => chars[x % chars.length])
    .join('');
};

export const calculatePasswordStrength = (password: string): 'Weak' | 'Medium' | 'Strong' => {
  const length = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^A-Za-z0-9]/.test(password);

  const score = [length >= 8, hasUppercase, hasLowercase, hasNumbers, hasSymbols]
    .filter(Boolean).length;

  if (score <= 2) return 'Weak';
  if (score <= 4) return 'Medium';
  return 'Strong';
};