"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    title: "Full Stack Developer",
    company: "Freelance",
    description:
      "Building modern web applications and scalable software solutions for clients worldwide.",
  },
  {
    year: "2023 - 2024",
    title: "Frontend Developer",
    company: "Tech Solutions",
    description:
      "Developed responsive websites, dashboards and interactive user interfaces.",
  },
  {
    year: "2022 - 2023",
    title: "UI/UX Designer",
    company: "Design Studio",
    description:
      "Designed user interfaces and improved user experiences for digital products.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#050816] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-violet-500 uppercase tracking-[4px] text-sm">
            Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">

          {/* Animated Timeline Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute top-3 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600"
          />

          <div className="grid md:grid-cols-3 gap-10 relative">

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="relative"
              >
                {/* Glow Dot */}
                <div className="absolute -top-3 left-0 w-6 h-6 rounded-full bg-violet-500 border-4 border-[#050816] shadow-[0_0_25px_rgba(139,92,246,0.8)] animate-pulse" />

                {/* Card */}
                <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]">
                  
                  <p className="text-violet-400 text-sm font-medium">
                    {item.year}
                  </p>

                  <h3 className="text-xl font-bold text-white mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {item.company}
                  </p>

                  <p className="text-gray-500 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[180px] rounded-full pointer-events-none" />
    </section>
  );
}