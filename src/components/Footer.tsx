"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full" />

      {/* Animated Grid */}
      <div
        className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white"
            >
              Oshadha
              <span className="text-violet-500"> Preveen</span>
            </motion.h2>

            <p className="mt-5 text-gray-400 max-w-md leading-relaxed">
              Passionate Full Stack Developer focused on
              building modern web applications, scalable
              software solutions and exceptional digital
              experiences.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                    text-gray-400
                    hover:text-violet-400
                    transition-all
                    duration-300
                  "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>📍 Sri Lanka</p>
              <p>📧 preveenoshadha@email.com</p>
              <p>📱 +94 77 027 1399</p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                rotate: 10,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="
              mt-8
              w-12 h-12
              rounded-xl
              flex items-center justify-center
              bg-violet-600
              text-white
              shadow-lg
              shadow-violet-500/30
            "
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Oshadha Preveen. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}