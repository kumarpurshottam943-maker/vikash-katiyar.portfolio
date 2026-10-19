'use client';

import React, { useRef } from 'react';
import {
  X,
  Printer,
  Download,
  Share2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { personal, education, experience, skills, softSkills } = PORTFOLIO_DATA;
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 print:my-0 print:border-none print:shadow-none print:bg-white print:rounded-none">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
              CV
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Official Digital Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400">
                Print-ready official format conforming to verified credentials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-bold shadow-md transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div
          ref={printRef}
          className="p-6 sm:p-10 bg-white text-slate-900 print:p-8 select-text"
          style={{ minHeight: '800px', fontFamily: 'serif, system-ui' }}
        >
          {/* Header Row */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-slate-950 uppercase font-serif">
                VIKAS KATIYAR
              </h1>
              <p className="text-sm font-semibold tracking-wide text-slate-700 uppercase mt-1">
                OPERATIONS SUPERVISOR • RSPL LIMITED (FMCG)
              </p>
              <p className="text-xs text-slate-600 mt-2 max-w-lg leading-relaxed font-sans">
                Professional operations supervisor with over 4 years of continuous shift leadership at RSPL Limited, Kanpur. Dual qualification in Law (LLB) and Commerce (B.Com).
              </p>
            </div>

            {/* Contact Box on Right (Matches layout of formal physical resume) */}
            <div className="sm:text-right text-xs space-y-1 font-sans text-slate-700 sm:border-l-2 sm:border-slate-200 sm:pl-6 shrink-0">
              <div className="font-bold text-slate-900 tracking-wider uppercase mb-1">
                CONTACT DETAILS
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <span>{personal.displayPhone}</span>
                <Phone className="w-3.5 h-3.5 text-slate-600" />
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <span>{personal.email}</span>
                <Mail className="w-3.5 h-3.5 text-slate-600" />
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <span>Fatehgarh (Farrukhabad), U.P. - 209601</span>
                <MapPin className="w-3.5 h-3.5 text-slate-600" />
              </div>
            </div>
          </div>

          {/* 2-Column Grid Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
            {/* Left Main Column: Experience & Qualifications */}
            <div className="md:col-span-8 space-y-6">
              {/* Work Experience */}
              <section>
                <h2 className="text-sm font-extrabold text-slate-950 tracking-wider uppercase border-b border-slate-300 pb-1 mb-3 font-serif">
                  WORK EXPERIENCE
                </h2>
                <div className="space-y-3 font-sans">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-sm font-bold text-slate-900">
                        RSPL Limited, Kanpur
                      </h3>
                      <span className="text-xs font-semibold text-slate-600">
                        April 2022 – Present (4+ Years)
                      </span>
                    </div>
                    <div className="text-xs font-medium text-slate-700 italic">
                      Designation: Supervisor | Industry: FMCG
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs text-slate-700 space-y-1">
                      <li>Supervising continuous manufacturing, compounding, and automated packaging lines.</li>
                      <li>Leading a dedicated shift workforce of 40–60 line workers and machine operators.</li>
                      <li>Ensuring high Overall Equipment Effectiveness (OEE &gt; 94%) and minimal mechanical downtime.</li>
                      <li>Directing strict compliance with ISO and GMP batch quality standards.</li>
                      <li>Daily inventory and dispatch logging using TallyERP.9 and digital spreadsheets.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Academic Qualifications */}
              <section>
                <h2 className="text-sm font-extrabold text-slate-950 tracking-wider uppercase border-b border-slate-300 pb-1 mb-3 font-serif">
                  ACADEMIC QUALIFICATIONS
                </h2>
                <div className="space-y-2.5 font-sans text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-slate-900 font-bold">LLB (Bachelor of Laws)</strong>
                      <div className="text-slate-600">C.S.J.M. University, Kanpur</div>
                    </div>
                    <span className="font-semibold text-slate-700">Year 2023</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-slate-900 font-bold">B.Com (Bachelor of Commerce)</strong>
                      <div className="text-slate-600">C.S.J.M. University, Kanpur</div>
                    </div>
                    <span className="font-semibold text-slate-700">Year 2019</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-slate-900 font-bold">Intermediate (12th Standard)</strong>
                      <div className="text-slate-600">U.P. Board, Allahabad</div>
                    </div>
                    <span className="font-semibold text-slate-700">Year 2016</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-slate-900 font-bold">High School (10th Standard)</strong>
                      <div className="text-slate-600">U.P. Board, Allahabad</div>
                    </div>
                    <span className="font-semibold text-slate-700">Year 2014</span>
                  </div>
                </div>
              </section>

              {/* Computer Proficiency & Skills */}
              <section>
                <h2 className="text-sm font-extrabold text-slate-950 tracking-wider uppercase border-b border-slate-300 pb-1 mb-3 font-serif">
                  COMPUTER PROFICIENCY & SOFTWARE
                </h2>
                <div className="grid grid-cols-2 gap-2 text-xs font-sans text-slate-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Advance Diploma in Computer Application (ADCA)</li>
                    <li>Course on Computer Concept (CCC)</li>
                    <li>TallyERP.9 & Tally Prime</li>
                    <li>MS Office (Excel, Word, PowerPoint)</li>
                    <li>MS Windows Operating Systems</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Adobe Photoshop</li>
                    <li>Corel Draw</li>
                    <li>PageMaker</li>
                    <li>Fast English & Hindi Typing</li>
                    <li>Computer Fundamentals & Internet</li>
                  </ul>
                </div>
              </section>

              {/* Soft Skills */}
              <section>
                <h2 className="text-sm font-extrabold text-slate-950 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-serif">
                  SOFT SKILLS & LEADERSHIP
                </h2>
                <div className="flex flex-wrap gap-2 text-xs font-sans text-slate-800">
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 rounded font-medium">Teamwork & Collaboration</span>
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 rounded font-medium">Advanced Communication Skills</span>
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 rounded font-medium">Time Management</span>
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 rounded font-medium">Complex Problem-Solving</span>
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 rounded font-medium">Labor Compliance & Safety</span>
                </div>
              </section>
            </div>

            {/* Right Column: Personal Vitae & Declaration */}
            <div className="md:col-span-4 space-y-6">
              {/* Personal Vitae Box */}
              <section className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h2 className="text-xs font-extrabold text-slate-950 tracking-wider uppercase border-b border-slate-300 pb-1 mb-3 font-serif">
                  PERSONAL VITAE
                </h2>
                <div className="space-y-2 text-xs font-sans text-slate-700">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Father&apos;s Name</span>
                    <strong className="text-slate-900">{personal.fatherName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Gender</span>
                    <span className="text-slate-900 font-semibold">{personal.gender}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Marital Status</span>
                    <span className="text-slate-900 font-semibold">{personal.maritalStatus}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Date of Birth</span>
                    <span className="text-slate-900 font-semibold">{personal.dob}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Nationality</span>
                    <span className="text-slate-900 font-semibold">{personal.nationality}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Languages Known</span>
                    <span className="text-slate-900 font-semibold">Hindi & English</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Address</span>
                    <span className="text-slate-900 font-semibold">Fatehgarh (Farrukhabad)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Pin Code</span>
                    <span className="text-slate-900 font-semibold">209601</span>
                  </div>
                </div>
              </section>

              {/* Official Declaration */}
              <section className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h2 className="text-xs font-extrabold text-slate-950 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-serif">
                  DECLARATION
                </h2>
                <p className="text-[11px] text-slate-700 italic font-serif leading-relaxed">
                  &ldquo;{personal.declaration}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-sans text-slate-800">
                  <div className="font-bold text-slate-900">Vikas Katiyar</div>
                  <div className="text-[10px] text-slate-600">Kanpur, Uttar Pradesh</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
