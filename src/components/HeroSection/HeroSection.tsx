import MimojiImage from "@/assets/images/memoji-computer.png";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col items-center">
          <img
            className="w-25"
            src={MimojiImage}
            alt="User with computer"
          />
          <div className="bg-white dark:bg-gray-950 border border-gray-900/20 dark:border-gray-800 px-4 py-1.5 flex gap-4 rounded-lg items-center">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div>
              <h3 className="text-sm font-medium">
                Available for new projects
              </h3>
            </div>
          </div>
          <h1 className="font-calistoga text-3xl text-center mt-8 tracking-wide">
            Building Exeptional Web Applications
          </h1>
          <p className="mt-4 text-center dark:text-white/60">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next
            project.
          </p>
          <div className="flex flex-col lg:flex-row items-center mt-8 gap-5">
            <Button
              variant="outline"
              className="h-12 rounded-lg !px-4"
            >
              <span className="text-xl animate-pulse">👋</span>
              <span>Let's Connect</span>
            </Button>
            <Button className="h-12 rounded-lg !px-4">
              <Download />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
