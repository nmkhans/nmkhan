import { Button } from "../ui/button";
import GrainImage from "@/assets/images/grain.jpg";
import SelfImage from "@/assets/images/moin.jpg";
import { Github, ArrowUpRight } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <div>
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest text-gray-700 dark:bg-gradient-to-r from-emerald-300 to-sky-400 dark:text-transparent bg-clip-text text-center text-sm md:text-base">
              Introducing Myself
            </p>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl text-center mt-5">
            About Me
          </h2>
          <p className="text-center dark:text-white/60 text-gray-900/80 mt-4 md:text-lg lg:max-w-md mx-auto">
            Learn more about who I am, what I do and what inspires me.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-20">
          <div className="w-full lg:max-w-2xl">
            <h2 className="font-calistoga text-2xl lg:text-4xl font-bold dark:text-white">
              Hi, I am Moin Khan.
            </h2>
            <h3 className="mt-3 font-bold text-lg">
              - Frontend Developer
            </h3>
            <p className="mt-8 dark:text-white/80 leading-8">
              Passionate Software Developer with a knack for building
              full-stack web applications using modern technologies
              like React.js, Next.js and Tailwind CSS. My journey in
              tech began with a curiosity for solving real-world
              problems through innovative solutions, which evolved
              into a love for crafting user-centric digital
              experiences. <br /> <br />
              Beyond coding, I thrive in collaborative environments
              and enjoy tackling challenging problems with creative
              solutions. I aim to contribute to impactful projects
              that make a difference in users' lives.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                <Github /> View Github
              </Button>
              <Button variant="outline">
                Let's Connect
                <ArrowUpRight />
              </Button>
            </div>
          </div>
          <div>
            <div className="dark:bg-gray-800 rounded-xl relative z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:-z-10 dark:after:outline-white/20 after:outline-gray-400/20 after:outline-2 after:-outline-offset-2 after:rounded-xl p-8">
              <div
                className="absolute top-0 left-0 inset-0 -z-50 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage})`,
                }}
              ></div>
              <div>
                <div className="">
                  <img
                    className="lg:max-w-sm grayscale rounded-lg"
                    src={SelfImage}
                    alt="Self Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
