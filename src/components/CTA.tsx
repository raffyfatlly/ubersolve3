import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Communication?</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Join the first 100 forward-thinking businesses transforming their WhatsApp communication effortlessly. Simply WhatsApp us your website address, and we'll set everything up for you—completely free. No coding skills or credit card required!
        </p>
        <a 
          href="https://wa.link/f0ui3h" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
        >
          Start Your Free Trial (14 days) <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}