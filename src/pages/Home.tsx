import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import TapeSection from "@/components/TapeSection/TapeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <TapeSection />
      <ProjectSection />
    </main>
  );
}
