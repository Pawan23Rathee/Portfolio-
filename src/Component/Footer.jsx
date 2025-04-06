// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-0">
      <motion.div
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Pawan Rathee. All rights reserved.
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Pawan23Rathee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/pawan-rathee-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
         
        </div>
      </motion.div>
    </footer>
  );
}
