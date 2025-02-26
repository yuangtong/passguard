import React from 'react';
import { Shield, Key, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-primary-blue text-white py-8 sm:py-16 border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Simplify Your Security with PassGuard
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Generate strong, customizable passwords instantly. Your first step towards better online security.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 max-w-3xl mx-auto">
            <Feature icon={Shield} title="Secure" description="Military-grade randomization" />
            <Feature icon={Key} title="Customizable" description="Tailor to your needs" />
            <Feature icon={Lock} title="Private" description="No data storage" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 p-4 hover:bg-black/10 rounded-lg transition-colors">
      <Icon className="w-8 h-8" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}