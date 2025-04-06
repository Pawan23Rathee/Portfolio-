import { motion } from "framer-motion";
import React from "react";

export default function Hero({ name }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hey, I’m {name} 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl max-w-2xl mb-6"
      >
        A passionate Full-Stack Web Developer, turning ideas into modern, responsive, and interactive web experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition"
        >
          View Projects
        </a>
        
       


        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/pawan-rathee-webdev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition"
        >
          LinkedIn
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/Pawan23Rathee"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
