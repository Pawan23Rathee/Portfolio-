// src/pages/Home.jsx
import Hero from "../Component/Hero";
import About from "../Component/About";
import Skills from "../Component/Skills";
import Projects from "../Component/Projects";
import Contact from "../Component/Contact";
import Experience from "../Component/Experience";
import Footer from "../Component/Footer";
import Certificate from "../Component/Certificate";
import React from "react";
export default function Home() {
  const name = "Pawan Rathee";

  return (
    <main className="pt-8">

      {/* Hero Section */}
      <div id="hero">
        <Hero name={name} />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>

      {/* Experience Section */}
      <div id="experience">
  <Experience />
</div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      <div id="certificate">
  <Certificate />
</div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
