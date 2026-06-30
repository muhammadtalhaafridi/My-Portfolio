import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, ChevronRight } from "lucide-react";
import myImage from "../../assets/Image.jpeg";
const About: React.FC = () => {
  // Animation variants for staggered orchestrations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    {
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      value: "3+",
      label: "months Experience",
    },
    {
      icon: <Award className="w-5 h-5 text-purple-400" />,
      value: "3+",
      label: "Projects Completed",
    },
  ];

  const coreSkills = [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Zod & React Hook Form",
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#0b0f19] text-slate-100 flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-6xl w-full mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">
            Get To Know Me
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Profile Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center perspective-1000"
          >
            <motion.div
              className="relative group w-full max-w-[380px] aspect-square rounded-2xl cursor-pointer"
              whileHover={{
                scale: 1.015,
                rotateX: 2,
                rotateY: -2,
                y: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              {/* Soft Dynamic Glow Shadow Base (Behind the card) */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none" />

              {/* Outer Premium Border Wrapper */}
              <div className="w-full h-full rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/20 to-purple-500/10 group-hover:from-blue-500/40 group-hover:to-purple-500/30 transition-colors duration-500">
                {/* Inside Glass Card Body */}
                <div className="relative w-full h-full rounded-2xl bg-gradient to-purple-300 from-cyan-300 overflow-hidden flex items-center justify-center p-6 border border-slate-800/50 backdrop-blur-md">
                  {/* Ambient grid lines inside the card */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  {/* The Glassmorphism Ring Frame */}
                  <div className="relative w-64 h-64 md:w-76 md:h-76 rounded-full p-[2px] bg-gradient-to-tr from-blue-500/50 via-slate-700/30 to-purple-500/50 shadow-xl">
                    {/* Inner Circle Frame Containing Image and Hover-Activated Inset Shadows */}
                    <div className="w-full h-full rounded-full bg-[#1c2333] overflow-hidden border-4 border-[#131926] relative">
                      {/* Profile Image */}
                      <img
                        src={myImage}
                        alt="Profile"
                        className="w-full h-full object-cover grayscale-[15%] contrast-[102%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />

                      {/* HOVER INNER SHADOW OVERLAY
                  This transitions smoothly from completely transparent to a deep inset shadow on cursor enter.
                */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none mix-blend-multiply transition-all duration-500"
                        initial={{
                          boxShadow: "inset 0 0px 0px rgba(0,0,0,0)",
                        }}
                        whileHover={{
                          boxShadow:
                            "inset 0 6px 14px rgba(0, 0, 0, 0.75), inset 0 -3px 10px rgba(255, 255, 255, 0.04)",
                        }}
                      />

                      {/* Micro bezel ring overlay that darkens smoothly on hover */}
                      <div className="absolute inset-0 rounded-full ring-[6px] ring-black/0 group-hover:ring-black/25 transition-all duration-500 pointer-events-none" />

                      {/* Subtle light shimmer shift on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Column: Narrative & Stats */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center gap-3">
              Front-End Developer & UI/UX Enthusiast
            </h3>

            <p className="text-slate-400 leading-relaxed text-base md:text-lg">
              I am a passionate Front-End Developer with over 3 months of
              professional experience architecture-building scalable, highly
              interactive, and visually stunning web applications. My structural
              expertise centers around modern robust toolsets like
              <span className="text-blue-400 font-medium"> React.js</span>, and
              <span className="text-purple-400 font-medium"> TypeScript</span>.
            </p>

            {/* Core Tech Quick-List */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-3">
                Core Tech Stack
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {coreSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-slate-300 text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards Section */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="p-4 rounded-xl bg-[#131926] border border-slate-800/80 flex items-center gap-4 transition-colors duration-300"
                >
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
