"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#e8e8e8] bg-radial-gradient(rgba(0, 0, 0, 0.1) 1.2px, transparent 1.2px) bg-[size:16px_16px] font-mono select-none">
      <div className="max-w-md w-full border-2.5 border-black bg-white shadow-brutalist overflow-hidden">
        {/* Title Bar */}
        <div className="bg-[#e8e8e8] border-b-2 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-black">
          <div className="flex items-center space-x-1.5">
            <span className="window-dot" />
            <span className="window-dot" />
          </div>
          <span>system-error-404.sys</span>
          <div className="w-6" />
        </div>

        {/* Dialog Body */}
        <div className="p-8 text-center space-y-6">
          {/* SVG Bomb Icon */}
          <div className="relative">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 mx-auto stroke-black text-black"
              fill="none"
              strokeWidth="2.5"
            >
              {/* Bomb Body */}
              <circle cx="50" cy="58" r="28" fill="white" />
              {/* Sad eyes */}
              <line x1="40" y1="50" x2="46" y2="56" strokeLinecap="round" />
              <line x1="46" y1="50" x2="40" y2="56" strokeLinecap="round" />
              <line x1="54" y1="50" x2="60" y2="56" strokeLinecap="round" />
              <line x1="60" y1="50" x2="54" y2="56" strokeLinecap="round" />
              {/* Mouth */}
              <path d="M42 70 Q50 63 58 70" strokeLinecap="round" />
              {/* Fuse cap */}
              <rect x="44" y="25" width="12" height="6" fill="black" />
              {/* Fuse curve */}
              <path d="M50 25 Q52 12 65 10" strokeLinecap="round" />
              {/* Fuse spark */}
              <circle cx="68" cy="8" r="2" fill="black" />
              <line x1="68" y1="12" x2="68" y2="16" />
              <line x1="63" y1="8" x2="59" y2="8" />
              <line x1="72" y1="5" x2="75" y2="3" />
            </svg>
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-extrabold text-black uppercase tracking-wider">
              A System Error Has Occurred
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">// Error_Code: 0x404_PAGE_NOT_FOUND</p>
          </div>

          <p className="text-slate-800 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
            The resource you requested could not be resolved. It may have been relocated or purged from the registry.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              href="/"
              className="brutalist-button px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#ffde59] hover:bg-[#ffe680] inline-block"
            >
              Reboot System / Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

