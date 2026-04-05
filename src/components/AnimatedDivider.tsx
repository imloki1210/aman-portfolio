"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-10 overflow-hidden opacity-80">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="h-[1px] w-full max-w-5xl mx-auto"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}
