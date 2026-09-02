"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, AlertTriangle } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t-2.5 border-black bg-white relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-mono text-xs font-bold text-slate-500 uppercase mb-2">// 06. Communication</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Academic Inquiries &amp; Connect
          </h2>
          <div className="w-16 h-1.5 bg-black mt-3 rounded-full" />
        </div>

        {/* System Dialogue Box */}
        <div className="max-w-lg mx-auto brutalist-card overflow-hidden mb-12 bg-white">
          {/* Title Bar */}
          <div className="bg-[#e8e8e8] border-b-2 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-black">
            <div className="flex items-center space-x-1.5">
              <span className="window-dot" />
              <span className="window-dot" />
            </div>
            <span>establish-connection.dialog</span>
            <div className="w-6" />
          </div>

          {/* Dialogue Body */}
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-center space-x-3 text-black">
              <AlertTriangle className="w-6 h-6 fill-[#ffde59] text-black stroke-[2]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">Communication Channel Available</span>
            </div>

            <p className="text-slate-800 text-sm leading-relaxed max-w-sm mx-auto">
              Open for academic collaborations, research discussions, and lectureship inquiries. Feel free to copy my contact email or reach out directly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <button
                onClick={copyEmail}
                className="w-full sm:w-auto brutalist-button px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#ffde59] hover:bg-[#ffe680] flex items-center justify-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto brutalist-button px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mailbox</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Quick Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 font-mono text-xs font-bold text-black border-2 border-black bg-white px-4 py-2.5 shadow-brutalist-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 font-mono text-xs font-bold text-black border-2 border-black bg-white px-4 py-2.5 shadow-brutalist-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Footer Divider */}
        <div className="w-full h-0.5 bg-black mb-8" />

        {/* Monospace Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 font-mono text-[10px] font-bold uppercase tracking-wider gap-4">
          <p>© {new Date().getFullYear()} Suvam Naskar. All rights reserved.</p>
          <p className="flex items-center">
            System core:
            <span className="text-black mx-1 bg-[#5ce1e6] px-1 border border-black">Next.js 14</span>
            &
            <span className="text-black mx-1 bg-[#ffde59] px-1 border border-black">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
}
