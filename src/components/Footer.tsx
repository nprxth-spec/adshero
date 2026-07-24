import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { contact } from '../content/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Desc */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 shadow-sm">
                <svg
                  className="w-5.5 h-5.5"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="footer-logo-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="footer-logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C5A880" />
                      <stop offset="100%" stopColor="#A68758" />
                    </linearGradient>
                  </defs>
                  <path d="M50 12 L82 28 V58 C82 76 50 88 50 88 C50 88 18 76 18 58 V28 L50 12 Z" stroke="url(#footer-logo-gold)" strokeWidth="4.5" strokeLinejoin="round"/>
                  <path d="M50 22 L72 65 H60 L50 45 L40 65 H28 L50 22 Z" fill="url(#footer-logo-primary)"/>
                  <path d="M50 35 L56 47 H44 Z" fill="url(#footer-logo-gold)"/>
                  <circle cx="50" cy="56" r="4.5" fill="url(#footer-logo-gold)"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-primary font-heading">
                Ads<span className="text-accent">Hero</span>
              </span>
            </Link>
            <div className="text-xs text-slate-500 leading-relaxed max-w-xs space-y-1">
              <p className="font-bold text-slate-700">{contact.info.companyName}</p>
              <p>Registration No: {contact.info.registrationNumber}</p>
              <p className="text-sm pt-1">
                Full-service digital marketing agency dedicated to scaling your business with measurable growth.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://line.me/R/ti/p/%40adshero`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-green-500 hover:border-green-300 transition-colors shadow-sm"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${contact.info.email}`}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-accent hover:border-accent/30 transition-colors shadow-sm"
              >
                <Mail size={16} />
              </a>
              <a
                href={`tel:${contact.info.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-accent hover:border-accent/30 transition-colors shadow-sm"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-primary tracking-wider uppercase mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Facebook & Google Ads', path: '/services#ads' },
                { label: 'SEO Optimization', path: '/services#seo' },
                { label: 'Social Media Marketing', path: '/services#social' },
                { label: 'Content Marketing', path: '/services#content' },
                { label: 'UX/UI Web Design', path: '/services#web-design' },
                { label: 'React/WordPress Development', path: '/services#web-dev' }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-500 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-primary tracking-wider uppercase mb-5">Company Info</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Works', path: '/works' },
                { label: 'All Services', path: '/services' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy' }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-500 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 className="text-sm font-bold text-primary tracking-wider uppercase mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-500">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{contact.info.addressEn}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-accent shrink-0" />
                <a href={`tel:${contact.info.phone.replace(/[^0-9+]/g, '')}`} className="text-sm hover:text-accent transition-colors">
                  {contact.info.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Mail size={18} className="text-accent shrink-0" />
                <a href={`mailto:${contact.info.email}`} className="text-sm hover:text-accent transition-colors">
                  {contact.info.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <MessageCircle size={18} className="text-accent shrink-0" />
                <a href="https://line.me/R/ti/p/%40adshero" target="_blank" rel="noreferrer" className="text-sm hover:text-accent transition-colors">
                  Line ID: {contact.info.line}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} AdsHero. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <span>|</span>
            <span className="text-slate-400">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
