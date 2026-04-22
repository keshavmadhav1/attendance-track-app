import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEuXk2NJHAp2FvZen6Yf9cdssIa98wmiY",
  authDomain: "attendence-track-app.firebaseapp.com",
  projectId: "attendence-track-app",
  storageBucket: "attendence-track-app.firebasestorage.app",
  messagingSenderId: "506632564488",
  appId: "1:506632564488:web:19bd62511d2736321a46bd",
  measurementId: "G-2BC5Q6L15L"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage=getStorage(app);
console.log("CONNECTED TO:", firebaseConfig.projectId);
