"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Home",       href: "#hero"       },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-6 inset-x-0 mx-auto w-max max-w-[calc(100vw-2rem)] z-50 flex justify-center"
    >
      <div className="flex items-center gap-0.5 sm:gap-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full overflow-x-auto no-scrollbar">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="relative px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10 shrink-0 group"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
