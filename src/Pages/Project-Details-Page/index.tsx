import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../components/Project-section";
import { ArrowRight } from "lucide-react";
import { Code2, Database, Globe, Wrench } from "lucide-react";
import { Lightbulb, Target, Sparkles } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "The Challenge",
    description:
      "Ensuring high performance and smooth animations on mobile devices while loading high-quality food imagery.",
    icon: <Target size={22} />,
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/30",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
  },
  {
    id: 2,
    title: "The Approach",
    description:
      "Implemented lazy loading for images and used Framer Motion optimized rendering for complex animations.",
    icon: <Lightbulb size={22} />,
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
  },
  {
    id: 3,
    title: "What I Learned",
    description:
      "Deepened knowledge in performance profiling and optimizing React applications for mobile networks.",
    icon: <Sparkles size={22} />,
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
];

const tableOfContents = [
  "Overview",
  "The Problem",
  "The Solution",
  "Key Features",
  "Technologies",
  "Gallery",
  "Challenges",
  "Performance",
  "The Impact",
];

const techCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="text-blue-500" />,
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
  {
    title: "State Management",
    icon: <Database className="text-blue-500" />,
    items: ["Tanstack Query", "Zustand"],
  },
  {
    title: "APIs",
    icon: <Globe className="text-blue-500" />,
    items: ["Stripe API", "Payment Gateway Integration"],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-blue-500" />,
    items: ["Vite", "TypeScript", "Git", "GitHub", "Postman"],
  },
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  const displayImages = [project.image, project.image, project.image];
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0ea5e9] min-h-screen text-white selection:bg-cyan-500/30">
      {/* Main Wrapper */}
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
          {/* LEFT SIDE: SCROLLABLE CONTENT */}
          <div className="w-full lg:w-2/3 space-y-20 md:space-y-32">
            {/* HERO SECTION */}
            <section className="relative">
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full max-w-[500px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full" />
              </div>

              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Back
              </button>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              >
                {project.title}
              </motion.h1>

              <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={project.liveLink}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Link>
                <Link
                  to={project.githubLink}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 transition-all"
                >
                  <FaGithub size={18} />
                  View Code
                </Link>
              </div>
            </section>

            {/* OVERVIEW */}
            <motion.section
              id="overview"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="scroll-mt-32"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-blue-500 rounded-full" />
                <h2 className="text-3xl font-bold">Overview</h2>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                A modern restaurant website with online ordering capabilities
                and a dynamic menu system designed for a seamless customer
                experience.
              </p>
            </motion.section>

            {/* THE PROBLEM CARD */}
            <motion.section
              id="the-problem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-32"
            >
              <div className="bg-[#161616] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
                <h3 className="text-3xl font-bold mb-10">The Problem</h3>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="text-blue-400 font-bold uppercase tracking-wider text-sm">
                      What we're solving
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      Local restaurants often lack an intuitive and modern
                      digital presence, making it difficult for customers to
                      browse.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-blue-400 font-bold uppercase tracking-wider text-sm">
                      Why it matters
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      A streamlined digital ordering process directly increases
                      sales and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* THE SOLUTION CARD */}
            <motion.section
              id="the-solution"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-32 relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-8 md:p-12 shadow-2xl"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-1 w-12 bg-blue-500 rounded-full" />
                  <h2 className="text-3xl font-bold">The Solution</h2>
                </div>
                <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed">
                  Developed a responsive, high-performance React application
                  with a dynamic menu and integrated checkout flow.
                </p>
              </div>
            </motion.section>

            {/* TECHNOLOGIES GRID - FULLY RESPONSIVE */}
            <section id="technologies" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-blue-500 rounded-full" />
                <h2 className="text-3xl font-bold">Technologies</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {techCategories.map((cat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl border border-white/5 bg-[#161616] hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        {cat.icon}
                      </div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                        {cat.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 w-fit"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* GALLERY - DECREASED HEIGHT */}
            <section id="gallery" className="scroll-mt-32 pb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-blue-500 rounded-full" />
                <h2 className="text-3xl font-bold">Gallery</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayImages.slice(0, 3).map((src, i) => (
                  <div
                    key={i}
                    className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/5 bg-[#161616] flex items-center justify-center p-6"
                  >
                    <img
                      src={src}
                      alt="Gallery"
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </section>
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f] p-5 sm:p-7 lg:p-10 shadow-[0_0_60px_rgba(255,255,255,0.03)]"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-cyan-500/[0.03]" />

              {/* Heading */}
              <div className="relative z-10 mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Challenges & Learnings
                </h2>

                <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-400 leading-relaxed">
                  Key technical challenges, optimization strategies, and
                  valuable lessons learned while building this project.
                </p>
              </div>

              {/* Cards */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                {cardData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ y: -6 }}
                    className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-xl p-5 sm:p-6 transition-all duration-300`}
                  >
                    {/* Blur Effect */}
                    <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

                    {/* Icon */}
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}

                {/* Full Width Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 sm:p-6 md:col-span-2"
                >
                  <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Sparkles size={22} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Performance Result
                  </h3>

                  <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-gray-300">
                    Achieved faster page rendering, smoother animations, and
                    optimized loading performance across desktop and mobile
                    devices by using lazy loading, code splitting, and animation
                    optimization techniques.
                  </p>
                </motion.div>
              </div>
            </motion.section>
            <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07070A] px-5 py-14 sm:px-8 sm:py-20 lg:px-14">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,153,255,0.12),transparent_35%)]" />

              {/* Blur Circle */}
              <div className="absolute top-0 left-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative z-10 max-w-5xl">
                {/* Small Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5"
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="text-sm font-medium tracking-wide text-cyan-300">
                    PROJECT IMPACT
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
                >
                  The Impact
                </motion.h2>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <p className="max-w-4xl text-2xl font-medium leading-snug text-cyan-400 sm:text-3xl lg:text-5xl">
                    “Increased online orders by{" "}
                    <span className="font-bold text-white">30%</span> and
                    improved mobile engagement with a{" "}
                    <span className="font-bold text-white">sub-2-second</span>{" "}
                    load time.”
                  </p>
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                    <h3 className="text-3xl font-bold text-white">30%</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Increase in online orders
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                    <h3 className="text-3xl font-bold text-white">2s</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Optimized loading speed
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                    <h3 className="text-3xl font-bold text-white">100%</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Responsive experience
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: CONSTANT / STICKY SIDEBAR */}
          <aside className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group flex items-center gap-3 py-3 px-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                      <span className="font-medium">{item}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <button
                    onClick={() => navigate("/projects")}
                    className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group"
                  >
                    View All Projects
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
