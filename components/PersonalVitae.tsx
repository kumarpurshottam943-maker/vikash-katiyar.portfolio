'use client';

import React, { useState } from 'react';
import {
  User,
  Calendar,
  Globe,
  Languages,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  FileCheck2,
  FileText,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface PersonalVitaeProps {
  onOpenResume: () => void;
}

export function PersonalVitae({ onOpenResume }: PersonalVitaeProps) {
  const { personal } = PORTFOLIO_DATA;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const details = [
    { label: "Father's Name", value: personal.fatherName, icon: User },
    { label: 'Date of Birth', value: personal.dob, icon: Calendar },
    { label: 'Gender', value: personal.gender, icon: User },
    { label: 'Marital Status', value: personal.maritalStatus, icon: CheckCircle2 },
    { label: 'Nationality', value: personal.nationality, icon: Globe },
    { label: 'Languages Known', value: 'Hindi & English', icon: Languages },
    { label: 'Permanent Address', value: 'Fatehgarh (Farrukhabad), Uttar Pradesh', icon: MapPin },
    { label: 'Postal Pin Code', value: '209601', icon: MapPin },
  ];

  return (
    <section id="vitae" className="py-20 relative bg-slate-900/60 dark:bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <FileCheck2 className="w-3.5 h-3.5" />
            Official Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Personal Vitae & Verification
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Formal identity particulars, residency coordinates, and solemn declaration of authenticity.
          </p>
        </div>

        {/* Vitae Master Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top Decorative Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-xl">
                VK
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Curriculum Vitae Record: {personal.name}
                </h3>
                <p className="text-xs text-slate-400">
                  Government Validated Identification & Personal Profile
                </p>
              </div>
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Open Formal PDF Layout</span>
            </button>
          </div>

          {/* Details 2-Column Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-slate-100 block mt-0.5">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(item.value, item.label)}
                    title={`Copy ${item.label}`}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition"
                  >
                    {copiedKey === item.label ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Formal Solemn Declaration Box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-950/80 to-emerald-500/10 border border-amber-500/30">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                Official Declaration
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed">
              &ldquo;{personal.declaration}&rdquo;
            </p>

            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span className="text-slate-300 font-medium">Place: Kanpur / Fatehgarh, U.P.</span>
              </div>
              <div className="font-mono text-amber-400 font-bold">
                Signed Digitally: Vikas Katiyar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
