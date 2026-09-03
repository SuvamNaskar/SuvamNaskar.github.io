"use client";

import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import HeroTerminal from "./HeroTerminal";

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
            M.Sc. Computer Science Student &amp; UGC NET Qualified (Assistant Professor)
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

        {/* Right Terminal Window */}
        <div className="md:col-span-5 flex justify-center items-center">
          <HeroTerminal />
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
              <span>Curriculum Vitae</span>
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
