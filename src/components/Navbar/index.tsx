import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-[#0f172a]/90 via-[#1e3a8a]/90 to-[#6d28d9]/90 shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <h1 className="text-xl font-extrabold tracking-wider text-white">
          MT<span className="text-cyan-300">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative group transition duration-300 p-1 ${
                  isActive
                    ? "text-white border-b-2 border-cyan-600 "
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-5 bg-gradient-to-b from-[#1e3a8a] to-[#6d28d9] text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-cyan-300"
                    : "text-white/80 hover:text-cyan-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
