"use client";

import { User, Mail, MapPin, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
{/* Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-purple-400 text-center uppercase tracking-[4px] text-sm font-medium">
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Crafting Digital Experiences
            <br />
            That Make{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-slate-400 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a strong focus on
              building scalable web applications and creating exceptional user
              experiences. I enjoy transforming ideas into powerful digital
              solutions using modern technologies.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-6">
              My expertise spans across frontend and backend development,
              enabling me to deliver complete, high-performance applications
              that solve real-world problems efficiently.
            </p>

            <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:scale-105 transition-all duration-300">
              Read More
            </button>
          </div>

          {/* Right Info Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-3xl" />

            <div className="relative bg-[#0B1020]/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Name</p>
                    <p className="text-white font-medium">
                      Oshadha Preveen Bhagya Udaya Kumara
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-white font-medium">
                      preveenoshadha@gmail.com
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Location</p>
                    <p className="text-white font-medium">Sri Lanka</p>
                  </div>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Freelance</p>
                    <p className="text-green-400 font-medium">Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}