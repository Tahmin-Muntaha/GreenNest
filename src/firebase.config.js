// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVUwVpJPQDQVkgUpJ0ZWo1FbtdeXwH8XI",
  authDomain: "green-nest-fianl.firebaseapp.com",
  projectId: "green-nest-fianl",
  storageBucket: "green-nest-fianl.firebasestorage.app",
  messagingSenderId: "88027502222",
  appId: "1:88027502222:web:39bbbbb3e0a4c326c75bdf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);