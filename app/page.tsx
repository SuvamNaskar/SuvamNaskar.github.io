import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Credentials from "../components/Credentials";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto border-x-2.5 border-black bg-white shadow-brutalist min-h-screen">
        <Hero />
        <About />
        <Credentials />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
