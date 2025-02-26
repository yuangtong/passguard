import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PasswordGenerator from './components/PasswordGenerator';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Navigation />
      <Hero />
      <main className="container mx-auto py-16 px-4 flex-grow">
        <PasswordGenerator />
      </main>
      <About />
      <Footer />
    </div>
  );
}

export default App;