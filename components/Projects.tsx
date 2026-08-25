"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown, ChevronUp, AlertOctagon, Terminal } from "lucide-react";
import { projects, Project } from "../data/portfolio";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projectFilenames = ["cv-inventory-counter.py", "print-automation-server.sh", "saas-api-engine.go"];

  return (
    <section id="projects" className="py-24 border-t-2.5 border-black bg-white select-none">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs font-bold text-slate-500 uppercase mb-2">// 03. Selected Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Projects & Case Studies
          </h2>
          <div className="w-16 h-1.5 bg-black mt-3 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const filename = projectFilenames[index];

            return (
              <motion.div
                key={index}
                layout
                className={`brutalist-card overflow-hidden flex flex-col justify-between transition-all duration-200 ${
                  isExpanded ? "md:col-span-3 shadow-brutalist-lg" : "hover:-translate-y-1 hover:shadow-brutalist-lg"
                }`}
              >
                {/* Vintage Desktop Window Header Bar */}
                <div className="bg-[#e8e8e8] border-b-2 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-black">
                  <div className="flex items-center space-x-1.5">
                    <span className="window-dot" />
                    <span className="window-dot" />
                  </div>
                  <span>{filename}</span>
                  <div className="w-6" /> {/* Spacer */}
                </div>

                {/* Decorative Halftone/Striped Preview Banner */}
                <div className="h-28 border-b-2 border-black bg-slate-100 bg-[repeating-linear-gradient(45deg,#dcdcdc,#dcdcdc_4px,#e8e8e8_4px,#e8e8e8_8px)] flex items-center justify-center">
                  <div className="bg-white border-2 border-black px-4 py-1.5 font-mono text-xs font-bold uppercase shadow-brutalist-sm">
                    {project.techStack[0]} // STACK_01
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-black mb-2">{project.title}</h3>
                    
                    {/* Elevator Pitch */}
                    <p className="text-slate-700 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Environment Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] font-bold px-2.5 py-1 bg-slate-50 border border-black text-black rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Grid */}
                  <div className="pt-4 border-t border-dashed border-black/20 flex flex-wrap gap-3 items-center justify-between">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#ffde59] border border-black px-3 py-1.5 shadow-brutalist-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                    >
                      <span>{isExpanded ? "Collapse" : "Architecture"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <div className="flex items-center space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutalist-button p-2 text-black flex items-center justify-center rounded"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="brutalist-button p-2 text-black flex items-center justify-center rounded"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Case Study Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="border-t-2 border-black bg-slate-50"
                    >
                      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-black/10">
                        {/* Problem Card */}
                        <div className="bg-white border-2 border-black p-5 shadow-brutalist-sm space-y-3">
                          <h4 className="font-mono text-xs font-bold text-red-600 flex items-center uppercase tracking-wider">
                            <AlertOctagon className="w-4 h-4 mr-2" />
                            Problem Statement
                          </h4>
                          <p className="text-slate-800 text-xs md:text-sm leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-white border-2 border-black p-5 shadow-brutalist-sm space-y-3">
                          <h4 className="font-mono text-xs font-bold text-[#38bdf8] flex items-center uppercase tracking-wider">
                            <Terminal className="w-4 h-4 mr-2 text-black" />
                            Architectural Solution
                          </h4>
                          <p className="text-slate-800 text-xs md:text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
