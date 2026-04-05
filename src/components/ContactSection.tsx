"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import cv from "@/data/cv.json";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { personal } = cv;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 py-32 px-6 text-center"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/12 blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 45 }}
          className="text-violet-400 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Get In Touch
        </motion.p>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 45 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none"
          style={{
            backgroundImage: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.35))",
          }}
        >
          Let&#39;s Talk
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 45 }}
          className="text-white/80 text-lg max-w-md leading-relaxed"
        >
          Have a project in mind or just want to say hello?
          I&#39;m always open to new opportunities and conversations.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Email */}
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-violet-600 border border-violet-400/30 text-white font-semibold text-sm transition-colors hover:bg-violet-500"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {personal.email}
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white/90 font-semibold text-sm backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {personal.linkedin}
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white/90 font-semibold text-sm backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {personal.phone}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
