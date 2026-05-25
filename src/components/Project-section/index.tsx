import React from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string; // ❗ required
  githubLink: string; // ❗ required
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Chicks Halal Platters",
    description:
      "A modern restaurant website with online ordering capabilities.",
    image: "https://chickshalalplatters.com/chicks-logo.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveLink: "https://chickshalalplatters.com/",
    githubLink: "https://github.com/muhammadtalhaafridi/Restaurant-Project",
  },
  {
    id: 2,
    title: "Afghan Gems",
    description:
      "Afghan Gem is a curated showcase of Afghanistan's finest natural gemstones — including emeralds, lapis lazuli, rubies, and tourmalines.",
    image:
      "https://plus.unsplash.com/premium_photo-1679526287084-a9e3935d18f5?w=600",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveLink: "https://www.afghangem.com/",

    githubLink: "https://github.com/muhammadtalhaafridi/GemStone-Project",
  },
  {
    id: 3,
    title: "Pharmacy Management System",
    description:
      "A modern full-stack pharmacy web application designed to simplify medicine management, online ordering, prescription handling, and secure authentication with a fast, responsive, and user-friendly experience.",
    image:
      "https://images.unsplash.com/photo-1607979036079-af88d8d6159e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHBoYXJtYWN5fGVufDB8fDB8fHww",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
    liveLink: "YOUR_LIVE_LINK",
    githubLink: "https://github.com/muhammadtalhaafridi/Pharmacy",
  },
];

const ProjectSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-cyan-300">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-300 rounded-full"></div>
          </div>

          <button
            onClick={() => navigate("/projects")}
            className="text-cyan-300 hover:text-cyan-200 transition"
          >
            View all →
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border-2 border-white/10 
              bg-gradient-to-br from-[#0b1220] to-[#111827] 
              hover:border-cyan-400/40 transition-all duration-300 shadow-lg"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
              bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
              />

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text- px-2 py-1 rounded-md bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
