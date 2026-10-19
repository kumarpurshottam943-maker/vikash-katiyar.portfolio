'use client';

import React from 'react';
import {
  Factory,
  Scale,
  Award,
  Users,
  ShieldCheck,
  TrendingUp,
  Cpu,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export function AboutSummary() {
  const { personal, keyStrengths } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            Executive Summary
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Leadership Rooted in <span className="text-amber-400">Operations</span> & <span className="text-emerald-400">Governance</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Where shop-floor manufacturing rigor meets commercial precision and corporate legal compliance.
          </p>
        </div>

        {/* Executive Narrative & Value Proposition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Professional Profile // Overview
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                  Operations & Plant Supervisory
                </span>
              </div>

              <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As an Operations Supervisor at <strong className="text-white">RSPL Limited, Kanpur</strong> (a premier FMCG conglomerate behind renowned household brands), I direct fast-moving production lines, oversee shifts of up to <strong className="text-white">50+ personnel</strong>, and guarantee that daily production quotas are met under strict quality and safety parameters.
                </p>
                <p>
                  What uniquely sets my operational leadership apart is my comprehensive academic dual qualification:
                  holding both a <strong className="text-amber-300">Bachelor of Commerce (B.Com)</strong> and a professional <strong className="text-emerald-300">Bachelor of Laws (LLB)</strong> from C.S.J.M. University, Kanpur.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  This rare synergy equips me to manage high-stress shop floors with sharp financial cost control, precise inventory accounting, and proactive adherence to labor laws, safety statutes, and environmental regulations.
                </p>
              </div>

              {/* Core Attributes Bullets */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white">Shift Accountability:</strong> Proven record of 98%+ line availability and minimal downtime.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white">Labor & Compliance:</strong> LLB insights applied to workforce relations & factory safety laws.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white">Digital Efficiency:</strong> ADCA & CCC certified; daily logging via Tally and Excel modeling.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white">Cross-Department Liaison:</strong> Seamless collaboration with QA, Maintenance, and Logistics.
                  </span>
                </div>
              </div>
            </div>

            {/* Official Declaration Snippet */}
            <div className="mt-6 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-slate-300">Official Profile Verified</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Kanpur, Uttar Pradesh</span>
            </div>
          </div>

          {/* Right Column: 4 Strategic Competency Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {keyStrengths.map((item, idx) => {
              const IconComponent =
                idx === 0
                  ? Factory
                  : idx === 1
                  ? Scale
                  : idx === 2
                  ? Cpu
                  : ShieldCheck;

              return (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:text-amber-300 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-13">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
