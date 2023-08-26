import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin88-e81a6.firebaseapp.com",
  projectId: "admin88-e81a6",
  storageBucket: "admin88-e81a6.appspot.com",
  messagingSenderId: "872495431321",
  appId: "1:872495431321:web:a1f9f0cdaf7f594f864208"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);