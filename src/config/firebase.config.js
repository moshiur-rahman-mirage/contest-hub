
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7eYKvaPoAPgEenUN34zT5J4DVIfwQ93E",
  authDomain: "animaetdcontest.firebaseapp.com",
  projectId: "animaetdcontest",
  storageBucket: "animaetdcontest.appspot.com",
  messagingSenderId: "858890709086",
  appId: "1:858890709086:web:eddb9d7833a534c6e4eccf"
};


const app = initializeApp(firebaseConfig);

export default app;

// import firebase from "firebase/compat/app";
// import "firebase/auth"


//  const app = firebase.initializeApp({
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// })

// export const auth = app.auth;
// export default app