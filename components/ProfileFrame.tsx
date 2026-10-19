'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Sparkles, Camera, Upload, Eye, CheckCircle2 } from 'lucide-react';

interface ProfileFrameProps {
  name: string;
  title: string;
  company: string;
  onOpenResume?: () => void;
}

export function ProfileFrame({ name, title, company }: ProfileFrameProps) {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('vk_profile_photo');
      } catch {
        return null;
      }
    }
    return null;
  });
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomPhoto(result);
      try {
        localStorage.setItem('vk_profile_photo', result);
      } catch {
        // quota limit
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    try {
      localStorage.removeItem('vk_profile_photo');
    } catch {
      // ignore
    }
  };

  return (
    <>
      <div className="relative group mx-auto w-full max-w-[380px] sm:max-w-[420px]">
        {/* Ambient layered glows - Deep Navy & Subtle Gold/Emerald */}
        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/25 via-emerald-500/20 to-sky-600/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-amber-500/40 via-slate-400/20 to-emerald-400/40 rounded-3xl opacity-80 group-hover:opacity-100 transition duration-500" />

        {/* Main Card Container */}
        <div className="relative rounded-3xl p-3 sm:p-4 bg-slate-900/95 dark:bg-slate-950/95 border border-slate-700/60 dark:border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Subtle Top Metallic Accent Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent rounded-full mb-3" />

          {/* Photo Viewport */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group/photo">
            {customPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={customPhoto}
                alt={name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
              />
            ) : (
              /* High-fidelity executive illustrated portrait representation of Vikas Katiyar */
              <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-b from-slate-900 via-[#0a1428] to-[#040813]">
                {/* Office background representation */}
                <div className="absolute inset-0 opacity-40">
                  {/* Modern wall art with "DISCIPLINE BUILDS FREEDOM" subtle graphic */}
                  <div className="absolute top-4 left-4 w-28 h-36 border border-slate-700/50 bg-slate-800/40 rounded p-1.5 flex flex-col justify-between">
                    <span className="text-[7px] font-mono tracking-widest text-slate-400 uppercase">
                      DISCIPLINE BUILDS FREEDOM
                    </span>
                    <div className="h-12 w-full bg-gradient-to-t from-slate-700/60 to-transparent rounded" />
                  </div>
                  {/* Shelf with warm lamp lighting & books */}
                  <div className="absolute top-8 right-3 w-32 h-20 border-b border-amber-500/30 flex items-end justify-end gap-1.5 pb-1">
                    <div className="w-3.5 h-10 bg-amber-600/40 rounded-sm" />
                    <div className="w-3 h-12 bg-emerald-600/30 rounded-sm" />
                    <div className="w-4 h-8 bg-sky-600/40 rounded-sm" />
                    <div className="w-5 h-5 rounded-full bg-amber-300/40 blur-xs" />
                  </div>
                  {/* Indoor plant silhouette */}
                  <div className="absolute bottom-12 left-2 w-16 h-24 opacity-30 flex flex-col justify-end">
                    <div className="w-6 h-6 rounded-full bg-emerald-700/40" />
                    <div className="w-8 h-8 rounded-full bg-emerald-600/30 -mt-2" />
                  </div>
                </div>

                {/* Stylized portrait vector */}
                <svg
                  className="relative z-10 w-full h-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#d97706" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f5c29d" />
                      <stop offset="100%" stopColor="#d99973" />
                    </linearGradient>
                    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1a1c23" />
                      <stop offset="100%" stopColor="#0d0e12" />
                    </linearGradient>
                    <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e2430" />
                      <stop offset="100%" stopColor="#0f131a" />
                    </linearGradient>
                    <linearGradient id="goldFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>

                  {/* Warm back ambient light */}
                  <circle cx="200" cy="180" r="140" fill="url(#deskGlow)" />

                  {/* Shoulders & Executive Black Jacket */}
                  <path
                    d="M70 380 C80 300 130 260 170 255 L200 280 L230 255 C270 260 320 300 330 380 Z"
                    fill="url(#jacketGrad)"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  {/* Jacket zipper & collar details */}
                  <path d="M200 280 L200 380" stroke="#475569" strokeWidth="2.5" strokeDasharray="3 2" />
                  <path d="M165 260 L195 310 L205 310 L235 260" stroke="#334155" strokeWidth="2" fill="#090d14" />

                  {/* "Better Version of Myself" subtle shirt logo */}
                  <text x="200" y="340" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace" opacity="0.7">
                    BETTER VERSION
                  </text>
                  <text x="200" y="350" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace" opacity="0.6">
                    OF MYSELF
                  </text>

                  {/* Neck */}
                  <path d="M180 220 L180 265 C180 270 220 270 220 265 L220 220 Z" fill="#e0a07a" />

                  {/* Head & Face Contour */}
                  <path
                    d="M150 160 C150 115 170 95 200 95 C230 95 250 115 250 160 C250 205 235 235 200 235 C165 235 150 205 150 160 Z"
                    fill="url(#skinGrad)"
                  />

                  {/* Stylish Modern Groomed Pompadour Hair */}
                  <path
                    d="M142 145 C140 100 160 55 200 52 C245 50 262 90 258 140 C254 130 248 115 238 105 C215 95 180 98 160 110 C148 120 144 132 142 145 Z"
                    fill="url(#hairGrad)"
                  />
                  {/* Subtle hair texture highlights */}
                  <path d="M175 62 Q200 58 225 66" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M165 78 Q195 72 235 80" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Ears */}
                  <ellipse cx="148" cy="165" rx="6" ry="12" fill="#d99973" />
                  <ellipse cx="252" cy="165" rx="6" ry="12" fill="#d99973" />

                  {/* Groomed Eyebrows */}
                  <path d="M164 140 Q178 135 190 140" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
                  <path d="M210 140 Q222 135 236 140" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />

                  {/* Eyes with friendly expression */}
                  <ellipse cx="177" cy="152" rx="4" ry="3" fill="#111827" />
                  <circle cx="178" cy="151" r="1" fill="#ffffff" />
                  <ellipse cx="223" cy="152" rx="4" ry="3" fill="#111827" />
                  <circle cx="224" cy="151" r="1" fill="#ffffff" />

                  {/* Nose */}
                  <path d="M200 148 L197 175 Q200 178 205 175" stroke="#c4815a" strokeWidth="1.75" strokeLinecap="round" fill="none" />

                  {/* Mustache & Trimmed Goatee */}
                  <path d="M185 187 Q200 184 215 187" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Smile */}
                  <path d="M188 195 Q200 202 212 195" stroke="#991b1b" strokeWidth="1.5" fill="none" />
                  {/* Goatee chin patch */}
                  <ellipse cx="200" cy="214" rx="7" ry="5" fill="#1f2937" />

                  {/* Sleek Modern Aviator Glasses (Wire-frame) */}
                  <rect
                    x="160"
                    y="142"
                    width="34"
                    height="28"
                    rx="8"
                    stroke="url(#goldFrameGrad)"
                    strokeWidth="1.8"
                    fill="rgba(255, 255, 255, 0.08)"
                  />
                  <rect
                    x="206"
                    y="142"
                    width="34"
                    height="28"
                    rx="8"
                    stroke="url(#goldFrameGrad)"
                    strokeWidth="1.8"
                    fill="rgba(255, 255, 255, 0.08)"
                  />
                  {/* Double top bridge */}
                  <line x1="194" y1="147" x2="206" y2="147" stroke="url(#goldFrameGrad)" strokeWidth="1.8" />
                  <line x1="194" y1="152" x2="206" y2="152" stroke="url(#goldFrameGrad)" strokeWidth="1.5" />
                  {/* Glass Glare */}
                  <line x1="164" y1="146" x2="178" y2="160" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
                  <line x1="210" y1="146" x2="224" y2="160" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

                  {/* Foreground Desk Accessories */}
                  {/* Watch on wrist gesture */}
                  <rect x="260" y="325" width="22" height="14" rx="4" fill="#0f172a" stroke="#d97706" strokeWidth="1" />
                  <circle cx="271" cy="332" r="5" fill="#1e293b" />
                  {/* Coffee mug at corner */}
                  <path d="M40 340 L50 395 L95 395 L105 340 Z" fill="#0b1120" stroke="#334155" strokeWidth="1.5" />
                  <text x="73" y="365" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontFamily="sans-serif">
                    Good Things
                  </text>
                  <text x="73" y="375" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontFamily="sans-serif">
                    Take Time
                  </text>
                </svg>
              </div>
            )}

            {/* Floating Live Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-medium text-emerald-300 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 -ml-3" />
              <span>Shift Active • RSPL</span>
            </div>

            {/* Quick Actions Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-100 text-xs font-semibold backdrop-blur-sm border border-slate-600 transition"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  View Portrait
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload / Replace Photo"
                  className="flex items-center justify-center p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold shadow-md transition"
                >
                  <Upload className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Click upload button to switch to your uploaded photo file
              </p>
            </div>
          </div>

          {/* Hidden File Input for instant photo swapping */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            accept="image/*"
            className="hidden"
          />

          {/* Bottom Executive Credential Banner */}
          <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-slate-800/70 via-slate-800/40 to-slate-800/70 border border-slate-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold shadow-md">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-slate-100 tracking-wide">
                    {company}
                  </h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                </div>
                <p className="text-[11px] text-amber-400/90 font-medium">{title}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                4+ Yrs FMCG
              </span>
            </div>
          </div>
        </div>

        {/* Floating Decorative Gold Stamp */}
        <div className="absolute -bottom-3 -right-3 p-2 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 shadow-xl border-2 border-slate-900 hidden sm:flex items-center gap-1.5 animate-bounce-subtle">
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">
            Verified Executive
          </span>
        </div>
      </div>

      {/* Modal for Portrait Viewing & Upload */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-lg w-full bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100">{name}</h3>
                <p className="text-xs text-amber-400">{title} • {company}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center">
              {customPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={customPhoto} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-slate-200 text-sm">Portrait Preview</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                    Displayed with official executive frame. You can also select the original JPEG file from your computer.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
              >
                <Upload className="w-4 h-4" />
                Upload / Replace Photo
              </button>
              {customPhoto && (
                <button
                  onClick={handleResetPhoto}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition"
                >
                  Reset to Default
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
