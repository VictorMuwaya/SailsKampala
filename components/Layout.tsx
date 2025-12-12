import React, { useState, useEffect } from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const NavItem: React.FC<{ to: string; label: string; onClick?: () => void }> = ({ to, label, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm tracking-widest uppercase font-semibold transition-colors duration-300 ${
          isActive ? 'text-sails-gold border-b-2 border-sails-gold' : 'text-slate-200 hover:text-sails-gold'
        }`
      }
    >
      {label}
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-sails-navy/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          <Link to="/" className="flex items-center space-x-2 group">
            <Anchor className="h-8 w-8 text-sails-gold group-hover:rotate-45 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight">SAILS</span>
              <span className="text-[10px] tracking-[0.2em] text-sails-gold uppercase hidden sm:block">Wine Boutique & Restaurant</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            <NavItem to="/" label="Home" />
            <NavItem to="/menu" label="Menu" />
            <NavItem to="/gallery" label="Atmosphere" />
            <NavItem to="/contact" label="Story & Contact" />
            <Link to="/contact" className="ml-4 px-6 py-2 bg-sails-gold text-white text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-sails-navy transition-colors duration-300">
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-sails-navy shadow-xl border-t border-slate-700 flex flex-col items-center py-8 space-y-6 animate-fadeIn">
            <NavItem to="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
            <NavItem to="/menu" label="Menu" onClick={() => setIsMobileMenuOpen(false)} />
            <NavItem to="/gallery" label="Atmosphere" onClick={() => setIsMobileMenuOpen(false)} />
            <NavItem to="/contact" label="Story & Contact" onClick={() => setIsMobileMenuOpen(false)} />
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 bg-sails-gold text-white text-sm font-bold uppercase tracking-wide"
            >
              Book Table
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sails-navy text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Anchor className="h-6 w-6 text-sails-gold" />
              <span className="font-serif text-xl font-bold">SAILS</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              An elegant escape in Luzira. Fine wines, continental flavors, and a convivial atmosphere by the lake breeze.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white font-serif text-lg">Contact Us</h3>
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="h-4 w-4 text-sails-gold" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-4 w-4 text-sails-gold" />
              <span>{RESTAURANT_INFO.phone}</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white font-serif text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sails-gold transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-sails-gold transition-colors"><Facebook className="h-6 w-6" /></a>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              © {new Date().getFullYear()} Sails Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};