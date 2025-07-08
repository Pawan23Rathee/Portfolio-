import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

// Certificate images
import cert1 from "../assets/Certificate1.jpeg";
import cert2 from "../assets/Certificate2.png";
import cert3 from "../assets/DeloitteCertificate.png";
import cert4 from "../assets/MoretonBayCertificate.png";
import cert5 from "../assets/Mastering.jpeg";
import cert6 from "../assets/Large.jpeg";
import cert7 from "../assets/AI.jpeg";
import cert8 from "../assets/Aware.png";
import cert9 from "../assets/Appreciate.png";

// Badge images
import badge1 from "../assets/Badge1.png";
import badge2 from "../assets/Badge.png";

const certificates = [
  {
    title: "AI Aware Intel",
    image: cert8,
    date: "July 2025",
    description: "Completed AI Aware certification by Intel.",
  },
  {
    title: "AI Appreciate Intel",
    image: cert9,
    date: "July 2025",
    description: "Completed AI Appreciate certification by Intel.",
  },
  {
    title: "Full-Stack Web Development",
    image: cert1,
    date: "Jan 2024",
    badge: badge1,
  },
  {
    title: "JavaScript Mastery",
    image: cert2,
    date: "Dec 2023",
    badge: badge2,
  },
  {
    title: "Deloitte Australia's Data Analytics",
    image: cert3,
    date: "Apr 2025",
    description:
      "Completed a job simulation involving data analysis and forensic technology, created a data dashboard using Tableau, and used Excel to classify data and draw business conclusions.",
  },
  {
    title: "City of Moreton Bay's Entrepreneurship & Innovation: Web Development",
    image: cert4,
    date: "Apr 2025",
    description:
      "Completed a job simulation involving website planning and creation, created a sitemap and user flow using a diagram creation tool, and used HTML & CSS to create a landing page.",
    link: "https://lnkd.in/eSeMQNyq",
  },
  {
    title: "Mastering the Art of Prompting",
    image: cert5,
    date: "July 2025",
    description: "Completed Mastering the Art of Prompting certification by IBM.",
  },
  {
    title: "Large Language Model Basics",
    image: cert6,
    date: "July 2025",
    description: "Completed Large Language Model Basics certification by IBM.",
  },
  {
    title: "Introduction to Artificial Intelligence",
    image: cert7,
    date: "July 2025",
    description: "Completed Introduction to Artificial Intelligence certification by IBM.",
  },
];

const badgeList = [
  {
    image: badge1,
    title: "Ai Aware Badge",
    // description: "Awarded for Full-Stack Web Development project completion.",
  },
  {
    image: badge2,
    title: "Ai Appreciate Badge",
    // description: "Awarded for mastering core JavaScript concepts.",
  },
];

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null); // New state for badge

  return (
    <>
      {/* CERTIFICATES SECTION */}
      <section id="certificate" className="bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Certificates
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
            >
              {cert.badge && (
                <img
                  src={cert.badge}
                  alt="Badge"
                  className="absolute top-2 right-2 w-10 h-10 object-contain rounded-full border border-white shadow-md"
                />
              )}
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

        {/* Certificate Modal */}
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
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certificate Details */}
        {selectedCert && (
          <div className="mt-6 text-center text-gray-800 max-w-2xl mx-auto">
            {selectedCert.badge && (
              <img
                src={selectedCert.badge}
                alt="Badge"
                className="w-12 h-12 mx-auto mb-2"
              />
            )}
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {selectedCert.title}
            </h3>
            {selectedCert.description && <p>{selectedCert.description}</p>}
            {selectedCert.link && (
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 mt-2 inline-block underline"
              >
                Check out the simulation here
              </a>
            )}
          </div>
        )}
      </section>

      {/* BADGES SECTION */}
      <section id="badges" className="bg-gray-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Badges
        </h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {badgeList.map((badge, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedBadge(badge)}
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-center font-medium text-gray-700">{badge.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Badge Modal */}
       {/* Badge Modal for Image View */}
{/* Badge Modal for Fullscreen View */}
<AnimatePresence>
  {selectedBadge && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedBadge(null)} // Click outside to close
    >
      <motion.img
        src={selectedBadge.image}
        alt={selectedBadge.title}
        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking on image
      />


      <div className="text-white mt-4 text-center text-sm max-w-md mx-auto">
  {selectedBadge.title && <p className="font-semibold text-lg">{selectedBadge.title}</p>}
  {selectedBadge.description && <p className="mt-1">{selectedBadge.description}</p>}
</div>

    </motion.div>
    

    
  )}
</AnimatePresence>


      </section>
    </>
  );
}
