"use client";

import React from "react";
import { Cpu, Layers, Terminal, GraduationCap } from "lucide-react";
import { metricHighlights } from "../data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu: Cpu,
  Layers: Layers,
  Terminal: Terminal,
  GraduationCap: GraduationCap,
};

const windowNames = ["academic-net.edu", "rstc-research.iot", "cloud-systems.net"];

export default function About() {
  return (
    <section id="about" className="py-24 border-t-2.5 border-black bg-white select-none">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs font-bold text-slate-500 uppercase mb-2">// 01. Academic Profile &amp; Research</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Academic Background &amp; Focus
          </h2>
          <div className="w-16 h-1.5 bg-black mt-3 rounded-full" />
        </div>

        {/* Narrative Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
          <div className="md:col-span-8 text-slate-800 space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              I am an M.Sc. Computer Science student at Ramakrishna Mission Vivekananda Centenary College, qualified through the National Eligibility Test (UGC NET) for Assistant Professorship and Lectureship (LS/AP).
            </p>
            <p>
              My academic interests bridge core computer science fundamentals, distributed cloud infrastructure, and embedded IoT computing. With experience across low-level microcontroller integration, cloud engineering, and laboratory project work, I am passionate about academic instruction, teaching foundational CS, and applied systems research.
            </p>
          </div>
          <div className="md:col-span-4 brutalist-card p-6 bg-[#ffde59] text-black">
            <div className="text-[10px] font-mono font-bold text-slate-700 uppercase mb-2">// CURRENT STATUS</div>
            <div className="text-xs md:text-sm font-bold leading-relaxed mb-4">
              M.Sc. Student at RKMVCC // UGC NET Qualified (Assistant Professor) // Active in Kolkata.
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono font-bold">
              <span className="w-2.5 h-2.5 bg-black rounded-full animate-ping" />
              <span>Kolkata, WB, India</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metricHighlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.iconName] || Cpu;
            const windowName = windowNames[index];

            return (
              <div
                key={index}
                className="brutalist-card flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-100"
              >
                {/* Retro Window Header Bar */}
                <div className="bg-[#e8e8e8] border-b-2 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-black select-none">
                  <div className="flex items-center space-x-1.5">
                    <span className="window-dot" />
                    <span className="window-dot" />
                  </div>
                  <span>{windowName}</span>
                  <div className="w-6" /> {/* Spacer */}
                </div>

                {/* Window Canvas Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center text-black mb-4 shadow-brutalist-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">{highlight.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{highlight.description}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-dashed border-black/20">
                    <span className="font-mono text-[10px] text-slate-500 uppercase block mb-1">Impact Layer</span>
                    <span className="text-sm font-mono font-bold text-black bg-[#5ce1e6] px-2 py-0.5 border border-black shadow-brutalist-sm inline-block">
                      {highlight.value}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
