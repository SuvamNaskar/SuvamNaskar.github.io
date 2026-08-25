"use client";

import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

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

          <p className="text-lg md:text-xl font-mono font-bold text-black border-l-4 border-black pl-4">
            Founding Engineer & Cloud Architect
          </p>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-xl">
            {personalInfo.tagline} Rebuilding modern web systems with containerized microservices, custom print servers, self-hosted networks, and edge automation modules.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollToSection("projects")}
              className="brutalist-button px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#ffde59] hover:bg-[#ffe680]"
            >
              View Projects
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white"
            >
              Resume PDF
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
              {/* Main computer body */}
              <rect x="40" y="20" width="120" height="130" rx="10" fill="white" />
              {/* Screen bezel */}
              <rect x="50" y="30" width="100" height="85" rx="4" fill="white" />
              {/* CRT Screen outline */}
              <rect x="58" y="38" width="84" height="65" rx="2" fill="#fff" />
              {/* Floppy drive slot */}
              <rect x="50" y="125" width="45" height="5" rx="1" fill="black" />
              {/* Ventilation lines */}
              <line x1="110" y1="125" x2="150" y2="125" stroke="black" strokeWidth="2.5" />
              <line x1="110" y1="130" x2="150" y2="130" stroke="black" strokeWidth="2.5" />
              {/* Computer face (smiling node) */}
              <circle cx="100" cy="70" r="16" fill="black" />
              {/* Smiley eyes */}
              <circle cx="94" cy="66" r="3.5" fill="white" />
              <circle cx="106" cy="66" r="3.5" fill="white" />
              {/* Smiley mouth */}
              <path d="M94 75 Q100 81 106 75" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Stand */}
              <path d="M50 150 L150 150 L160 172 L40 172 Z" fill="white" />
              {/* Shadow effect on SVG */}
              <path d="M40 172 H160" stroke="black" strokeWidth="3" />
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
