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
          <div className="w-full max-w-md brutalist-card overflow-hidden bg-white shadow-brutalist-lg select-none hover:-translate-y-1 transition-transform duration-200">
            {/* Vintage Mac OS Window Title Bar */}
            <div className="bg-[#e8e8e8] border-b-2.5 border-black px-4 py-2.5 flex items-center justify-between font-mono text-[11px] font-bold text-black">
              <div className="flex items-center space-x-1.5">
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <span className="tracking-wide">academic-station.term</span>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[10px] text-slate-700">ONLINE</span>
              </div>
            </div>

            {/* Retro CRT Terminal Screen Body */}
            <div className="bg-[#121314] text-slate-200 p-5 font-mono text-[11px] md:text-xs leading-relaxed space-y-3.5 relative overflow-hidden">
              {/* Subtle Scanline Texture effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,19,20,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-40" />

              {/* Block 1: Academic Identity Query */}
              <div className="relative z-10 space-y-1">
                <div className="flex items-center text-[#ffde59]">
                  <span className="text-slate-400 mr-2">suvam@rkmvcc:~$</span>
                  <span>whoami --academic</span>
                </div>
                <div className="pl-3 border-l-2 border-slate-700 text-slate-300 space-y-0.5 text-[11px]">
                  <div><span className="text-slate-500">SCHOLAR:</span> Suvam Naskar</div>
                  <div><span className="text-slate-500">DEGREE:</span> M.Sc. in Computer Science</div>
                  <div><span className="text-slate-500">COLLEGE:</span> RKMVCC, Kolkata</div>
                </div>
              </div>

              {/* Block 2: Qualifications & Honors */}
              <div className="relative z-10 space-y-1">
                <div className="flex items-center text-[#5ce1e6]">
                  <span className="text-slate-400 mr-2">suvam@rkmvcc:~$</span>
                  <span>cat qualifications.rec</span>
                </div>
                <div className="pl-3 border-l-2 border-[#5ce1e6]/40 space-y-1 text-[11px]">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#ffe680] text-black font-bold px-1.5 py-0.5 text-[10px] uppercase">UGC NET</span>
                    <span className="text-emerald-400 font-bold">Qualified (LS / AP)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#5ce1e6] text-black font-bold px-1.5 py-0.5 text-[10px] uppercase">AWS</span>
                    <span className="text-slate-300">Certified Cloud Practitioner</span>
                  </div>
                </div>
              </div>

              {/* Block 3: Research Telemetry Stream */}
              <div className="relative z-10 space-y-1">
                <div className="flex items-center text-emerald-400">
                  <span className="text-slate-400 mr-2">suvam@rkmvcc:~$</span>
                  <span>telemetry --stream</span>
                </div>
                <div className="pl-3 border-l-2 border-emerald-500/40 text-[10px] text-slate-300 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span>[RSTC-IoT] Sensor Array</span>
                    <span className="text-emerald-400 font-bold">● ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>[WireGuard] Mesh Tunnel</span>
                    <span className="text-emerald-400 font-bold">● 0ms LATENCY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>[Upasthiti] Campus Geo</span>
                    <span className="text-emerald-400 font-bold">● 25m BOUND</span>
                  </div>
                </div>
              </div>

              {/* Interactive / Blinking Cursor Prompt */}
              <div className="relative z-10 pt-1 flex items-center text-slate-400 text-xs">
                <span className="mr-2">rkmvcc-lab:~$</span>
                <span className="text-white">ready</span>
                <span className="w-2 h-4 bg-[#ffde59] ml-1 animate-pulse" />
              </div>
            </div>

            {/* Vintage Window Bottom Status Bar */}
            <div className="bg-[#e8e8e8] border-t-2.5 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-slate-700">
              <span>MEM: 64MB // OS: RETRO-MAC</span>
              <span className="text-black bg-[#ffde59] px-1.5 py-0.5 border border-black uppercase">TTY1 // UTF-8</span>
            </div>
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
