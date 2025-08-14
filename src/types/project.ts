export type ProjectType = {
  type: "Full Stack" | "Frontend";
  title: string;
  overview: string;
  challanges: string;
  keyFeatures: string[];
  techStack: string[];
  coverPhoto: string;
  liveUrl: string;
  githubFrontendUrl: string;
  githubBackendUrl?: string;
};
