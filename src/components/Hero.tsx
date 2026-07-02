"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; top: string; left: string }[]
  >([]);

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050816] pt-28"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full" />

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {mounted && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-violet-400 rounded-full animate-pulse"
            style={{
              top: particle.top,
              left: particle.left,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-violet-400 font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Oshadha
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Preveen
            </span>
          </h1>

          <div className="mt-6 text-2xl font-medium text-gray-300 h-12">
            {mounted && (
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Next.js Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            )}
          </div>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            I build modern web applications, scalable software
            solutions and beautiful digital experiences using
            cutting-edge technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="#projects"
              className="
              px-8 py-4 rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-purple-500
              text-white
              font-medium
              hover:scale-105
              transition-all
              duration-300
              hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]
              text-center
            "
            >
              View My Work
            </Link>

            <a
              href="https://drive.google.com/file/d/1qx6S9zkdp8F0YjDluikyyN3q173Eyt5V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-8 py-4 rounded-xl
              border border-white/20
              text-white
              hover:border-violet-500
              hover:bg-violet-500/10
              transition-all
              text-center
            "
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              ["2+", "Years"],
              ["20+", "Projects"],
              ["10+", "Clients"],
              ["100%", "Success"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="
                bg-[#0B1023]/70
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-5
                text-center
              "
              >
                <h3 className="text-2xl font-bold text-violet-400">
                  {value}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[520px] h-[520px] rounded-full border border-violet-500/20"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[430px] h-[430px] rounded-full border-2 border-violet-500/40"
          />

          {/* Orbit Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[550px] h-[550px]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="bg-[#0B1023] p-4 rounded-full text-cyan-400 text-4xl shadow-lg">
                <SiReact />
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="bg-[#0B1023] p-4 rounded-full text-white text-4xl shadow-lg">
                <SiNextdotjs />
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="bg-[#0B1023] p-4 rounded-full text-blue-500 text-4xl shadow-lg">
                <SiTypescript />
              </div>
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="bg-[#0B1023] p-4 rounded-full text-green-500 text-4xl shadow-lg">
                <SiNodedotjs />
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative z-20"
          >
            <div
              className="
              relative
              w-[350px]
              h-[350px]
              md:w-[400px]
              md:h-[400px]
              rounded-full
              overflow-hidden
              border-4
              border-violet-500/30
              shadow-[0_0_80px_rgba(139,92,246,0.4)]
            "
            >
              <Image
                src="/profile/portfolio_profile.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}