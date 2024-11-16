import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

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

export const getAllProjectIds = async () => {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  return querySnapshot.docs.map((doc) => doc.id);
};
