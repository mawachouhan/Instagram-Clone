// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1bc_hEz8ZLX2ZafYQeqD9lZENF9eCFRA",
  authDomain: "instagram-971b2.firebaseapp.com",
  projectId: "instagram-971b2",
  storageBucket: "instagram-971b2.appspot.com",
  messagingSenderId: "50791015161",
  appId: "1:50791015161:web:8a717e88b780a074f53828",
  measurementId: "G-1JSE8D1DL6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { db, storage, app };
