import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx0fKcwoBsU-haiTNauYGTT3oalNBK5nk",
  authDomain: "phonedekho-9349d.firebaseapp.com",
  projectId: "phonedekho-9349d",
  storageBucket: "phonedekho-9349d.appspot.com",
  messagingSenderId: "785024322800",
  appId: "1:785024322800:web:ed5a89874ceb6f7a6ac635"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const imgDB = getStorage(app);