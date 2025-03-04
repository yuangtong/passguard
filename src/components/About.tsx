import React from 'react';
import { Github, Bug } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-neutral-light py-8 sm:py-16 border-t-8 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black text-center">About PassGuard</h2>
          
          <div className="bg-white p-4 sm:p-8 border-4 border-black rounded-lg space-y-6">
            <p className="text-base sm:text-lg">
              PassGuard is an open-source password generator project designed to simplify and secure your online life.
              Built with modern web technologies and a focus on security, PassGuard helps you create strong, unique passwords
              for all your accounts.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">Current Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advanced password generation with customizable options</li>
                <li>Real-time password strength analysis</li>
                <li>Easy to read and pronounce modes</li>
                <li>Secure, client-side only operation</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">Coming Soon</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secure password storage and management</li>
                <li>User accounts with cloud sync</li>
                <li>Password health analysis</li>
                <li>Browser extension integration</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/yuangtong/passguard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-neutral-dark text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors touch-manipulation min-h-[44px]"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
              <a
                href="https://github.com/yuangtong/passguard/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors touch-manipulation min-h-[44px]"
              >
                <Bug className="w-5 h-5" />
                <span>Report Issue</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}