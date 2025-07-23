// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAROT6v2A_Mhb4yoV-im9jvDlz6K0bCTwI",
  authDomain: "gta-portfolio-88cf7.firebaseapp.com",
  projectId: "gta-portfolio-88cf7",
  storageBucket: "gta-portfolio-88cf7.firebasestorage.app",
  messagingSenderId: "382936091327",
  appId: "1:382936091327:web:b7d57dda5faf106792140a",
  measurementId: "G-6Z313CFGPK"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore DB
const db = getFirestore(app);

export { db };
