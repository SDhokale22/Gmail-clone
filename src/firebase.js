import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzZo-G3qz_qG7WsJiAaOq9cJQiBCY_2BE",
  authDomain: "clone-52a7c.firebaseapp.com",
  projectId: "clone-52a7c",
  storageBucket: "clone-52a7c.appspot.com",
  messagingSenderId: "285029499949",
  appId: "1:285029499949:web:fdc756069666f049c024a4",
  measurementId: "G-90K430S97J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

