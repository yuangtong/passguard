import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-6 border-t-4 border-black">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center space-x-2 text-sm sm:text-base">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-primary-red fill-current" />
          <span>using React</span>
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} PassGuard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}