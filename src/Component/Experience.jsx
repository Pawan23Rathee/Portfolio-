// src/components/Experience.jsx
import { FaLaptopCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
const experiences = [
  {
    title: "Full-Stack Web Developer",
    company: "Coforce",
    date: "Feb 2024 - Present",
    description: "Developing scalable web apps using React, Node.js, and Tailwind CSS.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Frontend Developer Intern",
    company: "Krutanic solutions",
    date: "Jul 2023 - Dec 2023",
    description: "Improved UI/UX and developed reusable components.",
    icon: <FaBriefcase />,
  },
  {
    title: "Started Web Development Journey",
    company: "Self-Learning",
    date: "July 2023",
    description: "Learned HTML, CSS, JavaScript, and built personal projects.",
    icon: <FaGraduationCap />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 relative border-l-4 border-indigo-600"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute -left-7 top-6 bg-indigo-600 text-white rounded-full p-3 text-xl shadow">
              {exp.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {exp.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              {exp.company} • {exp.date}
            </p>
            <p className="text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
