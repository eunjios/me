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

export interface AboutData {
  title: string;
  text: string;
}

export interface WorkData {
  company: string;
  period: {
    start: string;
    end: string;
  };
  job: string;
  about: string;
  techStack: string;
}

export interface EducationData {
  title: string;
  period: {
    start: string;
    end: string;
  };
  texts: string[];
}

export interface ProjectOverviewData {
  id: string;
  title: string;
  period: {
    start: string;
    end: string;
  };
  about: string;
  details: {
    title: string;
    text: string;
  }[];
}
