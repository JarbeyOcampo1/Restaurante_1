// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwfaI9_goKKpHrIa7UU3kUGiLjGg0bU6Q",
  authDomain: "restaurant-f0bdc.firebaseapp.com",
  projectId: "restaurant-f0bdc",
  storageBucket: "restaurant-f0bdc.firebasestorage.app",
  messagingSenderId: "1096184748798",
  appId: "1:1096184748798:web:eb771244f3ba64063f23af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);