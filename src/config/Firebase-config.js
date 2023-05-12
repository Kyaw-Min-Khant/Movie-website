import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC82XOjprUkYM_MGQKvB1EAT5dA_Eh5_Iw",
  authDomain: "ymovie-3395d.firebaseapp.com",
  projectId: "ymovie-3395d",
  storageBucket: "ymovie-3395d.appspot.com",
  messagingSenderId: "144851482016",
  appId: "1:144851482016:web:78e004892b517587ca60c5",
  measurementId: "G-1E3T1E4S8B",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuth=new GoogleAuthProvider();
export const gitAuth=new GithubAuthProvider();
