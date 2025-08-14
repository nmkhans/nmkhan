import BetterHalfImg from "@/assets/images/betterhalf.png";
import GrainImage from "@/assets/images/grain.jpg";
import { Button } from "../ui/button";
import { ArrowUpRight, Bolt, CircleCheckBig } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProjectType } from "@/types/project";

const projects: ProjectType[] = [
  {
    type: "Full Stack",
    title: "Better Half",
    overview:
      "Better Half Jul 2025 - Jul 2025Jul 2025 - Jul 2025 Show project Better Half is an Online Matrimonial website where user can look for their desired life partner. User can search for their life partner from biodata page. They can search, sort, filter biodata according to their desire. User can be a premium member by requesting to admin. Non premium members can not view biodata picture and contact information. Once they purchase the biodata, the can view it from their dashboard. Premium members can view them without purchase. User can send contact request to user. User have their own personal dashboard form where user can view stats, manage contact requests and post success story.",
    challanges:
      "I faced many challanges when developing this project.",
    keyFeatures: [
      "Firebase Authentication",
      "JWT Authorization",
      "Searching sorting",
      "Premium Member",
    ],
    techStack: ["reactjs", "tailwindcss", "expressjs", "mongoose"],
    coverPhoto: BetterHalfImg,
    liveUrl: "https://nmk-better-half.netlify.app",
    githubFrontendUrl: "https://github.com/nmkhans/better-half",
    githubBackendUrl:
      "https://github.com/nmkhans/better-half-backend",
  },
  {
    type: "Full Stack",
    title: "Plant house",
    overview:
      "Better Half Jul 2025 - Jul 2025Jul 2025 - Jul 2025 Show project Better Half is an Online Matrimonial website where user can look for their desired life partner. User can search for their life partner from biodata page. They can search, sort, filter biodata according to their desire. User can be a premium member by requesting to admin. Non premium members can not view biodata picture and contact information. Once they purchase the biodata, the can view it from their dashboard. Premium members can view them without purchase. User can send contact request to user. User have their own personal dashboard form where user can view stats, manage contact requests and post success story.",
    challanges:
      "I faced many challanges when developing this project.",
    keyFeatures: [
      "Firebase Authentication",
      "JWT Authorization",
      "Searching sorting",
      "Premium Member",
    ],
    techStack: ["reactjs", "tailwindcss", "expressjs", "mongoose"],
    coverPhoto: BetterHalfImg,
    liveUrl: "https://nmk-better-half.netlify.app",
    githubFrontendUrl: "https://github.com/nmkhans/better-half",
    githubBackendUrl:
      "https://github.com/nmkhans/better-half-backend",
  },
  {
    type: "Full Stack",
    title: "DUI Restaurant",
    overview:
      "Better Half Jul 2025 - Jul 2025Jul 2025 - Jul 2025 Show project Better Half is an Online Matrimonial website where user can look for their desired life partner. User can search for their life partner from biodata page. They can search, sort, filter biodata according to their desire. User can be a premium member by requesting to admin. Non premium members can not view biodata picture and contact information. Once they purchase the biodata, the can view it from their dashboard. Premium members can view them without purchase. User can send contact request to user. User have their own personal dashboard form where user can view stats, manage contact requests and post success story.",
    challanges:
      "I faced many challanges when developing this project.",
    keyFeatures: [
      "Firebase Authentication",
      "JWT Authorization",
      "Searching sorting",
      "Premium Member",
    ],
    techStack: ["reactjs", "tailwindcss", "expressjs", "mongoose"],
    coverPhoto: BetterHalfImg,
    liveUrl: "https://nmk-better-half.netlify.app",
    githubFrontendUrl: "https://github.com/nmkhans/better-half",
    githubBackendUrl:
      "https://github.com/nmkhans/better-half-backend",
  },
];

export default function ProjectSection() {
  return (
    <section className="py-32">
      <div className="container">
        <div>
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest text-gray-700 dark:bg-gradient-to-r from-emerald-300 to-sky-400 dark:text-transparent bg-clip-text text-center text-sm md:text-base">
              Real-world Results
            </p>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl text-center mt-5">
            Featured Projects
          </h2>
          <p className="text-center dark:text-white/60 text-gray-900/80 mt-4 md:text-lg">
            See how I transform real world problems into digital
            solutions with my code
          </p>
        </div>

        <div className="flex flex-col mt-20 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="dark:bg-gray-800 rounded-xl relative z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:-z-10 dark:after:outline-white/20 after:outline-gray-400/20 after:outline-2 after:-outline-offset-2 after:rounded-xl pt-8 px-6 lg:px-12"
            >
              <div
                className="absolute top-0 left-0 inset-0 -z-50 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 gap-16">
                <div className="pb-12">
                  <div>
                    <div className="flex">
                      <span className="uppercase font-semibold tracking-widest text-gray-700 dark:bg-gradient-to-r from-emerald-300 to-sky-400 dark:text-transparent bg-clip-text">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="font-calistoga text-2xl md:text-4xl mt-2">
                      {project.title}
                    </h3>
                    <p className="dark:text-white/50 mt-3 truncate">
                      {project.overview}
                    </p>
                  </div>
                  <hr className="border-t-2 dark:border-white/5 mt-5" />
                  <div className="mt-4">
                    <ul>
                      {project.keyFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 mb-3 dark:text-white/50"
                        >
                          <CircleCheckBig className="size-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge variant="outline" key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col lg:flex-row gap-5">
                    <Button variant="outline">
                      View Detail <Bolt />
                    </Button>
                    <Button>
                      Visit Live Site <ArrowUpRight />
                    </Button>
                  </div>
                </div>
                <div className="mt-8 relative">
                  <img
                    className="inline-block lg:h-full lg:absolute lg:w-auto lg:max-w-none lg:rounded-tl-lg"
                    src={project.coverPhoto}
                    alt="Project Cover Photo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
