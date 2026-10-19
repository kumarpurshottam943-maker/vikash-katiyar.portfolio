'use client';

import React from 'react';
import {
  FileText,
  Mail,
  ArrowDown,
  Phone,
  MapPin,
  Briefcase,
  CheckCircle2,
  ShieldAlert,
  Award,
  Sparkles,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { ProfileFrame } from './ProfileFrame';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { personal, stats } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Gradients & Executive Grid */}
      <div className="absolute inset-0 bg-radial-at-t from-slate-900/60 via-slate-950/80 to-[#030712] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Details & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Corporate Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">
                Active Operations Supervisor • <span className="text-amber-400 font-bold">RSPL Limited</span>
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              <span className="block text-slate-100">{personal.name}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 text-2xl sm:text-3xl md:text-4xl mt-2 font-bold tracking-normal">
                Operations Supervisor & Corporate Professional
              </span>
            </h1>

            {/* Corporate Subtitle / Tagline */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Supervising high-speed FMCG manufacturing lines at{' '}
              <strong className="text-white font-semibold">RSPL Limited, Kanpur</strong> with over{' '}
              <span className="text-amber-400 font-semibold">{personal.experienceYears}</span> of continuous
              operational leadership. Backed by a powerful dual foundation in{' '}
              <strong className="text-white font-semibold">Commerce (B.Com)</strong> and{' '}
              <strong className="text-white font-semibold">Law (LLB)</strong>.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start items-center gap-3 text-xs text-slate-400">
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.displayPhone}</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{personal.email}</span>
              </a>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Fatehgarh (Farrukhabad), U.P.</span>
              </div>
            </div>

            {/* CTA Buttons Required: "Download Resume", "Get in Touch", and "View Experience" */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-3.5 w-full">
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Get in Touch</span>
              </a>

              <a
                href="#experience"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition"
              >
                <Briefcase className="w-4 h-4 text-sky-400" />
                <span>View Experience</span>
              </a>

              {/* WhatsApp Quick Connect */}
              <a
                href={`https://wa.me/${personal.whatsapp}?text=Hello%20Vikas%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs transition"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition"
                >
                  <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Photo in Glowing Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileFrame
              name={personal.name}
              title={personal.title}
              company={personal.company}
              onOpenResume={onOpenResume}
            />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400 transition"
        >
          <span>Explore Professional Profile</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
