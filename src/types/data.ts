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
