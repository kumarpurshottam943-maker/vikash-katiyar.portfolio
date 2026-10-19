'use client';

import React from 'react';
import {
  GraduationCap,
  Scale,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  BookOpen,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export function AcademicQualifications() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="qualifications" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Educational Pedigree
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Academic Qualifications
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            A comprehensive scholarly foundation spanning corporate law, commercial finance, and foundational sciences.
          </p>
        </div>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, idx) => {
            const isLaw = edu.degree.includes('LLB');
            const isBCom = edu.degree.includes('B.Com');

            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between group ${
                  isLaw
                    ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 border-amber-500/30 hover:border-amber-400 shadow-xl shadow-amber-500/5'
                    : isBCom
                    ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 border-emerald-500/30 hover:border-emerald-400 shadow-xl shadow-emerald-500/5'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Card Header & Year Badge */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                          isLaw
                            ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                            : isBCom
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                            : 'bg-slate-800 border-slate-700 text-sky-400'
                        }`}
                      >
                        {isLaw ? (
                          <Scale className="w-6 h-6" />
                        ) : isBCom ? (
                          <Building2 className="w-6 h-6" />
                        ) : (
                          <BookOpen className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-xs text-slate-300 font-medium">{edu.field}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 shadow-sm">
                        {edu.year}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="mt-4 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400">
                    <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-2 pt-4 border-t border-slate-800/80">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-slate-400">Degree Classification: Full Regular</span>
                  <span className="text-emerald-400 font-bold">Graduated with Distinction</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
