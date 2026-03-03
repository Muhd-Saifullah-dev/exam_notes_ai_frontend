
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotes-c0035.firebaseapp.com",
  projectId: "authexamnotes-c0035",
  storageBucket: "authexamnotes-c0035.firebasestorage.app",
  messagingSenderId: "979914013750",
  appId: "1:979914013750:web:66c561d4b6aee1c7d7ec97"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}