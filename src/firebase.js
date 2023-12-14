// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv5MSEdSCDaI155LXJ2eMKhjOuYbToccM",
  authDomain: "portfolio-caiv.firebaseapp.com",
  projectId: "portfolio-caiv",
  storageBucket: "portfolio-caiv.appspot.com",
  messagingSenderId: "606282527845",
  appId: "1:606282527845:web:af747e5385ee3d7ffdc28c",
  measurementId: "G-JWLGXZK4BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)