import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoon({ title, description, isOpen, onClose }: ComingSoonProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full border-4 border-black">
        <div className="flex items-center space-x-4 mb-4">
          <AlertCircle className="w-8 h-8 text-primary-yellow" />
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <button
          onClick={onClose}
          className="w-full bg-primary-blue text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}