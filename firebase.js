import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOL5OJZLqCAONqaeNvAKdGKBlevBwAyAE",
  authDomain: "oraculo-enigma.firebaseapp.com",
  projectId: "oraculo-enigma",
  storageBucket: "oraculo-enigma.appspot.com",
  messagingSenderId: "894017346935",
  appId: "1:894017346935:web:866434e464887f10f51572",
  measurementId: "G-5GSEPEC3WS"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);