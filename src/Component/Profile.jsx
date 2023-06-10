import React, { useEffect, useState } from "react";
import { Avatar } from "@mantine/core";
import Cookies from "js-cookie";
import Left from "../Explore/Left";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { removeUser } from "../features.jsx/MoviesSlice";
import Swal from "sweetalert2";
import Menu from "./Menu";
import { signOut, updateProfile } from "firebase/auth";
import { auth, db } from "../config/Firebase-config";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const Profile = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const navigate = useNavigate();
  const user = JSON.parse(Cookies.get("user"));
  const profileData = doc(db, "users", auth?.currentUser?.uid);
  useEffect(async () => {
    const data = await getDoc(profileData);
    console.log(data?.data());
  }, []);
  const dispatch = useDispatch();
  const formHandler = async (e) => {
    const token = Cookies.get("token");
    e.preventDefault();
    try {
      dispatch(removeUser());
      await signOut(auth);
      if (auth?.currentUser?.email == null) {
        navigate("/");
        Toast.fire({
          title: "Logout successfully",
        });
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="relative">
      <Left />
      <Menu />
      <div className="flex bg-[#1C1C1E] justify-center items-center h-screen">
        <div>
          <form
            className="bg-[#1C1C1E] items-center flex flex-wrap lg:gap-5 gap-2 justify-center  md:justify-between rounded lg:w-[800px] md:w-[600px] w-[300px] lg:p-5 p-2 shadow-xl"
            onSubmit={formHandler}
          >
            {auth?.currentUser?.photoURL === null ? (
              <div className="">
                <img
                  className="mx-auto md:rounded-sm rounded-full w-[200px] h-[200px] border-[1px] border-white"
                  src="https://i.pinimg.com/564x/20/5a/c8/205ac833d83d23c76ccb74f591cb6000.jpg"
                />
              </div>
            ) : (
              <img
                className="mx-auto md:rounded-sm rounded-full w-[200px] h-[200px] border-[1px] border-white"
                src={auth?.currentUser?.photoURL}
              />
            )}
            <div className="mx-auto ">
              <h2 className="text-white text-3xl font-sans capitalize text-center tracking-wider font-bold ">
                {auth?.currentUser?.displayName}
              </h2>
              <h2 className="text-white text-xl py-3 font-sans ">
                {auth?.currentUser?.email}
              </h2>
              <div className="pb-4">
                <span className="me-2 text-sm text-white font-serif">
                  CreationTime :
                </span>
                <span className=" text-sm text-white font-sans">
                  {auth?.currentUser?.metadata?.creationTime}
                </span>
              </div>

              <div className="flex justify-evenly">
                <button
                  type="submit"
                  className="py-2 px-4 rounded-lg  bg-red-600 hover:bg-red-900 text-white font-semibold font-serif"
                >
                  Log Out
                </button>
                <Link to="/admin">
                  <button className="py-2 px-4 rounded-lg  bg-red-600 hover:bg-red-900 text-white font-semibold font-serif">
                    Go to admin
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
