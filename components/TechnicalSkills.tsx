'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Award,
  ShieldCheck,
  Database,
  FileSpreadsheet,
  Palette,
  PenTool,
  BookOpen,
  Monitor,
  Keyboard,
  Globe,
  Search,
  Check,
} from 'lucide-react';
import { PORTFOLIO_DATA, TechnicalSkill } from '@/lib/portfolio-data';

export function TechnicalSkills() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Certifications & ERP', 'Design & Publishing', 'Office & Tools', 'Core Skills'];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-sky-400" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-400" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-slate-300" />;
      case 'Keyboard':
        return <Keyboard className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-400" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-900/40 dark:bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Digital Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Computer Proficiency & Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            From industrial ERP inventory logging (TallyERP.9) to desktop publishing, office automation, and bilingual typing.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search software or skill..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        skill.level === 'Expert'
                          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          : skill.level === 'Advanced'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mt-0.5">
                  {skill.category}
                </span>

                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  Production Ready
                </span>
                <span className="font-mono text-slate-400">
                  {skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '88%' : '80%'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Typing Speed Callout Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Keyboard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Bilingual Fast Typing: English & Hindi
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                High-speed touch typing for fast MIS shift documentation, legal notices, and official government correspondence.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xl font-black text-amber-400">English</span>
              <span className="block text-[10px] text-slate-400 font-mono">Fast Touch Speed</span>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xl font-black text-emerald-400">Hindi</span>
              <span className="block text-[10px] text-slate-400 font-mono">Unicode / KrutiDev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
