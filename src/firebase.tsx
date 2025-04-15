import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8QfQrWsCHVv8AR8fQQumRHq078GZPZ9g",
  authDomain: "x-reloaded-94ef8.firebaseapp.com",
  projectId: "x-reloaded-94ef8",
  storageBucket: "x-reloaded-94ef8.firebasestorage.app",
  messagingSenderId: "748800543856",
  appId: "1:748800543856:web:32fc222cb10c8dfebe38b5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);