"use client";

import UnicornScene from "unicornstudio-react";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#06060f]">
      {/* 
        Container stretched slightly to hide watermarks if needed,
        but using object-fit to ensure the canvas covers mobile displays correctly.
      */}
      <div
        className="absolute w-full h-[120vh] -top-[10vh]"
        style={{ objectFit: "cover" }}
      >
        <UnicornScene
          projectId="Cxzw2weKLvu3uAoVVaNy"
          width="100%"
          height="100%"
          scale={1}
          dpi={2}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js"
        />
      </div>

      {/* Dark overlay: dims canvas to boost text contrast */}
      <div className="absolute inset-0 bg-black/50 z-[1] pointer-events-none" />
    </div>
  );
}
