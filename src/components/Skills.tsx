"use client";

import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiSpringboot,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-green-500" />,
  },
];

const particles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  width: (i % 4) + 1,
  height: (i % 4) + 1,
  top: (i * 13) % 100,
  left: (i * 17) % 100,
  duration: (i % 3) + 2,
}));

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const techStacks = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],

    backend: [
      "Java",
      "Spring Boot",
      "PHP",
      "Node.js",
      "MySQL",
      "MongoDB",
    ],

    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "NetBeans",
      "REST APIs",
    ],
  };

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#050816] overflow-hidden"
    >
      {/* Galaxy Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-violet-400 animate-pulse"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="text-violet-500 uppercase tracking-[4px] text-sm">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Tech Stack &
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Expertise
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            scalable and high-performance applications.
          </p>
        </div>

        {/* Skills Marquee */}
        <div className="relative overflow-hidden mt-12">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050816] to-transparent z-10" />

          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050816] to-transparent z-10" />

          <div className="flex animate-marquee gap-6 w-max mt-8 mb-8">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="
                group
                min-w-[220px]
                p-7
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:border-violet-500/40
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_0_50px_rgba(139,92,246,0.4)]
                relative
                overflow-hidden
              "
              >
                <div
                  className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-violet-500/10
                  via-transparent
                  to-cyan-500/10
                "
                />

                <div
                  className="
                  text-6xl
                  flex
                  justify-center
                  mb-5
                  relative
                  z-10
                  animate-float
                  group-hover:rotate-[360deg]
                  transition-all
                  duration-700
                "
                >
                  {skill.icon}
                </div>

                <h3 className="text-center text-gray-300 relative z-10 font-medium">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tabs */}
        <div className="mt-20">
          <div className="flex justify-center mb-10">
            <div className="bg-[#0B1020]/80 border border-violet-500/20 rounded-2xl p-2 flex gap-2 backdrop-blur-xl">
              {["frontend", "backend", "tools"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300
                    ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  {techStacks[
    activeTab as keyof typeof techStacks
  ].map((item, index) => (
    <div
      key={index}
      className="relative p-[1px] rounded-2xl overflow-hidden"
    >
      {/* Animated Border */}
      <div className="absolute inset-0 animated-border" />

      {/* Card */}
      <div
        className="
        relative
        bg-[#0B1020]/95
        backdrop-blur-xl
        rounded-2xl
        p-5
        text-center
        h-full
        group
        hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
        transition-all
        duration-300
        overflow-hidden
        "
      >
        {/* Glow Effect */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-br
          from-violet-500/10
          via-transparent
          to-cyan-500/10
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          "
        />

        <h3 className="relative z-10 text-white font-medium">
          {item}
        </h3>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}