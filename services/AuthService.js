import { app } from './firebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const auth = getAuth(app);

export async function login(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
      if (error.code === 'auth/user-not-found') {
        throw Error('Usuário não encontrado');
      } else if (error.code === 'auth/wrong-password') {
        throw Error('Senha incorreta');
      }
    });
}

export async function logout() {
  await signOut(auth);
}
