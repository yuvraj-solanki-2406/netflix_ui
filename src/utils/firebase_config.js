// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCEsK7rew8ErVw3iDpA16NDMQHyeOcGLXw",
  authDomain: "netflix-clone-94897.firebaseapp.com",
  projectId: "netflix-clone-94897",
  storageBucket: "netflix-clone-94897.appspot.com",
  messagingSenderId: "1051790855737",
  appId: "1:1051790855737:web:0bc7913fa4e5aac6e647e8",
  measurementId: "G-NR96VB3Z95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app)