"use client";
import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaGithub,
  FaExternalLinkAlt,
  FaCubes,
  FaLayerGroup,
} from "react-icons/fa";
import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const allProjects = [
  {
    title: "FlavorVerse Pizza",
    category: "Frontend",
    description:
      "Modern pizza ordering website with size, flavors, and cart system.",
    tech: ["React", "Tailwind", "Framer Motion", "Context API"],
    github: "https://github.com/yourname/flavorverse",
    live: "https://flavorverse.vercel.app",
    icon: <FaLaptopCode />,
  },
  {
    title: "Event Booking App",
    category: "FullStack",
    description: "Book and manage events with full CRUD and admin panel.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourname/event-booking",
    live: "#",
    icon: <FaCode />,
  },
  {
    title: "Nutritionist Website",
    category: "FullStack",
    description:
      "Clients submit diet plans & book consultations with backend storage.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Node.js"],
    github: "https://github.com/yourname/nutritionist-app",
    live: "https://nutritionist.vercel.app",
    icon: <FaCode />,
  },
  {
    title: "API Authentication",
    category: "Backend",
    description: "Secure API backend with JWT auth and MongoDB.",
    tech: ["Node.js", "Express", "JWT", "MongoDB"],
    github: "https://github.com/yourname/api-auth",
    live: "#",
    icon: <FaServer />,
  },
];

const iconMap = {
  All: <FaLayerGroup />,
  Frontend: <FaCode />,
  Backend: <FaServer />,
  FullStack: <FaCubes />,
};

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const categories = ["All", "Frontend", "Backend", "FullStack"];

  return (
    <section id="projects" className="px-6 md:px-20 py-10 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
        My <span className="text-blue-600">Projects</span>
      </h2>
      <p className="text-center text-gray-500 mb-10">Explore by category</p>

      <div className="relative w-fit mx-auto mb-12 bg-gray-100 p-1 rounded-full shadow-inner flex">
        {/* Sliding Background */}
        <span
          className={`absolute top-1 left-1 w-1/4 h-10 rounded-full bg-blue-600 transition-all duration-300 ${
            activeCategory === "Frontend"
              ? "translate-x-full"
              : activeCategory === "Backend"
              ? "translate-x-[200%]"
              : activeCategory === "FullStack"
              ? "translate-x-[300%]"
              : "translate-x-0"
          }`}
        ></span>

        {/* Buttons */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative z-10 w-40 h-10 text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
              activeCategory === cat ? "text-white" : "text-gray-800"
            }`}
          >
            {/* Clone icon to apply color */}
            {React.cloneElement(iconMap[cat], {
              className: `w-5 h-5 ${
                activeCategory === cat ? "text-white" : "text-blue-600"
              }`,
            })}
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {filtered.map((project, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between transform duration-300 hover:-translate-y-1 hover:shadow-blue-600"
          >
            {/* Icon in Circle */}
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full text-blue-600 text-2xl mb-4 mx-auto">
              {project.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-bold text-center text-gray-800 mb-1">
              {project.title}
            </h3>
            <p className="text-center text-gray-600 text-sm mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
              >
                <FaGithub /> GitHub
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
