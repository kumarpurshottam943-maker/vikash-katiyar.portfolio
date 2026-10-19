'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Phone, Menu, X, Shield, ExternalLink } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Qualifications', href: '#qualifications' },
    { label: 'Proficiency', href: '#skills' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Vitae', href: '#vitae' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 dark:bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-black text-lg tracking-wider shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300 border border-amber-300/40">
              VK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Supervisor @ RSPL Ltd
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-slate-800/70 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call Action (Mobile/Desktop) */}
            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition shadow-sm"
              title="Direct Phone Call"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PORTFOLIO_DATA.personal.displayPhone}</span>
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Digital Resume</span>
              <span className="xs:hidden">Resume</span>
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-sky-400" />
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-950/95 border border-slate-800 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/80 rounded-xl transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 mt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Call: {PORTFOLIO_DATA.personal.displayPhone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
              >
                <FileText className="w-4 h-4" />
                View & Print Official Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
