"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";
import Scene from "@/components/Scene";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-violet-500/30 overflow-hidden">
      
      {/* Immersive Unicorn Background with deep dark blur overlay */}
      <Scene />
      <div className="fixed inset-0 bg-black/80 backdrop-blur-3xl z-[2] pointer-events-none" />

      {/* Fixed Glass Back Button */}
      <Link
        href="/#projects"
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all group shadow-2xl"
        aria-label="Back to Home"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </Link>

      <motion.article 
        layoutId={`project-card-${project.slug}`}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 md:py-40 flex flex-col gap-16"
      >
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/10 border border-white/20 text-white shadow-lg"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.1]"
            style={{
              backgroundImage: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </header>

        {/* Case Study Content Grid Wrapper */}
        <div className="flex flex-col gap-12 bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-16 backdrop-blur-md shadow-2xl">
          
          {/* Section: The Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              The Problem // Challenge
            </h2>
            <div className="w-full">
              <p className="text-lg md:text-xl text-white/80 leading-loose">
                {project.description_challenge}
              </p>
            </div>
          </section>

          {/* Divider */}
          <hr className="border-t border-white/10 w-full opacity-50" />

          {/* Section: The Solution & Technical Deep-Dive */}
          <section className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              The Solution // Technical Deep-Dive
            </h2>
            <div className="w-full">
              <ul className="flex flex-col gap-6">
                {project.execution_features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-5 items-start"
                  >
                    <span className="w-1.5 h-1.5 mt-3 rounded-full bg-violet-400 shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                    <span className="text-lg text-white/80 leading-relaxed font-medium">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          {/* Divider */}
          <hr className="border-t border-white/10 w-full opacity-50" />

          {/* Section: Advanced Concepts & Metrics */}
          <section className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Advanced Concepts // Metrics
            </h2>
            <div className="w-full">
              <div className="p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-sm shadow-inner">
                <p className="text-xl md:text-2xl font-semibold text-white/90 leading-relaxed italic">
                  &quot;{project.advanced_metrics}&quot;
                </p>
              </div>
            </div>
          </section>

        </div>
      </motion.article>
    </main>
  );
}
