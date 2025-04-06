// src/components/Projects.jsx
import { projects } from "../data/projects";
import React from "react";

export default function Projects() {
  return (
    <section className="bg-gray-100 py-16 px-4" id="projects">
      <h2 className="text-4xl font-bold text-indigo-600 text-center mb-10">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-100"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
