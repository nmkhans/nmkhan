import type { ProjectType } from "@/types/project";
import GrainImage from "@/assets/images/grain.jpg";
import { Button } from "../ui/button";
import { ArrowUpRight, Bolt, CircleCheckBig } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  return (
    <div
      className="dark:bg-gray-800 rounded-xl z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:-z-10 dark:after:outline-white/20 after:outline-gray-400/20 after:outline-2 after:-outline-offset-2 after:rounded-xl pt-8 px-6 lg:px-12 sticky"
      style={{
        top: `calc(64px + ${index * 40}px)`,
      }}
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
              {project?.keyFeatures?.map((feature) => (
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
            {project?.techStack?.map((tech) => (
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
  );
}
