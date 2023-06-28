import { getFirestore, doc, collection, addDoc, getDocs, query, where, limit } from 'firebase/firestore';
import { app, db } from './firebaseConfig';

export async function listRemedios(userId) {
  let remedios = [];

  const q = query(collection(db, 'remedios'), where('userId', '==', userId));
  const response = await getDocs(q);

  response.forEach((doc) => {
    remedios.push({ id: doc.id, ...doc.data() });
  });
  console.log(remedios, 'aaaaaaa');
  return remedios;
}

export async function addRemedio(data, userId) {
  await addDoc(collection(db, 'remedios'), {
    medicamento: data.medicamento,
    dosagem: data.dosagem,
    miligramagem: data.miligramagem,
    horario: data.horario,
    userId: userId,
  });
}
