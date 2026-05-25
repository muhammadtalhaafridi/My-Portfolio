import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Code2, Rocket } from "lucide-react";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0ea5e9] text-white px-6 pb-12 pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-500">
            Experience
          </h1>
          <p className="text-gray-400 mt-3">
            My journey from learning to becoming a Junior Web Developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 ml-3">
          {/* Journey Start */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-6"
          >
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full ring-8 ring-gray-900"></span>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Rocket size={18} />
                Web Development Journey Started
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  01 July 2025
                </span>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                I began my journey in web development with curiosity and passion
                for building modern web applications. I started learning HTML,
                CSS, JavaScript, and later moved to React.js to build
                interactive user interfaces.
              </p>
            </div>
          </motion.div>

          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 ml-6"
          >
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-8 ring-gray-900"></span>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/10 transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase size={18} />
                  Web Development Intern
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    01 Jan 2026 – 01 April 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    DevsMent Company
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Completed a professional internship at DevsMent Company where I
                worked on real-world frontend projects using React.js and
                TypeScript. I contributed to building responsive interfaces,
                integrating APIs, and improving UI performance.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "REST API",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-gray-400 text-sm">
                <li>• Built reusable and responsive UI components</li>
                <li>• Worked with APIs to display dynamic data</li>
                <li>• Fixed bugs and improved application performance</li>
                <li>• Collaborated with senior developers in team workflows</li>
                <li>• Translated Figma designs into production-ready UI</li>
              </ul>
            </div>
          </motion.div>

          {/* Junior Developer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="ml-6"
          >
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-8 ring-gray-900"></span>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code2 size={18} />
                Junior Web Developer
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                <span>Present</span>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Currently working as a Junior Web Developer, focusing on
                building scalable frontend applications, improving UI/UX, and
                continuously learning modern web technologies. I am actively
                working on personal and freelance projects to strengthen my
                skills.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React.js",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "API Integration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-green-500/10 text-green-300 px-3 py-1 rounded-full border border-green-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
