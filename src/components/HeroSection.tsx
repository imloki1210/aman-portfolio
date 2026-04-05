"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Full Stack Developer",
  "React.js / Next.js Specialist",
  "JavaScript / TypeScript",
  "Python FastAPI Engineer",
];

function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="font-mono text-violet-300 font-semibold inline-flex items-center tracking-tight">
      {displayed}
      <span className="inline-block w-[0.4em] h-[1.1em] ml-[2px] bg-violet-400 animate-blink opacity-80" />
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
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, type: "spring", stiffness: 45 }}
        className="relative max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Terminal Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="font-mono flex items-center gap-2 px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white/80 text-sm shadow-xl"
        >
          <span className="text-violet-400 font-bold">&gt;</span>
          <span>Software Developer | Next.js | Python FastAPI</span>
          <span className="w-1.5 h-4 bg-white/70 animate-pulse ml-1" />
        </motion.div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mt-4">
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

        {/* Subtitle with High Contrast Dev Typing Effect */}
        <div className="text-xl sm:text-2xl mt-2 tracking-wide min-h-[36px]">
          <AnimatedTitle />
        </div>

        {/* CTA */}
        <motion.a
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden group"
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
