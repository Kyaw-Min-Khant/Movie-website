import React from "react";
import { Avatar } from "@mantine/core";
import Cookies from "js-cookie";
import Left from "../Explore/Left";
import { useLogoutMutation } from "../Services/myapi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../features.jsx/MoviesSlice";
import Swal from "sweetalert2";
import Menu from "./Menu";

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
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const formHandler = async (e) => {
    const token = Cookies.get("token");
    e.preventDefault();
    const data = await logout(token);
    if (data.data.success) {
      Toast.fire({
        title: "Logout successfully",
      });
      dispatch(removeUser());
      navigate("/");
    }
  };
  return (
    <div className="relative">
      <Left />
      <Menu />
      <div className="flex bg-[#1C1C1E] justify-center items-center h-screen">
        <div>
          <form
            className="bg-[#1C1C1E]  flex flex-col lg:gap-5  gap-2 justify-between rounded lg:w-[400px] w-[300px]  lg:p-5 p-2 shadow-xl"
            onSubmit={formHandler}
          >
            <Avatar
              size="xl"
              className="mx-auto"
              src="https://unsplash.com/photos/OBufvGMaBaQ"
            />
            <div className="mx-auto ">
              <h2 className="text-white text-4xl font-sans  text-center">
                {user?.name}
              </h2>
              <h2 className="text-white text-xl py-3 font-sans text-center">
                {user?.email}
              </h2>
            </div>
            <button
              type="submit"
              className="py-2 px-4 mx-auto block rounded-lg  bg-red-600 hover:bg-red-900 text-white font-semibold font-serif"
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
