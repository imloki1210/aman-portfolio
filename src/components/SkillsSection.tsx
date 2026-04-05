"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MonitorSmartphone, Terminal, Database } from "lucide-react";

const pillars = [
  {
    title: "Frontend & UI",
    icon: <MonitorSmartphone className="w-6 h-6 text-violet-300" />,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    accent: "bg-violet-500/10 border-violet-400/20",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]",
  },
  {
    title: "Backend & AI",
    icon: <Terminal className="w-6 h-6 text-cyan-300" />,
    skills: ["Python", "FastAPI", "PostgreSQL", "Vector DBs (Pinecone/FAISS)", "LLM Orchestration"],
    accent: "bg-cyan-500/10 border-cyan-400/20",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]",
  },
  {
    title: "Database & Tools",
    icon: <Database className="w-6 h-6 text-emerald-300" />,
    skills: ["Git", "GitHub", "Docker", "WebSockets", "Redis"],
    accent: "bg-emerald-500/10 border-emerald-400/20",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.3)]",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="skills" ref={ref} className="relative z-10 py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 text-center"
        >
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">Capabilities</p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{
              backgroundImage: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            System Architecture
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
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring", stiffness: 45 } }
              }}
              className={`group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 ${pillar.glow} hover:bg-white/10 hover:-translate-y-2`}
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border mb-8 ${pillar.accent}`}>
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-6">
                {pillar.title}
              </h3>

              {/* Skills List */}
              <ul className="flex flex-col gap-4 mt-auto">
                {pillar.skills.map((skill, sIdx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.15 + (sIdx * 0.1) + 0.3 }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/70 transition-colors duration-300" />
                    <span className="font-medium tracking-wide">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
