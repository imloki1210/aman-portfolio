"use client";

import UnicornScene from "unicornstudio-react";

export default function Scene() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden", // Absolute cropping of everything out of bounds
        backgroundColor: "#06060f"
      }}
    >
      {/* 
        Ultra aggressive WebGL crop hack: 
        Because UnicornStudio uses closed Shadow DOMs, we physically stretch the container 
        far beyond the viewport's bottom. Since their watermark anchors "bottom: 20px" relative to 
        this stretched wrapper, the watermark lands roughly 130px beneath the monitor's screen bounds!
      */}
      <div 
        style={{ 
          position: "absolute",
          top: "-150px", // Keeps background center vertically balanced
          left: 0,
          right: 0,
          bottom: "-150px", // Pushes bottom boundary way down under the screen
        }}
      >
        <UnicornScene
          projectId="Cxzw2weKLvu3uAoVVaNy"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js"
        />
      </div>

      {/* Dark overlay: dims canvas to boost text contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.52)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}
