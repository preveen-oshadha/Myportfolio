"use client";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <span className="text-purple-400 uppercase tracking-[4px] text-sm font-medium">
              Get In Touch
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              Let's Build Something
              <br />
              Amazing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
                Together
              </span>
            </h2>

            <p className="mt-6 text-slate-400 text-lg max-w-lg">
              Have a project in mind? Let’s discuss your ideas and bring
              them to life with modern technologies and creative solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              {[
                {
                  icon: <FaGithub size={20} />,
                  link: "https://github.com/preveen-oshadha",
                },
                {
                  icon: <FaLinkedinIn size={20} />,
                  link: "https://www.linkedin.com/in/oshadha-preveen-06707b3a6/",
                },
                {
                  icon: <FaFacebook size={20} />,
                  link: "https://www.facebook.com/oshada.preveen/",
                },
                {
                  icon: <FaEnvelope size={20} />,
                  link: "https://mail.google.com/mail/?view=cm&fs=1&to=preveenoshadha@gmail.com",
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 bg-[#0d1025] text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-3xl" />

            <div className="relative bg-[#0B1020]/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 md:p-8">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-[#12182D] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#12182D] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>

                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full bg-[#12182D] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition resize-none"
                />

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-medium hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-purple-500/30"
                >
                  Send Message
                  <IoSend
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}