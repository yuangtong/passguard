export interface Password {
  id: string;
  serviceName: string;
  password: string;
  category: 'Personal' | 'Work' | 'Banking' | 'Social' | 'Other';
  notes?: string;
  createdAt: Date;
}

export interface PasswordGeneratorOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  easyToRead: boolean;
  easyToSay: boolean;
}

export interface User {
  username: string;
  email: string;
  isLoggedIn: boolean;
}