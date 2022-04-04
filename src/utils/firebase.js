
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbmsZvF-GJkPuLSDzc4cJTGpYJWmDoYQg",
  authDomain: "brut-de-corte-coder.firebaseapp.com",
  projectId: "brut-de-corte-coder",
  storageBucket: "brut-de-corte-coder.appspot.com",
  messagingSenderId: "277386338195",
  appId: "1:277386338195:web:77b60f920b92fd79f21266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);