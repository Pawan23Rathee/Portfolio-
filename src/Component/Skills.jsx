import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 text-gray-800 py-20 px-4 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-indigo-600 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 bg-white shadow-md p-4 rounded-xl hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-4xl" aria-label={skill.name}>
              {skill.icon}
            </div>
            <p className="font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
