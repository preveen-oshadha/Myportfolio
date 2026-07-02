"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            Oshadha<span className="text-violet-500 font-extrabold">Preveen</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 font-medium hover:text-violet-400 transition-colors duration-300 text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="#contact"
            className="hidden md:block relative overflow-hidden px-6 py-2.5 rounded-xl bg-violet-600 text-white font-medium transition-all duration-300 hover:bg-violet-700 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-95 group"
          >
            <span className="relative z-10 text-sm">Let's Talk</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-3xl z-[100] focus:outline-none p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {open ? <HiX /> : <HiMenuAlt3 />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#050816]/98 backdrop-blur-2xl border-t border-white/5 z-50 overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-6 h-full justify-center max-w-md mx-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-violet-400 font-semibold text-2xl tracking-wide block py-2 border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 block w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-center font-bold text-base shadow-lg shadow-violet-600/20 active:scale-95 transition-all duration-200"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}