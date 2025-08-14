import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import TapeSection from "@/components/TapeSection/TapeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <TapeSection />
      <ProjectSection />
    </main>
  );
}
