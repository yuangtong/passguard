import React, { useState } from 'react';
import { Menu, X, KeyRound, User, Lock, Info } from 'lucide-react';
import ComingSoon from './ComingSoon';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleFeatureClick = (title: string, description: string) => {
    setModalContent({ title, description });
    setShowModal(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b-4 border-black lg:hidden">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <KeyRound className="w-8 h-8 text-primary-blue" />
              <span className="ml-2 text-xl font-black">PassGuard</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 hover:bg-neutral-light rounded-lg transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t-2 border-neutral-light">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => handleFeatureClick(
                  'Password Manager',
                  'Store and manage your passwords securely. This feature is coming soon!'
                )}
                className="w-full flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-light text-gray-500"
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
                className="w-full flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-light text-gray-500"
                aria-label="Account Management (Coming Soon)"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
              <a
                href="#about"
                className="w-full flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-light"
                aria-label="About PassGuard"
                onClick={() => setIsOpen(false)}
              >
                <Info className="w-5 h-5" />
                <span>About</span>
              </a>
            </div>
          </div>
        )}
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