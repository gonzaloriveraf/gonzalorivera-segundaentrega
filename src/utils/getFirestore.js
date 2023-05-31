import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export const getCollection = async (collections) => {
  const db = getFirestore();
  const categoriaCollection = collection(db, collections);
  const result = await getDocs(categoriaCollection);
  return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getDocument = async (collections, idDocuments) => {
  const db = getFirestore(); 
  const categoryRef = doc(db, collections, idDocuments);
  const result = await getDoc(categoryRef);
  if (result.exists()) {
    const documento = { id: result.id, ...result.data() };
    return documento;
  }
};