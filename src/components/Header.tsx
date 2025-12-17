import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-950 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
          ElectroMart
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium">
            Shop
          </Link>
          <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium">
            Categories
          </Link>
          <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium">
            About Us
          </Link>
          <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-zinc-800 transition-colors group">
            <Search className="w-6 h-6 text-zinc-300 group-hover:text-indigo-400" />
          </button>
          <button aria-label="User Account" className="p-2 rounded-full hover:bg-zinc-800 transition-colors group">
            <User className="w-6 h-6 text-zinc-300 group-hover:text-indigo-400" />
          </button>
          <button aria-label="Shopping Cart" className="p-2 rounded-full hover:bg-zinc-800 transition-colors group">
            <ShoppingCart className="w-6 h-6 text-zinc-300 group-hover:text-indigo-400" />
          </button>
          <button 
            aria-label="Toggle Mobile Menu" 
            className="md:hidden p-2 rounded-full hover:bg-zinc-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-zinc-300" /> : <Menu className="w-6 h-6 text-zinc-300" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 absolute w-full left-0 py-4 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Categories
            </Link>
            <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="#" className="text-zinc-300 hover:text-indigo-400 transition-colors font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
