// src/components/About.jsx
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 bg-white text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg"
      >
        <img
          src="/Pawan.jpeg"
          alt="Pawan Rathee"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center md:text-left"
      >
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
        <p className="text-lg mb-4">
          I’m a passionate Full-Stack Web Developer from India 🇮🇳, with a love for creating clean, modern, and efficient websites and applications. I specialize in React, Node.js, and Tailwind CSS, and I enjoy turning ideas into digital reality.
        </p>
        <ul className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <li>💻  Coding Experience</li>
          <li>🚀 Built 15+ Projects</li>
          <li>🎯 Focused on UI/UX & Speed</li>
          <li>📱 Responsive & Mobile-first Design</li>
        </ul>
      </motion.div>
    </section>
  );
}
