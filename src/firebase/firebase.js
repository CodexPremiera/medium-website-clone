// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCFrYM79qJAZy0jBl53WgwGCtptUYLQzgs",
  authDomain: "medium-website-clone-ebe54.firebaseapp.com",
  projectId: "medium-website-clone-ebe54",
  storageBucket: "medium-website-clone-ebe54.appspot.com",
  messagingSenderId: "929192289464",
  appId: "1:929192289464:web:e741b5e3c687727c7a404d",
  measurementId: "G-T690TS6G9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const database = getFirestore(app);