// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASfMd5o3IFpqF_4oqdXBRU6-gS-3rTMpg",
  authDomain: "todo-app-efb5e.firebaseapp.com",
  projectId: "todo-app-efb5e",
  storageBucket: "todo-app-efb5e.appspot.com",
  messagingSenderId: "243405890347",
  appId: "1:243405890347:web:9b8f60791b295a64511b6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);

