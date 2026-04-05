"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import projects from "@/data/projects.json";

export default function FeaturedProjects() {

  return (
    <section id="projects" className="relative z-10 py-24 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 45 }}
          className="mb-16 text-center"
        >
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">Portfolio</p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{
              backgroundImage: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {projects.map((project, idx) => (
            <Link key={project.id} href={`/project/${project.slug}`}>
              <motion.div
                layoutId={`project-card-${project.slug}`}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring", stiffness: 45 } }
                }}
                className="group relative flex flex-col h-full p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.25)] active:scale-95"
              >
                {/* Header */}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
