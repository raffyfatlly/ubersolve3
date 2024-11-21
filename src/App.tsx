import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BusinessTypes from './components/BusinessTypes';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-dark text-gray-100 font-sans">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <BusinessTypes />
        <Pricing />
        <CTA />
      </main>
      
      <footer className="bg-dark-lighter/50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="font-medium">© 2024 agentif.co by Ubersolve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}