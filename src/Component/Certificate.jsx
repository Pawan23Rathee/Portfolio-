import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert1 from "../assets/Certificate1.jpeg"; // Existing certificates
import cert2 from "../assets/Certificate2.png"; // Existing certificates
import cert3 from "../assets/DeloitteCertificate.png"; // Fixed image path
import cert4 from "../assets/MoretonBayCertificate.png"; // New certificate image
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
  {
    title: "Deloitte Australia's Data Analytics", // Adding this new certificate
    image: cert3, // Corrected path for the image
    date: "Apr 2025", // Update the date accordingly
    description: "Completed a job simulation involving data analysis and forensic technology, created a data dashboard using Tableau, and used Excel to classify data and draw business conclusions.",
  },
  {
    title: "City of Moreton Bay's Entrepreneurship & Innovation: Web Development", // New certificate
    image: cert4, // Image for the new certificate
    date: "Apr 2025", // Adjust the date
    description: "Completed a job simulation involving website planning and creation, created a sitemap and user flow using a diagram creation tool, and used HTML & CSS to create a landing page.",
    link: "https://lnkd.in/eSeMQNyq" // Link to the simulation
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

      {/* Optional: You can also show the description of the certificate */}
      {selectedCert && (
        <div className="mt-4 text-center text-gray-800 max-w-2xl mx-auto">
          <p>{selectedCert.description}</p>
          {selectedCert.link && (
            <a
              href={selectedCert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 mt-2 inline-block"
            >
              Check out the simulation here
            </a>
          )}
        </div>
      )}
    </section>
  );
}
