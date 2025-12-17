// Not explicitly requested for a product page, but a placeholder for future use.
// For a product page, features are typically part of the product description.
import React from 'react';
import { Zap, Shield, Award } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-xl border border-zinc-800 hover:border-indigo-600 transition-all transform hover:-translate-y-2">
            <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Blazing Fast Performance</h3>
            <p className="text-zinc-400">Our products are engineered for speed and efficiency, ensuring a seamless user experience.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg shadow-xl border border-zinc-800 hover:border-indigo-600 transition-all transform hover:-translate-y-2">
            <Shield className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Unrivaled Security</h3>
            <p className="text-zinc-400">We prioritize your data's safety with robust encryption and privacy features built-in.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg shadow-xl border border-zinc-800 hover:border-indigo-600 transition-all transform hover:-translate-y-2">
            <Award className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Award-Winning Design</h3>
            <p className="text-zinc-400">Aesthetics meet functionality in designs that are both beautiful and incredibly intuitive.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
