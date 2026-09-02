"use client";

import React from "react";
import { GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
import { educationList, certificationsList } from "../data/portfolio";

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 border-t-2.5 border-black bg-white select-none">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs font-bold text-slate-500 uppercase mb-2">// 02. Academic Background &amp; Qualifications</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Education &amp; Qualifications
          </h2>
          <div className="w-16 h-1.5 bg-black mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Panel: Education Window */}
          <div className="brutalist-card h-full overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-100">
            {/* Window Header */}
            <div className="bg-[#e8e8e8] border-b-2 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-black">
              <div className="flex items-center space-x-1.5">
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <span>curriculum.edu</span>
              <div className="w-6" />
            </div>

            {/* Window Body */}
            <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-center">
              {educationList.map((edu, idx) => (
                <div key={idx} className="border-b border-dashed border-black/20 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 border-2 border-black bg-[#ffde59] flex items-center justify-center text-black shadow-brutalist-sm flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-sm md:text-base text-black">{edu.degree}</h3>
                      <p className="font-mono text-xs font-bold text-slate-600 uppercase">{edu.school}</p>
                      
                      <div className="flex flex-wrap gap-3 items-center pt-2 text-[10px] md:text-xs font-mono font-bold text-black">
                        <span className="flex items-center bg-[#5ce1e6] px-2 py-0.5 border border-black shadow-brutalist-sm">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {edu.period}
                        </span>
                        <span className="bg-slate-100 px-2 py-0.5 border border-black shadow-brutalist-sm">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Certifications Window */}
          <div className="brutalist-card h-full overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-100">
            {/* Window Header */}
            <div className="bg-[#e8e8e8] border-b-2 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-black">
              <div className="flex items-center space-x-1.5">
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <span>qualifications.db</span>
              <div className="w-6" />
            </div>

            {/* Window Body */}
            <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-center">
              {certificationsList.map((cert, idx) => (
                <div key={idx} className="border-b border-dashed border-black/20 last:border-0 pb-6 last:pb-0 space-y-3">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 border-2 border-black bg-[#5ce1e6] flex items-center justify-center text-black shadow-brutalist-sm flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-grow">
                      <h3 className="font-extrabold text-sm md:text-base text-black">{cert.name}</h3>
                      <p className="font-mono text-xs font-bold text-slate-600 uppercase">{cert.issuer}</p>
                      <span className="inline-block mt-1 font-mono text-[10px] font-bold text-black bg-[#ffe680] px-2 py-0.5 border border-black shadow-brutalist-sm">
                        {cert.date.includes("Qualified") ? cert.date : `Issued: ${cert.date}`}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed pl-14">
                    {cert.description}
                  </p>

                  {cert.verifyUrl && (
                    <div className="pl-14 pt-1">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutalist-button inline-flex items-center space-x-2 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black bg-[#ffe680] hover:bg-[#ffde59]"
                      >
                        <span>{cert.buttonLabel || "Verify Credential"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
