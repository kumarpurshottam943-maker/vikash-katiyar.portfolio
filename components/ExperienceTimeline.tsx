'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Clock,
  ShieldCheck,
  ChevronRight,
  Factory,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'responsibilities' | 'achievements' | 'metrics' | 'routine'>('responsibilities');
  const exp = PORTFOLIO_DATA.experience[0];

  const shiftRoutine = [
    {
      time: 'Shift Handover & Inspection',
      title: 'Line Readiness & Safety Briefing',
      detail: 'Conducting visual audit of automated machinery, inspecting safety guards, and running daily 10-minute toolbox talk for 50+ operators.',
    },
    {
      time: 'Production Launch & Throughput Monitoring',
      title: 'Batch Execution & Speed Calibration',
      detail: 'Initiating formulation feed, checking packing line synchronization, and tracking units-per-minute (UPM) to avert line bottlenecks.',
    },
    {
      time: 'Mid-Shift Quality & Compliance Audit',
      title: 'Statistical Sample Verification',
      detail: 'Testing packaging seal strength, batch weight tolerances, and moisture parameters; enforcing ISO & GMP compliance on the line.',
    },
    {
      time: 'Shift Closing & Reconciliation',
      title: 'Inventory & MIS Dispatch Reporting',
      detail: 'Reconciling finished goods against raw material consumption in Tally/ERP, logging maintenance flags, and smooth shift handover.',
    },
  ];

  return (
    <section id="experience" className="py-20 relative bg-slate-900/40 dark:bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional Work Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Over 4 years of uninterrupted leadership across fast-paced FMCG manufacturing and plant operations.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Top Decorative Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 shrink-0 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Factory className="w-7 h-7 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    Current Role (4+ Years)
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span className="text-amber-400 font-bold text-sm tracking-wide">{exp.company}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Industry Pill & Quick Stats */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-mono text-slate-400 uppercase">Sector</div>
                <div className="text-xs font-bold text-slate-200">{exp.industry}</div>
              </div>
              <div className="h-10 w-px bg-slate-800 hidden sm:block" />
              <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200">
                Shift In-Charge
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2 pb-2">
            {[
              { id: 'responsibilities', label: 'Key Responsibilities', count: exp.responsibilities.length },
              { id: 'achievements', label: 'Operational Achievements', count: exp.achievements.length },
              { id: 'metrics', label: 'Performance Metrics', count: exp.metrics.length },
              { id: 'routine', label: 'Shift Workflow Routine', count: shiftRoutine.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-102'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    activeTab === tab.id ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="mt-6 min-h-[260px]">
            {activeTab === 'responsibilities' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                {exp.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                {exp.achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-emerald-500/20 hover:border-emerald-500/40 transition flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">{ach}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-300">
                {exp.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-b from-slate-950/80 to-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-xs font-bold text-slate-300 mt-2">{metric.label}</span>
                    <span className="text-[10px] text-slate-500 mt-1">RSPL Kanpur Operations</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'routine' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                {shiftRoutine.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0 text-xs font-bold">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                          {step.time}
                        </div>
                        <h4 className="text-sm font-bold text-white mt-0.5">{step.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">{step.detail}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[10px] text-slate-300 font-semibold self-start sm:self-center shrink-0">
                      Standard Operating Protocol
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Technologies / Systems Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase">Operational Tools:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-semibold text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-xs text-slate-500 italic">
              RSPL Limited, Kanpur • 2022 – 2026+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
