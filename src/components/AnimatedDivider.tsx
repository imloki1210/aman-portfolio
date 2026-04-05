"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-4 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="h-px w-full max-w-4xl mx-8"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(139,92,246,0.6) 30%, rgba(167,139,250,0.8) 50%, rgba(139,92,246,0.6) 70%, transparent)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}
