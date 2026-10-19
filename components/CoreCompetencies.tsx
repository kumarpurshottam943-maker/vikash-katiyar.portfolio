'use client';

import React, { useState } from 'react';
import {
  Users,
  MessageSquare,
  Clock,
  Lightbulb,
  Shield,
  Flame,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export function CoreCompetencies() {
  const { softSkills } = PORTFOLIO_DATA;
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const getSkillIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Clock className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Lightbulb className="w-5 h-5 text-indigo-400" />;
      default:
        return <Shield className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="competencies" className="py-20 relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            Executive Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Soft Skills & Core Leadership
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Operational excellence requires more than technical mastery — it demands people leadership, quick crisis resolution, and clear shift communication.
          </p>
        </div>

        {/* Competencies Progress Bars & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Progress Bars */}
          <div className="lg:col-span-7 space-y-5">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSkill(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedSkill === idx
                    ? 'bg-slate-900 border-amber-500/60 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                      {getSkillIcon(idx)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{skill.name}</h3>
                      <p className="text-[11px] text-slate-400">{skill.highlight}</p>
                    </div>
                  </div>
                  <span className="text-base font-black text-amber-400 font-mono">
                    {skill.score}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800 mt-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.score}%` }}
                  />
                </div>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Corporate Impact Spotlight */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Supervisory Impact Focus</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              How Supervisory Competency Drives FMCG Plant Success
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Managing high-speed FMCG manufacturing shifts requires proactive decision-making under intense time constraints. Here is how these core strengths translate to everyday shop-floor results:
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>50+ Cross-Functional Shift Coordination</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Synchronizing compounding operators, pouch-packing technicians, and forklift drivers for smooth material flow.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Labor Dispute De-Escalation</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Using formal LLB mediation techniques to resolve worker grievances before they lead to work stoppages or union friction.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Crisis Downtime Mitigation</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Rapid RCA (Root Cause Analysis) when sealing jaws overheat or filler nozzles jam, cutting average downtime by 20%.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Plant Motto
              </span>
              <p className="text-xs text-slate-300 italic mt-1 font-serif">
                &ldquo;Discipline in process execution is the only true guarantee of quality and safety.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
