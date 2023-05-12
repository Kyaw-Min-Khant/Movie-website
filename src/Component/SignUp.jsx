import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Film from "../video/OldFilm.mp4";
import "./video.css";
import { NavLink } from "react-router-dom";
import { auth } from "../config/Firebase-config";
import GoogleProvider from "./GoogleProvider";
import { Loader } from "@mantine/core";

import "./swiper.css";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LazyLoading from "./LazyLoading";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const run = async (e) => {
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth);
      if (auth?.currentUser?.accessToken) {
        return navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  // if(isLoading){
  //   return(
  //     <LazyLoading/>
  //   )
  // };
  return (
    <div className="bg-video bg-black h-screen w-full flex-col justify-center flex items-center overflow-hidden">
      <video autoPlay loop className="h-screen" muted>
        <source src={Film} type="video/mp4" />
      </video>
      <Card
        className="absolute backdrop-blur p-6"
        color="transparent"
        shadow={false}
      >
        <Typography variant="h4" color="white">
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form onSubmit={run} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
              size="lg"
              label="Email"
              value={email}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className="text-white"
              type="password"
              size="lg"
              label="Password"
              value={password}
            />
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            <p> Register</p>
          </Button>
          <Typography color="white" className="mt-4 text-center font-normal">
            Already have an account?
            <NavLink
              to="/login"
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Login
            </NavLink>
          </Typography>
        </form>
        <GoogleProvider />
      </Card>
    </div>
  );
};

export default SignUp;
