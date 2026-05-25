import { Code2, Database, FileCode, MoveRight, Paintbrush } from "lucide-react";
import { memo } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ProjectSection from "../../components/Project-section";
const skills = [
  { title: "React ", level: 90, icon: Code2 },
  { title: "TypeScript", level: 85, icon: FileCode },
  { title: "Tailwind CSS", level: 92, icon: Paintbrush },
  { title: "State & APIs", level: 80, icon: Database },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Home_Page = memo(function () {
  const naivgate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0ea5e9]">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden ">
        {/* background blobs */}
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10" />
        <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-30 bottom-10 right-10" />

        <div className="relative flex items-center justify-center min-h-[80vh] px-4">
          {/* soft glow background */}
          <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse" />
          <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center max-w-3xl z-10"
          >
            <motion.p
              variants={item}
              className="text-cyan-300 font-medium mb-4 tracking-widest"
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                Muhammad Talha
              </span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-xl md:text-2xl text-white/80 mb-6"
            >
              Frontend Developer (React + TypeScript)
            </motion.h2>

            <motion.p
              variants={item}
              className="text-white/60 mb-10 leading-relaxed"
            >
              I build modern, responsive and high-performance web applications
              using React, TypeScript and Tailwind CSS. Focused on clean UI,
              smooth UX, and scalable code.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="px-6 py-3 text-white rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 hover:scale-[1.03] transition-all duration-300 font-medium"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 text-white rounded-xl border border-white/20 hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-300">Skills</span>
          </h2>

          {/* Button */}
          <button
            onClick={() => naivgate("/about")}
            className="group flex items-center gap-2 text-sm sm:text-base font-medium text-cyan-300 hover:text-cyan-200 transition"
          >
            More about me
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] to-[#111827] shadow-lg hover:shadow-cyan-500/10 transition"
              >
                {/* subtle glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a] border border-white/10 mb-4 group-hover:border-cyan-400/40 transition">
                    <Icon className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition" />
                  </div>

                  <h3 className="font-semibold mb-4 text-white/90 group-hover:text-white">
                    {skill.title}
                  </h3>

                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* for project */}
      <ProjectSection />
    </div>
  );
});

export default Home_Page;
