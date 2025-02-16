// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD2nfzFdeEg_tg3Go9QKlWEuH8kVu1Rwo",
  authDomain: "netflixgpt-2d826.firebaseapp.com",
  projectId: "netflixgpt-2d826",
  storageBucket: "netflixgpt-2d826.firebasestorage.app",
  messagingSenderId: "702067618433",
  appId: "1:702067618433:web:b29b270dd58e5f6ab35380",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
