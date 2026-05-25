import { motion } from "framer-motion";
import { projects } from "../../components/Project-section";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#050816] py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            MY WORK
          </span>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A collection of modern web applications built with React,
            TypeScript, Tailwind CSS, and scalable frontend architecture.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              // ✅ WHOLE CARD CLICK (DETAIL PAGE)
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden p-5">
                <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-[#151821]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="line-clamp-3 text-base leading-relaxed text-gray-400">
                  {project.description.slice(0, 60)} ....
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex items-center gap-4">
                  {/* GitHub */}
                  <Link
                    to={project?.githubLink}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-white"
                  >
                    <FaGithub size={18} />
                    Code
                  </Link>

                  {/* Live Demo */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 🔥 IMPORTANT
                      window.open(project.liveLink, "_blank");
                    }}
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-cyan-400"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
                </div>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/0 transition-all duration-500 group-hover:border-cyan-500/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
