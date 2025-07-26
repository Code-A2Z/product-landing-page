import React from 'react';
import Header from './components/header';
import HeroSection from './components/heroSection';
import TrustedBySection from './components/trustedSection';
import TransformSection from './components/transformSection';
import FeaturesSection from './components/featuresSection';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <TransformSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default App;