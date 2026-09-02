"use client";

import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-7 text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-black select-none">
            Hello.<br />
            I'm Suvam.
          </h1>

          <p className="text-base md:text-lg font-mono font-bold text-black border-l-4 border-black pl-4">
            M.Sc. Computer Science Student &amp; UGC NET Qualified
          </p>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-xl">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollToSection("credentials")}
              className="brutalist-button px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#ffde59] hover:bg-[#ffe680]"
            >
              Academics &amp; Qualifications
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white"
            >
              Curriculum Vitae (PDF)
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative p-6 bg-white border-2.5 border-black shadow-brutalist rounded-xl group select-none">
            <svg
              viewBox="0 0 200 200"
              className="w-48 h-48 md:w-64 md:h-64 text-black group-hover:rotate-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              {/* Cloud Outline in center-top */}
              <path
                d="M 60 60 C 50 60, 42 68, 42 78 C 42 88, 50 96, 62 96 H 138 C 148 96, 156 88, 156 78 C 156 68, 148 60, 138 60 C 132 45, 110 40, 96 50 C 85 42, 68 45, 60 60 Z"
                fill="white"
                stroke="black"
                strokeWidth="2.5"
              />

              {/* Network Link Lines going down */}
              <path d="M 75 96 L 75 125 L 55 125" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 125 96 L 125 125 L 145 125" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="100" y1="96" x2="100" y2="125" stroke="black" strokeWidth="2.5" />

              {/* Data packet boxes on link lines */}
              <rect x="71" y="105" width="8" height="8" rx="1" fill="black" />
              <rect x="121" y="110" width="8" height="8" rx="1" fill="black" />

              {/* Left Node: Database Cylinder */}
              <g transform="translate(10, 120)">
                <rect x="5" y="10" width="30" height="35" rx="3" fill="white" stroke="black" strokeWidth="2.5" />
                <path d="M 5 20 C 5 25, 35 25, 35 20" stroke="black" strokeWidth="2.5" />
                <path d="M 5 30 C 5 35, 35 35, 35 30" stroke="black" strokeWidth="2.5" />
                <path d="M 5 10 C 5 15, 35 15, 35 10" stroke="black" strokeWidth="2.5" fill="white" />
              </g>

              {/* Center Node: Server Stack Console */}
              <g transform="translate(80, 120)">
                <rect x="10" y="5" width="20" height="40" rx="2" fill="white" stroke="black" strokeWidth="2.5" />
                <line x1="13" y1="12" x2="27" y2="12" stroke="black" strokeWidth="2.2" />
                <line x1="13" y1="20" x2="27" y2="20" stroke="black" strokeWidth="2.2" />
                <line x1="13" y1="28" x2="27" y2="28" stroke="black" strokeWidth="2.2" />
                <circle cx="15" cy="38" r="1.5" fill="black" />
                <circle cx="20" cy="38" r="1.5" fill="black" />
                <circle cx="25" cy="38" r="1.5" fill="black" />
              </g>

              {/* Right Node: Terminal Client */}
              <g transform="translate(140, 120)">
                <rect x="5" y="12" width="30" height="26" rx="2" fill="white" stroke="black" strokeWidth="2.5" />
                <rect x="9" y="16" width="22" height="14" rx="1" fill="white" stroke="black" strokeWidth="2" />
                <line x1="13" y1="23" x2="21" y2="23" stroke="black" strokeWidth="2" />
                <path d="M 10 38 L 30 38" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>

        {/* Quick Links Footer Grid */}
        <div className="md:col-span-12 mt-8 text-left">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-3 text-slate-600">Quick links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 border-2.5 border-black divide-x-2.5 divide-y-2.5 md:divide-y-0 divide-black bg-white shadow-brutalist overflow-hidden font-mono text-xs font-bold uppercase tracking-wider select-none">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 hover:bg-black hover:text-white transition-colors duration-100 group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 hover:bg-black hover:text-white transition-colors duration-100 group border-t border-black md:border-t-0"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 hover:bg-black hover:text-white transition-colors duration-100 group"
            >
              <span>Resume PDF</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between px-6 py-4 hover:bg-black hover:text-white transition-colors duration-100 group"
            >
              <span>Email</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
