import BetterHalfImg from "@/assets/images/betterhalf.png";
import type { ProjectType } from "@/types/project";
import ProjectCard from "../ProjectCard/ProjectCard";

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
    <section id="projects" className="py-32">
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
          <p className="text-center dark:text-white/60 text-gray-900/80 mt-4 md:text-lg lg:max-w-md mx-auto">
            See how I transform real world problems into digital
            solutions with my code
          </p>
        </div>

        <div className="flex flex-col mt-20 gap-10">
          {projects?.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
