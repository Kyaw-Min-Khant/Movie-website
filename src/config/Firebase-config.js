import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-KN7mRR43JblxXfWMEFP_P9mQotQI_WM",
  authDomain: "movie-hub-7a323.firebaseapp.com",
  projectId: "movie-hub-7a323",
  storageBucket: "movie-hub-7a323.appspot.com",
  messagingSenderId: "1048417530093",
  appId: "1:1048417530093:web:550c09548bf415a0725ce4",
  measurementId: "G-4NMQ03HHLT",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const gitAuth = new GithubAuthProvider();
export const db = getFirestore(app);
