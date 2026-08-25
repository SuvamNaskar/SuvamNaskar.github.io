"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, ChevronRight, FileDown } from "lucide-react";
import { experiences } from "../data/portfolio";

const tabNames = ["cloud-backend-eng.doc", "cloud-engineer.doc", "iot-intern.doc"];

export default function Experience() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  return (
    <section id="experience" className="py-24 border-t-2.5 border-black bg-[#e8e8e8] select-none">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs font-bold text-slate-500 uppercase mb-2">// 02. Professional History</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Timeline & Roles
          </h2>
          <div className="w-16 h-1.5 bg-black mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Folder Tab Selectors */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 pr-0 lg:pr-4 gap-2 lg:gap-3">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRoleIndex(idx)}
                className={`flex-none text-left px-5 py-3 border-2 border-black font-mono text-xs md:text-sm tracking-wide transition-all duration-100 uppercase font-bold shadow-brutalist-sm ${
                  activeRoleIndex === idx
                    ? "bg-black text-white translate-x-[1px] translate-y-[1px] shadow-none"
                    : "bg-white text-black hover:bg-slate-50"
                }`}
              >
                📁 {tabNames[idx] || "role.doc"}
              </button>
            ))}
          </div>

          {/* Right Column - Cabinet/Folder Card Body */}
          <div className="lg:col-span-8 min-h-[350px]">
            <div className="brutalist-card p-6 md:p-8 bg-white flex flex-col justify-between">
              {/* Retro Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-dashed border-black/30 mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-black flex items-center">
                    <Briefcase className="w-5 h-5 mr-3 text-black" />
                    {experiences[activeRoleIndex].role}
                  </h3>
                  <p className="text-xs font-mono font-bold text-slate-500 mt-1 uppercase">
                    Company: {experiences[activeRoleIndex].company} {experiences[activeRoleIndex].location && `| ${experiences[activeRoleIndex].location}`}
                  </p>
                </div>
                <div className="flex items-center text-black font-mono text-xs bg-[#ffde59] border-2 border-black px-3 py-1.5 shadow-brutalist-sm w-fit font-bold">
                  <Calendar className="w-3.5 h-3.5 mr-2 text-black" />
                  {experiences[activeRoleIndex].period}
                </div>
              </div>

              {/* Bullet Highlights */}
              <ul className="space-y-4 mb-8">
                {experiences[activeRoleIndex].description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-slate-800 text-sm leading-relaxed">
                    <ChevronRight className="w-4 h-4 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technical Stack used in role */}
              <div className="pt-6 border-t border-dashed border-black/30 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                <div className="flex-grow">
                  <span className="block font-mono text-xs text-slate-500 font-bold uppercase mb-3">// Environment Variables</span>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeRoleIndex].techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-3 py-1.5 bg-slate-100 border border-black text-black font-bold shadow-brutalist-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {experiences[activeRoleIndex].certUrl && (
                  <div className="flex-shrink-0">
                    <a
                      href={experiences[activeRoleIndex].certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutalist-button inline-flex items-center space-x-2 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#ffde59] hover:bg-[#ffe680]"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>Intern Cert</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
