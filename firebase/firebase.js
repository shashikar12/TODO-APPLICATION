import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAAmPKJHJUjoJSq87XEngUipaFEp5IekB0",
  authDomain: "fir-todo-app-ea319.firebaseapp.com",
  projectId: "fir-todo-app-ea319",
  storageBucket: "fir-todo-app-ea319.appspot.com",
  messagingSenderId: "577526108717",
  appId: "1:577526108717:web:dc0ad90d184cf4161b9ea4",
  measurementId: "G-PQS7J4EE8F",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
