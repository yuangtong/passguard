import React, { useState } from 'react';
import { Copy, RefreshCw, Save, Check } from 'lucide-react';
import { generatePassword, calculatePasswordStrength } from '../utils/passwordGenerator';
import type { PasswordGeneratorOptions } from '../types';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState<PasswordGeneratorOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    easyToRead: false,
    easyToSay: false,
  });

  const handleGenerate = () => {
    setPassword(generatePassword(options));
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const strength = calculatePasswordStrength(password);
  const strengthColors = {
    Weak: 'from-primary-red to-primary-orange',
    Medium: 'from-primary-yellow to-primary-green',
    Strong: 'from-primary-green to-secondary-teal',
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8 bg-white border-4 border-black rounded-lg shadow-lg">
      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 pr-24 text-base sm:text-lg border-4 border-black rounded-lg font-mono bg-neutral-light focus:outline-none focus:ring-2 focus:ring-primary-blue"
            placeholder="Click generate to create a password"
            aria-label="Generated password"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-2">
            <button
              onClick={handleCopy}
              className="p-3 hover:bg-neutral-light rounded-lg transition-colors touch-manipulation"
              title="Copy to clipboard"
              aria-label="Copy password to clipboard"
            >
              {copied ? (
                <Check className="w-6 h-6 text-primary-green" />
              ) : (
                <Copy className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={handleGenerate}
              className="p-3 hover:bg-neutral-light rounded-lg transition-colors touch-manipulation"
              title="Generate new password"
              aria-label="Generate new password"
            >
              <RefreshCw className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold">Password Strength</span>
            <span className="font-bold text-sm px-3 py-1 rounded-full bg-neutral-light">
              {strength}
            </span>
          </div>
          <div className="h-3 bg-neutral-light rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${strengthColors[strength]} transition-all`}
              style={{ width: password ? '100%' : '0%' }}
              role="progressbar"
              aria-valuenow={password ? 100 : 0}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-bold">Length: {options.length}</label>
            <input
              type="range"
              min="6"
              max="50"
              value={options.length}
              onChange={(e) => setOptions({ ...options, length: +e.target.value })}
              className="w-full h-3 bg-neutral-light rounded-lg appearance-none cursor-pointer touch-manipulation [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-primary-blue [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black"
              aria-label="Password length"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'uppercase', label: 'Uppercase (A-Z)' },
              { key: 'lowercase', label: 'Lowercase (a-z)' },
              { key: 'numbers', label: 'Numbers (0-9)' },
              { key: 'symbols', label: 'Symbols (!@#$)' },
              { key: 'easyToRead', label: 'Easy to Read' },
              { key: 'easyToSay', label: 'Easy to Say' },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center space-x-2 p-2 hover:bg-neutral-light rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={options[key as keyof PasswordGeneratorOptions]}
                  onChange={(e) =>
                    setOptions({ ...options, [key]: e.target.checked })
                  }
                  className="w-6 h-6 border-2 border-black rounded checked:bg-primary-blue checked:border-primary-blue focus:ring-2 focus:ring-primary-blue"
                  aria-label={label}
                />
                <span className="select-none">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full py-4 bg-primary-blue text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors transform hover:scale-[1.02] border-2 border-black touch-manipulation min-h-[44px]"
          aria-label="Generate password"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}