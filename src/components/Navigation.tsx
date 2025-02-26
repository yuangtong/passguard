import React, { useState } from 'react';
import { KeyRound, User, Lock, Info } from 'lucide-react';
import ComingSoon from './ComingSoon';
import MobileNav from './MobileNav';

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleFeatureClick = (title: string, description: string) => {
    setModalContent({ title, description });
    setShowModal(true);
  };

  return (
    <>
      <MobileNav />
      <nav className="hidden lg:block bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <KeyRound className="w-8 h-8 text-primary-blue" />
              <span className="ml-2 text-xl font-black">PassGuard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleFeatureClick(
                  'Password Manager',
                  'Store and manage your passwords securely. This feature is coming soon!'
                )}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-500"
                aria-label="Password Manager (Coming Soon)"
              >
                <Lock className="w-5 h-5" />
                <span>Passwords</span>
              </button>
              <button
                onClick={() => handleFeatureClick(
                  'Account Management',
                  'Create an account to access additional features. Coming in a future update!'
                )}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-500"
                aria-label="Account Management (Coming Soon)"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
              <a
                href="#about"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
                aria-label="About PassGuard"
              >
                <Info className="w-5 h-5" />
                <span>About</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <ComingSoon
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        description={modalContent.description}
      />
    </>
  );
}