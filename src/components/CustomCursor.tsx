"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true); // Default true for safety
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing spring for the large ring
  const springConfig = { stiffness: 120, damping: 20, mass: 0.6 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile touch pointers natively and verify dimensions just in case.
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    setIsMobile(isTouch);

    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  if (isMobile) return null; // 100% removed from DOM

  return (
    <>
      {/* Trailing glass ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hidden md:block [@media(pointer:coarse)]:!hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Snappy dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0 w-4 h-4 rounded-full bg-white hidden md:block [@media(pointer:coarse)]:!hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
