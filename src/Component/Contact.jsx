// src/components/Contact.jsx
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-20 px-4 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-600 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        action="https://formspree.io/f/xblgpjdd" // Replace with your Formspree ID
        method="POST"
        className="w-full max-w-xl bg-white shadow-lg p-8 rounded-xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
