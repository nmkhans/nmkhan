import MimojiImage from "@/assets/images/memoji-computer.png";
import GrainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import StarLightIcon from "@/assets/icons/star-light.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import SparkleLightIcon from "@/assets/icons/sparkle-light.svg";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import HeroOrbit from "../HeroOrbit/HeroOrbit";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme()!;

  return (
    <section
      id="home"
      className="py-32 md:py-48 relative z-0 overflow-clip"
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${GrainImage})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={750} rotation={-72}>
        <img
          className="size-22"
          src={theme === "light" ? StarLightIcon : StarIcon}
          alt="Star icon"
        />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={10}>
        <img
          className="size-12"
          src={theme === "light" ? StarLightIcon : StarIcon}
          alt="Star icon"
        />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={98}>
        <img
          className="size-8"
          src={theme === "light" ? StarLightIcon : StarIcon}
          alt="Star icon"
        />
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-15}>
        <img
          className="size-8"
          src={theme === "light" ? SparkleLightIcon : SparkleIcon}
          alt="Sparkle icon"
        />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={80}>
        <img
          className="size-5"
          src={theme === "light" ? SparkleLightIcon : SparkleIcon}
          alt="Sparkle icon"
        />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={170}>
        <img
          className="size-10"
          src={theme === "light" ? SparkleLightIcon : SparkleIcon}
          alt="Sparkle icon"
        />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={140}>
        <img
          className="size-14"
          src={theme === "light" ? SparkleLightIcon : SparkleIcon}
          alt="Sparkle icon"
        />
      </HeroOrbit>

      <HeroOrbit size={720} rotation={95}>
        <div
          className={`size-3 ${
            theme === "light" ? "bg-gray-400/20" : "bg-emerald-300/20"
          } rounded-full`}
        />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-40}>
        <div
          className={`size-2 ${
            theme === "light" ? "bg-gray-400/20" : "bg-emerald-300/20"
          } rounded-full`}
        />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
        <div
          className={`size-3 ${
            theme === "light" ? "bg-gray-400/20" : "bg-emerald-300/20"
          } rounded-full`}
        />
      </HeroOrbit>

      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col items-center">
          <img
            className="w-25"
            src={MimojiImage}
            alt="User with computer"
          />
          <div className="bg-white dark:bg-gray-950 border border-gray-900/20 dark:border-gray-800 px-4 py-1.5 flex gap-4 rounded-lg items-center">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div>
              <h3 className="text-sm font-medium">
                Available for new projects
              </h3>
            </div>
          </div>
          <div className="md:max-w-lg lg:max-w-xl mx-auto">
            <h1 className="font-calistoga text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exeptional Web Applications
            </h1>
            <p className="mt-4 text-center dark:text-white/60">
              I specialize in transforming designs into functional,
              high-performing web applications. Let's discuss your
              next project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center mt-8 gap-5">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg !px-4"
            >
              <a
                href="https://www.linkedin.com/in/nmkhans"
                target="_blank"
              >
                <span className="text-xl animate-bounce">👋</span>
                <span>Let's Connect</span>
              </a>
            </Button>
            <Button asChild className="h-12 rounded-lg !px-4">
              <a href="/resume.pdf" download>
                <Download />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
