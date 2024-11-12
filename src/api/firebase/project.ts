import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase/config';
import { ProjectData } from '@/types/data';

export const getProject = async (id: string) => {
  const docRef = doc(db, 'projects', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error('Project not found');
  }

  return docSnap.data() as ProjectData;
};
