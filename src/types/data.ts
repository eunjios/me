export interface Period {
  start: string;
  end: string;
}

export interface LinkData {
  title: string;
  link: string;
}

export interface ProjectData {
  title: string;
  about: string;
  company: string;
  period: Period;
  role: string;
  team: string;
  techStack: string;
  features?: string[];
  contributions: {
    title: string;
    details: string[];
    links?: LinkData[];
  }[];
  troubleshooting?: {
    title: string;
    details: string[];
    links?: LinkData[];
  }[];
}

export interface AboutData {
  title: string;
  text: string;
}

export interface WorkData {
  company: string;
  period: Period;
  job: string;
  about: string;
  techStack: string;
}

export interface EducationData {
  title: string;
  period: Period;
  texts: string[];
}

export interface ProjectOverviewData {
  id: string;
  title: string;
  period: Period;
  about: string;
  details: {
    title: string;
    text: string;
  }[];
}
