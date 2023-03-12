import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
 



const firebaseConfig = {
  apiKey:Process.env.API,
  authDomain: "chat-436ae.firebaseapp.com",
  projectId: "chat-436ae",
  storageBucket: "chat-436ae.appspot.com",
  messagingSenderId: "688013633903",
  appId: "1:688013633903:web:b3e8d1184051ac0d21609a",
  measurementId: "G-9NB9GRX383"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
