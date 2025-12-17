import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-zinc-900 via-indigo-950 to-zinc-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Experience <span className="text-indigo-400">Innovation</span>
        </h1>
        <p className="text-lg text-zinc-300 mb-8 max-w-3xl mx-auto opacity-90">
          Discover cutting-edge electronics and elevate your digital lifestyle with our curated selection of premium products.
        </p>
        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Explore Products <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
