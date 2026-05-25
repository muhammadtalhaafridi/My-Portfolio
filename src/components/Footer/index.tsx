import React from "react";
import { motion } from "framer-motion";
import { Mail, ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#141020] pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-4">
              MT<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Crafting modern, scalable, and beautiful digital experiences for
              the web.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {[
              {
                icon: <FaGithub size={20} />,
                href: "https://github.com/muhammadtalhaafridi",
                label: "Github",
              },
              {
                icon: <FaLinkedin size={20} />,
                href: "https://www.linkedin.com/in/muhammad-talha-983b983a2",
                label: "LinkedIn",
              },
              {
                icon: <Mail size={20} />,
                href: "talhaafridi739@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Quick Navigation / Scroll to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Back to top
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <ChevronUp size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Muhammad Talha. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
