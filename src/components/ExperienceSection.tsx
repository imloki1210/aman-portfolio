"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import cv from "@/data/cv.json";

const sectionVariants: any = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 45 },
  },
};

export default function ExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="experience" ref={ref} className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">Career</p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{
              backgroundImage: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.75) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 18px rgba(255,255,255,0.35))",
            }}
          >
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical glow line */}
          <div className="absolute left-2 md:left-6 top-0 bottom-0 w-px timeline-line" />

          <div className="flex flex-col gap-6 pl-8 md:pl-16">
            {cv.experience.map((exp, i) => {
              const isOpen = openId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[2px] md:left-[18px] w-3.5 h-3.5 rounded-full bg-violet-500 border-2 border-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

                  {/* Card */}
                  <motion.div
                    onClick={() => toggle(exp.id)}
                    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                    whileHover={isOpen ? {} : { borderColor: "rgba(139,92,246,0.4)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-violet-500/5 to-transparent" />

                    {/* Header — always visible */}
                    <div className="flex items-start justify-between gap-4 p-5 md:p-6 cursor-pointer select-none">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
                          {exp.startDate} – {exp.endDate}
                        </p>
                        <h3 className="text-lg font-bold text-white" style={{ textShadow: "0 0 8px rgba(255,255,255,0.25)" }}>{exp.title}</h3>
                        <p className="text-white/75 text-sm font-medium mt-0.5">{exp.company}</p>
                      </div>

                      {/* Expand chevron */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
                        className="mt-1 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-5 md:pb-6 flex flex-col gap-4 border-t border-white/5">
                            {/* Project badge */}
                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold w-fit">
                              <span className="w-1 h-1 rounded-full bg-cyan-400" />
                              {exp.project}
                            </div>

                            {/* Bullets */}
                            <ul className="flex flex-col gap-3">
                              {exp.bullets.map((b, bi) => (
                                <motion.li
                                  key={bi}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: bi * 0.06 }}
                                  className="flex gap-3 text-sm text-white/90 leading-relaxed"
                                >
                                  <span className="mt-2 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                                  <span>{b}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
