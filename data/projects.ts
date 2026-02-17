import raw from './data.json';

export type Project = {
  id: number;
  project_name: string;
  description?: string;
  technologies?: string[];
  live_link?: string;
  github_link?: string;
  image_url?: string | string[];
  role?: string;
};

type PortfolioData = {
  projects: Project[];
  octoberLab?: { image_url?: string[] }[];
};

const data = raw as PortfolioData;

export const projects: Project[] = data.projects || [];
export const octoberLabImages: string[] = data.octoberLab?.[0]?.image_url || [];

export const getProjectById = (id: number) => projects.find((p) => p.id === id);
