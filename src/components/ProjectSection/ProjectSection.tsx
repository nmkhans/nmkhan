import BetterHalfImg from "@/assets/images/betterhalf.png";
import ArtistryImg from "@/assets/images/artristy.png";
import type { ProjectType } from "@/types/project";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects: ProjectType[] = [
  {
    type: "Full Stack",
    title: "Better Half",
    overview:
      "Better Half is an online matrimony platform where users can find their dream life partner through detailed biodata browsing and intelligent discovery features. The platform offers interactive dashboards for both users and admins, enabling member management, request approvals, revenue tracking, and premium subscription handling.",
    challanges:
      "Designing scalable dashboards for different user roles, implementing secure payment flows with Stripe, and managing access control for premium and non-premium users using JWT-based authorization were the primary challenges.",
    keyFeatures: [
      "User and admin dashboards with role-based access control",
      "Advanced biodata search with sorting, filtering, and pagination",
      "Premium membership system with restricted biodata access",
      "Secure Stripe integration for biodata purchases and subscriptions",
      "Admin approval workflows and revenue tracking",
      "JWT-protected APIs with Firebase authentication",
    ],
    techStack: [
      "react",
      "tailwindcss",
      "shadcn-ui",
      "react-hook-form",
      "zod",
      "firebase",
      "tanstack-query",
      "axios",
      "expressjs",
      "mongodb",
      "mongoose",
      "firebase-admin-sdk",
      "jwt",
      "stripe",
      "http-status",
    ],
    coverPhoto: BetterHalfImg,
    liveUrl: "https://nmk-better-half.netlify.app",
    githubFrontendUrl: "https://github.com/nmkhans/better-half",
    githubBackendUrl:
      "https://github.com/nmkhans/better-half-backend",
  },

  {
    type: "Full Stack",
    title: "Artistry",
    overview:
      "Artistry is a historical artifacts showcase platform where users can explore and learn about historical items and also contribute their own artifacts. Authenticated users can create, update, and delete their own artifacts with full CRUD functionality. The platform ensures secure access using JWT authentication and provides controlled user interactions.",
    challanges:
      "Implementing secure authentication and authorization using JWT, managing user-specific CRUD permissions, and designing interaction logic to prevent duplicate likes by enforcing a dislike-before-like rule were some of the key challenges.",
    keyFeatures: [
      "User authentication with Firebase and JWT verification",
      "Protected routes for restricted artifact details and actions",
      "Full CRUD functionality for user-owned artifacts",
      "Like and dislike interaction logic preventing duplicate likes",
      "Authenticated users-only access to artifact management",
    ],
    techStack: [
      "react",
      "react-router",
      "tailwindcss",
      "react-hook-form",
      "firebase-authentication",
      "expressjs",
      "mongodb",
      "mongoose",
      "axios",
    ],
    coverPhoto: ArtistryImg,
    liveUrl: "https://nmk-artistry.netlify.app",
    githubFrontendUrl: "https://github.com/nmkhans/artistry",
    githubBackendUrl: "https://github.com/nmkhans/artistry-backend",
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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
