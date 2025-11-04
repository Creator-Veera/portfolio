import React from 'react'
import {projects} from '../data/projects.js'

const Project = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-amber-500 mb-12">
        🚀 Projects
      </h2>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800 text-white p-5 rounded-xl shadow-2xl hover:scale-[1.02] hover:shadow-amber-400 transition-transform duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover mb-4 border border-slate-700"
            />

            {/* Title */}
            <h2 className="font-bold text-xl text-amber-400 mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-700 text-amber-400 px-2 py-1 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub & Demo Buttons */}
            <div className="flex gap-3">
              {project.github && (<a href={project.github} target="_blank" rel="noreferrer">
                <button className="border border-amber-500 text-amber-400 px-4 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition">
                  GitHub
                </button>
              </a>)}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <button className="border border-amber-500 text-amber-400 px-4 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition">
                    Live Demo
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Project