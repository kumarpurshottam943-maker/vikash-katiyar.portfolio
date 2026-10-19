'use client';

import React from 'react';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  FileText,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface FooterProps {
  onOpenResume: () => void;
}

export function Footer({ onOpenResume }: FooterProps) {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand & Executive Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-lg shadow-md">
                VK
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">{personal.name}</h3>
                <p className="text-xs text-amber-400 font-medium">Operations Supervisor • RSPL Limited</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Professional FMCG operations supervisor managing shift execution, workforce productivity, and statutory safety standards at RSPL Limited, Kanpur.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>View Formal Resume</span>
              </button>
              <a
                href={`https://wa.me/${personal.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition">About Executive Profile</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition">RSPL Limited Work Experience</a>
              </li>
              <li>
                <a href="#qualifications" className="hover:text-amber-400 transition">Academic Degrees (LLB & B.Com)</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-400 transition">Computer Proficiency & Tally</a>
              </li>
              <li>
                <a href="#competencies" className="hover:text-amber-400 transition">Supervisory Leadership Skills</a>
              </li>
              <li>
                <a href="#vitae" className="hover:text-amber-400 transition">Personal Vitae & Declaration</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Coordinates */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${personal.phone}`} className="hover:text-white transition">
                  {personal.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${personal.email}`} className="hover:text-white transition break-all">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {personal.name}. All Rights Reserved.</span>
            <span>•</span>
            <span className="text-slate-400">Operations Supervisor | RSPL Limited</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
