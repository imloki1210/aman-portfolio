import Scene from "../components/Scene";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AnimatedDivider from "../components/AnimatedDivider";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import FeaturedProjects from "../components/FeaturedProjects";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-[#06060f] min-h-screen overflow-x-hidden">
      {/* Fixed animated background */}
      <Scene />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Sticky nav */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <AnimatedDivider />
      <ExperienceSection />
      <AnimatedDivider />
      <FeaturedProjects />
      <AnimatedDivider />
      <SkillsSection />
      <AnimatedDivider />
      <ContactSection />
    </main>
  );
}
