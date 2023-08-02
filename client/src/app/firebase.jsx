// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsjl1UCzLR99-ayw2aaioQ3Dgn77LI68s",
  authDomain: "universities-database-3668e.firebaseapp.com",
  projectId: "universities-database-3668e",
  storageBucket: "universities-database-3668e.appspot.com",
  messagingSenderId: "26452444333",
  appId: "1:26452444333:web:ee62ce6eae89bd59b37224",
  measurementId: "G-13CG6GN8PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const universities = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();