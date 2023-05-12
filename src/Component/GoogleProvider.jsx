import {
  signInWithCustomToken,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { auth, gitAuth, googleAuth } from "../config/Firebase-config";
import { Navigate } from "react-router-dom";
const GoogleProvider = () => {
  const formSubmit = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
      if (auth?.currentUser?.accessToken) {
        return Navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const gitSubmit = async () => {
    try {
      await signInWithPopup(auth, gitAuth);
      if (auth?.currentUser?.accessToken) {
        return Navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mx-auto flex flex-col gap-5 ">
      <button onClick={formSubmit} className="flex gap-3 px-3 py-1">
        <FcGoogle />
        <h2 className="text-sm text-white font-sans">Continue With Google</h2>
      </button>
      <button onClick={gitSubmit} className="flex gap-3 px-3 py-1">
        <AiFillGithub />
        <h2 className="text-sm text-white font-sans">Continue With GitHub</h2>
      </button>
    </div>
  );
};

export default GoogleProvider;
