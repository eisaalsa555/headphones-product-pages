import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-zinc-300">
        {/* Company Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-2">ElectroMart</h4>
          <p className="text-zinc-400 text-sm">Your one-stop shop for the latest and greatest in electronics. Innovation at your fingertips.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Twitter" className="text-zinc-400 hover:text-indigo-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook" className="text-zinc-400 hover:text-indigo-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-zinc-400 hover:text-indigo-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-zinc-400 hover:text-indigo-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                Shop All
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                Sale
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Customer Service</h4>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors text-zinc-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
          <address className="not-italic space-y-3">
            <p className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-5 h-5 text-indigo-400" /> 123 Tech Avenue, Silicon Valley, CA
            </p>
            <p className="flex items-center gap-2 text-zinc-400">
              <Phone className="w-5 h-5 text-indigo-400" /> (123) 456-7890
            </p>
            <p className="flex items-center gap-2 text-zinc-400">
              <Mail className="w-5 h-5 text-indigo-400" /> support@electromart.com
            </p>
          </address>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-zinc-500 border-t border-zinc-800 pt-8">
        &copy; {new Date().getFullYear()} ElectroMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
