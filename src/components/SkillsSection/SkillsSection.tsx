import JavascriptImg from "@/assets/icons/javascript.png";
import TypescriptImg from "@/assets/icons/typescript.png";
import ReactImg from "@/assets/icons/react.png";
import ReduxjsImg from "@/assets/icons/redux.png";
import NextjsImg from "@/assets/icons/nextjs.png";
import NodeImg from "@/assets/icons/nodejs.png";
import ExpressImg from "@/assets/icons/express-light.png";
import MongodbImg from "@/assets/icons/mongodb.png";
import MongooseImg from "@/assets/icons/mongoose.png";
import HTMLImg from "@/assets/icons/html.png";
import CSSImg from "@/assets/icons/css.png";
import TailwindImg from "@/assets/icons/tailwind.png";
import GitImg from "@/assets/icons/git.png";
import GithubImg from "@/assets/icons/github.png";
import FirebaseImg from "@/assets/icons/firebase.png";
import { useTheme } from "@/context/ThemeContext";

const skills = [
  {
    name: "Javascript",
    image: JavascriptImg,
  },
  {
    name: "Typescript",
    image: TypescriptImg,
  },
  {
    name: "Reactjs",
    image: ReactImg,
  },
  {
    name: "Reduxjs",
    image: ReduxjsImg,
  },
  {
    name: "Nextjs",
    image: NextjsImg,
  },
  {
    name: "Nodejs",
    image: NodeImg,
  },
  {
    name: "Expressjs",
    image: ExpressImg,
  },
  {
    name: "MongoDB",
    image: MongodbImg,
  },
  {
    name: "Mongoose",
    image: MongooseImg,
  },
  {
    name: "HTML",
    image: HTMLImg,
  },
  {
    name: "CSS",
    image: CSSImg,
  },
  {
    name: "Tailwind",
    image: TailwindImg,
  },
  {
    name: "Git",
    image: GitImg,
  },
  {
    name: "Github",
    image: GithubImg,
  },
  {
    name: "Firebase",
    image: FirebaseImg,
  },
];

console.log(skills.length);

export default function SkillsSection() {
  const { theme } = useTheme()!;

  return (
    <section id="skills" className="py-32 border-t border-white/10">
      <div className="container">
        <div>
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest text-gray-700 dark:bg-gradient-to-r from-emerald-300 to-sky-400 dark:text-transparent bg-clip-text text-center text-sm md:text-base">
              My Toolbox
            </p>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl text-center mt-5">
            Tech Stack
          </h2>
          <p className="text-center dark:text-white/60 text-gray-900/80 mt-4 md:text-lg lg:max-w-md mx-auto">
            Explore the technologies and tools I use to craft
            exceptional digital experiences.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex justify-evenly lg:justify-center flex-wrap gap-2 lg:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-2 group cursor-pointer"
              >
                <span>
                  <img
                    className={`w-12 group-hover:grayscale-0 transition-all duration-300 ${
                      theme === "light" ? "" : "grayscale"
                    }`}
                    src={skill.image}
                    alt="Skill Icon"
                  />
                </span>
                <span>
                  <h4 className="text-lg">{skill.name}</h4>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
