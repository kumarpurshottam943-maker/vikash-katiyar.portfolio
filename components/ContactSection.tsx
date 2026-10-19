'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  Building,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Career Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f59e0b', '#10b981', '#38bdf8'],
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            Connect Direct
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Available for executive operations leadership, plant management roles, and corporate consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <a
              href={`tel:${personal.phone}`}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all flex items-start gap-4 group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Direct Phone Call
                </span>
                <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors block mt-0.5">
                  {personal.displayPhone}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  Click to dial directly • Available 9 AM – 8 PM IST
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all flex items-start gap-4 group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Official Email Inbox
                </span>
                <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors block mt-0.5 break-all">
                  {personal.email}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  Prompt response within 24 business hours
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Residential Coordinates
                </span>
                <span className="text-sm font-bold text-white block mt-0.5">
                  {personal.location}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  Kanpur & Farrukhabad Industrial Belt • Open to Relocation
                </span>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <a
              href={`https://wa.me/${personal.whatsapp}?text=Hello%20Vikas%2C%20I%20am%20reaching%20out%20after%20viewing%20your%20executive%20portfolio.`}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600/20 via-emerald-600/10 to-transparent border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 flex items-center justify-between transition-all group shadow-md"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-bold text-white">Instant WhatsApp Chat</div>
                  <div className="text-[11px] text-emerald-300/80">Message Vikas directly on WhatsApp</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                <p className="text-sm text-slate-300 max-w-md mt-2">
                  Thank you, <strong className="text-white">{formData.name || 'Visitor'}</strong>. Your message has been received. Vikas will get back to you promptly at <span className="text-amber-400">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'Career Opportunity',
                      message: '',
                    });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white">Send Corporate Inquiry</h3>
                  <span className="text-xs text-amber-400 font-mono">Confidential & Direct</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 transition"
                    >
                      <option value="Career Opportunity">Executive Operations Role</option>
                      <option value="Plant Supervision">Plant & Shift Supervision</option>
                      <option value="Labor & Compliance">Legal & Compliance Advisory</option>
                      <option value="Interview Schedule">Interview Invitation</option>
                      <option value="General Connect">General Professional Connect</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the operational opportunity, role requirements, or question..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message Directly to Vikas</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
