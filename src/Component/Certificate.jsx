import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert1 from "../assets/Certificate1.jpeg";
import cert2 from "../assets/Certificate2.png";
import React from "react";

const certificates = [
  {
    title: "Full-Stack Web Development",
    image: cert1,
    date: "Jan 2024",
  },
  {
    title: "JavaScript Mastery",
    image: cert2,
    date: "Dec 2023",
  },
];

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificate" className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Certificates
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for full image view */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
