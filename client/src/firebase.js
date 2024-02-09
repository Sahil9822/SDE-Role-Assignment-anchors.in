// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "url-shorter-link.firebaseapp.com",
  projectId: "url-shorter-link",
  storageBucket: "url-shorter-link.appspot.com",
  messagingSenderId: "747650276940",
  appId: "1:747650276940:web:9a360ceba1815b148d5ee9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);