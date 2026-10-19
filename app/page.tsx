'use client';

import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSummary } from '@/components/AboutSummary';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { AcademicQualifications } from '@/components/AcademicQualifications';
import { TechnicalSkills } from '@/components/TechnicalSkills';
import { CoreCompetencies } from '@/components/CoreCompetencies';
import { PersonalVitae } from '@/components/PersonalVitae';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#070c18] dark:bg-[#050811] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 transition-colors duration-300">
        {/* Sticky Corporate Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section with Glowing Profile Frame & CTAs */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* Executive Summary & Dual Acumen (Operations + LLB/B.Com) */}
          <AboutSummary />

          {/* Professional Work Experience at RSPL Limited */}
          <ExperienceTimeline />

          {/* Academic Qualifications (LLB, B.Com, 12th, 10th) */}
          <AcademicQualifications />

          {/* Computer Proficiency & Technical Skills Badge Grid */}
          <TechnicalSkills />

          {/* Soft Skills & Supervisory Competencies */}
          <CoreCompetencies />

          {/* Personal Vitae Details & Official Declaration */}
          <PersonalVitae onOpenResume={() => setIsResumeOpen(true)} />

          {/* Functional Contact Section */}
          <ContactSection />
        </main>

        {/* Corporate Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Digital Curriculum Vitae Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
