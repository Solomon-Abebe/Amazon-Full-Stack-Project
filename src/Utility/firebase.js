
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuPl25k9hHtMzl-oeHAaUZhIbkkoYPXp4",
  authDomain: "project-63251.firebaseapp.com",
  projectId: "project-63251",
  storageBucket: "project-63251.appspot.com",
  messagingSenderId: "662372623732",
  appId: "1:662372623732:web:f21a14331e930657d9f821",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
