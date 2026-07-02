"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "All" | "Web" | "Desktop" | "Mobile" | "UI";
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ecommerce Product Selling Store",
    description:
      "This application is designed to simulate a real-world eCommerce system where users can browse products, search items, manage shopping carts, and place orders securely.",
    image: "/projects/E_commerce_web.png",
    category: "Web",
    tech: ["Java EE","JSP, Servlets", "HTML", "My Sql"],
    github: "https://github.com/preveen-oshadha/Ecommerce-JAVA-EE.git",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Property Exchanger - Android Mobile Application",
    description: "Property Exchanger is a modern Android mobile application developed to simplify property buying, selling, and browsing in Sri Lanka.",
    image: "/projects/propertyexcanger.png",
    category: "Mobile",
    tech: ["Java", "Firebase", "Payment Gateway"],
    github: "https://github.com/preveen-oshadha/property_exchanger.git",
    live: "#",
  },
  {
    id: 3,
    title: "GlobeMed Healthcare Management System",
    description: "Comprehensive Healthcare Operations & Management Platform Built using Object-Oriented Design Patterns and Modern Software Architecture",
    image: "/projects/GlobeMed.png",
    category: "Desktop",
    tech: ["Java","MySQL"],
    github: "https://github.com/preveen-oshadha/Healthcare-Management-System.git",
    live: "#",
  },
  {
    id: 4,
    title: "Chat App ",
    description: "Real time chat application.",
    image: "/projects/ChatApp.png",
    category: "Mobile",
    tech: ["React Native", "Java EE", "Mysql"],
    github: "https://github.com/preveen-oshadha/Chaterbox.git",
    live: "#",
  },
];

const categories: Project["category"][] = [
  "All",
  "Web",
  "Desktop",
  "Mobile",
  "UI",
];

export default function Projects() {
  const [active, setActive] = useState<Project["category"]>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const featuredProject = filtered.find((p) => p.featured);
  const normalProjects = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Projects
          </h2>
          <p className="text-gray-500 mt-3">
            Some things I’ve built recently
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                active === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured */}
        {featuredProject && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">
              Featured Project
            </h3>

            <div className="group rounded-2xl overflow-hidden border bg-white dark:bg-zinc-900">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {featuredProject.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {featuredProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-5">
                  <a
                    href={featuredProject.live}
                    className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm"
                  >
                    Live
                  </a>
                  <a
                    href={featuredProject.github}
                    className="px-4 py-2 rounded-lg border text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normalProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border bg-white dark:bg-zinc-900 hover:shadow-lg transition"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-5">
                  <a
                    href={project.live}
                    className="text-sm px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="text-sm px-4 py-2 rounded-lg border"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}