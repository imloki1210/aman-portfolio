"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Software Developer",
  "Frontend Engineer",
  "React.js Specialist",
  "Next.js Developer",
];

function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-violet-300 font-semibold">
      {displayed}
      <span className="inline-block w-0.5 h-[1.1em] ml-0.5 bg-violet-400 align-middle animate-pulse" />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center text-center px-6 pt-24"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="relative max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-300 text-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none">
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #fff 0%, #fff 50%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(255,255,255,0.45))",
            }}
          >
            Aman Singh
          </span>
        </h1>

        {/* Animated designation */}
        <p className="text-xl sm:text-2xl font-medium text-white/60 h-8">
          <AnimatedTitle />
        </p>

        {/* Tagline */}
        <p className="max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
          Building fast, scalable, and delightful frontend experiences
          with React &amp; Next.js — one component at a time.
        </p>

        {/* CTA */}
        <motion.a
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden group"
        >
          {/* Button bg */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 opacity-90 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-0 rounded-full glow-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10">View My Work</span>
          <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
