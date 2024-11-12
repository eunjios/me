export interface Project {
  id: string;
  title: string;
  date: string;
  about: string;
  details: ProjectDetail[];
}

export interface ProjectDetail {
  title: string;
  texts: string[];
}

export interface ProjectData {
  title: string;
  about: string;
  company: string;
  period: {
    start: string;
    end: string;
  };
  role: string;
  team: string;
  techStack: string;
  features: string[];
  contributions: {
    title: string;
    details: string[];
  }[];
  troubleshooting: {
    title: string;
    details: string[];
  }[];
}
