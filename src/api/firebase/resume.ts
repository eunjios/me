import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase/config';
import {
  AboutData,
  EducationData,
  ProjectOverviewData,
  WorkData,
} from '@/types/data';

type CollectionName = 'about' | 'works' | 'education' | 'project';
type DataField = 'details' | 'works' | 'educations' | 'projects';
type DataType =
  | AboutData[]
  | WorkData[]
  | EducationData[]
  | ProjectOverviewData[];

const getResumeData = async <T extends DataType>(
  collectionName: CollectionName,
  dataField: DataField,
  errorMessage: string,
): Promise<T> => {
  const docRef = doc(db, 'resume', collectionName);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error(errorMessage);
  }

  const data = docSnap.data();
  return data[dataField] as T;
};

export const getAbout = () =>
  getResumeData<AboutData[]>('about', 'details', 'There is no about data');

export const getWorks = () =>
  getResumeData<WorkData[]>(
    'works',
    'works',
    'There is no work experience data',
  );

export const getEducations = () =>
  getResumeData<EducationData[]>(
    'education',
    'educations',
    'There is no education data',
  );

export const getProjects = () =>
  getResumeData<ProjectOverviewData[]>(
    'project',
    'projects',
    'There is no project data',
  );
