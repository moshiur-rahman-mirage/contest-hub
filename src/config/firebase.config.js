
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_KEY,
  authDomain: import.meta.env.VITE_SOME_KEY,
  projectId: import.meta.env.VITE_SOME_KEY,
  storageBucket: import.meta.env.VITE_SOME_KEY,
  messagingSenderId: import.meta.env.VITE_SOME_KEY,
  appId: import.meta.env.VITE_SOME_KEY
};


const app = initializeApp(firebaseConfig);

export default app;