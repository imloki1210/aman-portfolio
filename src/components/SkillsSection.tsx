"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import cv from "@/data/cv.json";

// Color palette pools for tags
const colorSets = [
  { bg: "bg-violet-500/15", border: "border-violet-400/25", text: "text-violet-200" },
  { bg: "bg-cyan-500/15",   border: "border-cyan-400/25",   text: "text-cyan-200"   },
  { bg: "bg-pink-500/15",   border: "border-pink-400/25",   text: "text-pink-200"   },
  { bg: "bg-amber-500/15",  border: "border-amber-400/25",  text: "text-amber-200"  },
  { bg: "bg-emerald-500/15",border: "border-emerald-400/25",text: "text-emerald-200"},
  { bg: "bg-sky-500/15",    border: "border-sky-400/25",    text: "text-sky-200"    },
];

// Deterministic color from skill name
function colorFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h += name.charCodeAt(i);
  return colorSets[h % colorSets.length];
}

// Floating animation with random-ish params seeded from index
function floatVariant(i: number) {
  const yAmp = 4 + (i % 4);
  const dur = 2.8 + (i % 5) * 0.4;
  const delay = (i % 7) * 0.3;
  return {
    animate: {
      y: [0, -yAmp, 0],
      transition: {
        duration: dur,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay,
      },
    },
  };
}

const allSkills = [
  ...cv.skills.languages,
  ...cv.skills.librariesFrameworks,
  ...cv.skills.technologiesTools,
];

const groups = [
  { label: "Languages",               skills: cv.skills.languages           },
  { label: "Libraries & Frameworks",  skills: cv.skills.librariesFrameworks  },
  { label: "Technologies & Tools",    skills: cv.skills.technologiesTools    },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="skills" ref={ref} className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 text-center"
        >
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">Tech Stack</p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{
              backgroundImage: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Skills
          </h2>
        </motion.div>

        {/* Grouped floating tags */}
        <div className="flex flex-col gap-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <p className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-5 text-center">
                {group.label}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill, si) => {
                  const globalIndex = allSkills.indexOf(skill);
                  const clr = colorFor(skill);
                  const float = floatVariant(globalIndex + si);
                  return (
                    <motion.span
                      key={skill}
                      variants={float}
                      animate="animate"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.05 + gi * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(139,92,246,0.4)",
                      }}
                      className={`px-4 py-2 rounded-full border text-sm font-medium ${clr.bg} ${clr.border} ${clr.text}`}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
