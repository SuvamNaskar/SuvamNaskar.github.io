"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Academics", id: "credentials" },
  { name: "Experience", id: "experience" },
  { name: "Research", id: "projects" },
  { name: "Competencies", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Offset for sticky retro menu bar
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2.5 border-black h-12 flex items-center justify-between select-none">
        {/* Left Logo Side */}
        <div className="flex items-center h-full">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center justify-center px-4 h-full border-r-2.5 border-black hover:bg-black hover:text-white transition-colors duration-100 font-mono font-bold text-sm"
          >
            <Terminal className="w-4 h-4 mr-2" />
            <span>suvam.dev</span>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center h-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-5 h-full border-l-2.5 border-black hover:bg-black hover:text-white transition-colors duration-100 font-mono text-xs font-bold uppercase tracking-wider"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden h-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-4 h-full border-l-2.5 border-black hover:bg-black hover:text-white transition-colors duration-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-12 z-40 bg-white border-b-2.5 border-black md:hidden shadow-brutalist"
          >
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-4 px-6 border-b border-black last:border-b-0 hover:bg-black hover:text-white transition-colors duration-100 font-mono text-xs font-bold uppercase tracking-wider"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
