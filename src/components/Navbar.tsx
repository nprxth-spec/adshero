import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Works', path: '/works' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glassmorphism shadow-sm py-4'
          : 'bg-white/40 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 shadow-sm group-hover:scale-105 transition-transform duration-200">
            <svg
              className="w-7 h-7"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logo-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5A880" />
                  <stop offset="100%" stopColor="#A68758" />
                </linearGradient>
              </defs>
              <path d="M50 12 L82 28 V58 C82 76 50 88 50 88 C50 88 18 76 18 58 V28 L50 12 Z" stroke="url(#logo-gold)" strokeWidth="4.5" strokeLinejoin="round"/>
              <path d="M50 22 L72 65 H60 L50 45 L40 65 H28 L50 22 Z" fill="url(#logo-primary)"/>
              <path d="M50 35 L56 47 H44 Z" fill="url(#logo-gold)"/>
              <circle cx="50" cy="56" r="4.5" fill="url(#logo-gold)"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary font-heading">
            Ads<span className="text-accent">Hero</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-accent'
                  : 'text-primary/75 hover:text-accent'
              }`}
            >
              <span>{link.label}</span>
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-accent transition-all duration-200 shadow-md shadow-primary/10 hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            Get Started
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-primary/80 hover:bg-slate-100 hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-[73px] left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-6 px-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                isActive(link.path)
                  ? 'bg-accent/5 text-accent'
                  : 'text-primary/80 hover:bg-slate-50 hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 px-4">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-accent-hover transition-colors shadow-md shadow-accent/20"
            >
              Get Started
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
