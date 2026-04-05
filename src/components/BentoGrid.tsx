"use client";

import { motion } from "framer-motion";
import cv from "@/data/cv.json";
import { Mail, Phone, MapPin, Link2, Briefcase, GraduationCap, Code2, Globe, ChevronRight } from "lucide-react";

// ─── Shared card base styles ───────────────────────────────────────────────────
const glassPanelClass =
  "rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_0_rgba(0,0,0,0.25)] overflow-hidden";

const hoverVariants = {
  rest: { y: 0, scale: 1, boxShadow: "0 8px 40px 0 rgba(0,0,0,0.25)" },
  hover: {
    y: -8,
    scale: 1.025,
    boxShadow: "0 24px 60px 0 rgba(0,0,0,0.4)",
    transition: { type: "spring" as const, stiffness: 300, damping: 22 },
  },
};

// ─── Hero Card ─────────────────────────────────────────────────────────────────
function HeroCard() {
  const { personal } = cv;
  return (
    <motion.div
      className={`${glassPanelClass} col-span-1 md:col-span-2 p-8 md:p-10 flex flex-col gap-6`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
    >
      {/* Gradient orb accent */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-violet-500/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Avatar initials */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
          {personal.name.split(" ").map((n: string) => n[0]).join("")}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
          {personal.name}
        </h1>
        <p className="mt-2 text-lg md:text-xl font-medium text-violet-300">
          {personal.title}
        </p>
      </div>

      {/* Contact pills */}
      <div className="relative flex flex-wrap gap-2">
        {[
          { icon: <Mail size={13} />, label: personal.email, href: `mailto:${personal.email}` },
          { icon: <Phone size={13} />, label: personal.phone, href: `tel:${personal.phone}` },
          { icon: <MapPin size={13} />, label: personal.location, href: "#" },
          { icon: <Link2 size={13} />, label: personal.linkedin, href: `https://${personal.linkedin}` },
        ].map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs hover:bg-white/20 hover:text-white transition-all duration-200"
          >
            <span className="text-violet-300">{icon}</span>
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Experience Card ────────────────────────────────────────────────────────────
function ExperienceCard({ exp }: { exp: typeof cv.experience[0] }) {
  return (
    <motion.div
      className={`${glassPanelClass} col-span-1 md:col-span-2 p-7 flex flex-col gap-4`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-400/30 flex items-center justify-center shrink-0">
          <Briefcase size={16} className="text-violet-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold text-white leading-tight">{exp.title}</h2>
          <p className="text-violet-300 text-sm font-semibold">{exp.company}</p>
        </div>
        <span className="text-xs text-white/50 whitespace-nowrap shrink-0 mt-0.5">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>

      {/* Project badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs w-fit">
        <ChevronRight size={11} />
        {exp.project}
      </div>

      {/* Bullets */}
      <ul className="space-y-2">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-white/70 text-sm leading-relaxed">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Education Card ─────────────────────────────────────────────────────────────
function EducationCard() {
  const edu = cv.education[0];
  return (
    <motion.div
      className={`${glassPanelClass} col-span-1 p-7 flex flex-col gap-4`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
    >
      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
        <GraduationCap size={16} className="text-emerald-300" />
      </div>
      <div>
        <h2 className="text-sm font-bold text-white leading-snug">{edu.degree}</h2>
        <p className="text-emerald-300 text-sm font-semibold mt-1">{edu.institution}</p>
        <p className="text-white/50 text-xs mt-1">
          {edu.startYear} – {edu.endYear} · {edu.location}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Skills Card ────────────────────────────────────────────────────────────────
function SkillsCard() {
  const { skills } = cv;
  const sections: [string, string[]][] = [
    ["Languages", skills.languages],
    ["Libraries & Frameworks", skills.librariesFrameworks],
    ["Technologies & Tools", skills.technologiesTools],
  ];

  const tagColors = [
    "bg-violet-500/20 border-violet-400/30 text-violet-200",
    "bg-cyan-500/20 border-cyan-400/30 text-cyan-200",
    "bg-orange-500/20 border-orange-400/30 text-orange-200",
  ];

  return (
    <motion.div
      className={`${glassPanelClass} col-span-1 p-7 flex flex-col gap-5`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
    >
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
          <Code2 size={16} className="text-cyan-300" />
        </div>
        <h2 className="text-sm font-bold text-white">Skills</h2>
      </div>

      <div className="space-y-4">
        {sections.map(([label, items], si) => (
          <div key={label}>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{label}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${tagColors[si]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Languages Card ─────────────────────────────────────────────────────────────
function LanguagesCard() {
  return (
    <motion.div
      className={`${glassPanelClass} col-span-1 p-7 flex flex-col gap-5`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
    >
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center">
          <Globe size={16} className="text-pink-300" />
        </div>
        <h2 className="text-sm font-bold text-white">Languages</h2>
      </div>

      <div className="space-y-3">
        {cv.languages.map((lang) => (
          <div key={lang.name} className="flex items-center justify-between gap-3">
            <span className="text-sm text-white/80 w-20">{lang.name}</span>
            <div className="flex gap-1.5 flex-1">
              {Array.from({ length: lang.max }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.07, type: "spring", stiffness: 400 }}
                  className={`w-3 h-3 rounded-full border ${
                    i < lang.proficiency
                      ? "bg-pink-400 border-pink-300 shadow-[0_0_6px_2px_rgba(244,114,182,0.4)]"
                      : "bg-white/10 border-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Grid ──────────────────────────────────────────────────────────────────
export default function BentoGrid() {
  return (
    <div className="relative z-10 min-h-screen px-4 py-10 md:px-10 md:py-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {/* Row 1 – Hero (full width) */}
        <HeroCard />

        {/* Row 2 – Experience 1 (full width) */}
        <ExperienceCard exp={cv.experience[0]} />

        {/* Row 3 – Experience 2 (full width) */}
        <ExperienceCard exp={cv.experience[1]} />

        {/* Row 4 – Education + Languages (side by side on md+) */}
        <EducationCard />
        <LanguagesCard />

        {/* Row 5 – Skills (full width) */}
        <SkillsCard />
      </div>
    </div>
  );
}
