"use client";

import React from "react";
import { Server, Cloud, Code2, Database } from "lucide-react";
import { skillGroups } from "../data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Backend & APIs": Server,
  "Cloud & DevOps": Cloud,
  "Frontend & Mobile": Code2,
  "Databases & Tools": Database,
};

const bgColors = ["bg-[#ffe680]", "bg-[#5ce1e6]", "bg-[#ff9f43]", "bg-[#ffde59]"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t-2.5 border-black bg-[#e8e8e8] select-none">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs font-bold text-slate-500 uppercase mb-2">// 04. Technical Index</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Skills & Frameworks
          </h2>
          <div className="w-16 h-1.5 bg-black mt-3 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => {
            const IconComponent = iconMap[group.category] || Server;
            const cardBg = bgColors[index % bgColors.length];

            return (
              <div
                key={index}
                className="brutalist-card p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-100"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 border-2 border-black ${cardBg} flex items-center justify-center text-black shadow-brutalist-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-extrabold text-black font-mono uppercase tracking-wider">{group.category}</h3>
                  </div>

                  {/* Badges List */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs font-bold px-3.5 py-2 bg-white border border-black text-black shadow-brutalist-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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
