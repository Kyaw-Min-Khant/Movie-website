import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Film from "../video/OldFilm.mp4";
import "./video.css";
import { NavLink } from "react-router-dom";
import { auth, db } from "../config/Firebase-config";
import "./swiper.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc } from "firebase/firestore";
import {
  Box,
  Button,
  Group,
  Loader,
  NumberInput,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { async } from "@firebase/util";
const SignUp = () => {
  const [load, setLoad] = useState(true);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
    },

    validate: {
      name: (value) =>
        value.length > 2 ? null : "Name must be at least 2 characters",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      address: (value) =>
        value.length > 2 ? null : "Address must be at least 2 characters",
      password: (value) =>
        value.length >= 8 ? null : "Password must be at least 8 characters",
      passwordConfirmation: (value) =>
        value.length >= 8 ? null : "Password must be at least 8 characters",
    },
  });
  const navigate = useNavigate();

  return (
    <div className="bg-video bg-black h-screen w-full flex-col justify-center flex items-center overflow-hidden">
      <video autoPlay loop className="h-screen" muted>
        <source src={Film} type="video/mp4" />
      </video>
      <Box className="absolute px-6 py-2 bg-[#8c8a8a96]" mx="auto">
        <h2 className="text-lg mx-auto text-white font-bold">Create Account</h2>
        <form
          onSubmit={form.onSubmit(async (values) => {
            if (values.password == values.passwordConfirmation) {
              setLoad(false);
              window.alert(
                "First,Copy img url from your browser for your profile picture"
              );
              const photo = window.prompt("Enter Your Image Url");
              try {
                const { user } = await createUserWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
                await updateProfile(user, {
                  displayName: values?.name,
                  photoURL: photo,
                }).then(async () => {
                  const UserData = collection(db, "users");
                  const UserAdd = await addDoc(UserData, {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    address: values.address,
                    phoneNumber: values.phoneNumber,
                  });
                });
                setLoad(true);
                if (auth?.currentUser?.accessToken) {
                  return navigate("/login");
                }
              } catch (e) {
                alert(e);
              }
            } else {
              alert("Incorrect Password");
            }
          })}
        >
          <TextInput
            withAsterisk
            className="text-white"
            mt="sm"
            label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            className="text-white"
            mt="sm"
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <TextInput
            mt="sm"
            className="text-white"
            withAsterisk
            label="Address"
            placeholder="Address"
            {...form.getInputProps("address")}
          />
          <NumberInput
            mt="sm"
            className="text-white"
            withAsterisk
            label="Phone Number"
            placeholder="Phone Number"
            {...form.getInputProps("phoneNumber")}
          />
          <PasswordInput
            mt="sm"
            className="text-white"
            withAsterisk
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            mt="sm"
            className="text-white"
            withAsterisk
            label="PasswordConfirmation"
            placeholder="PasswordConfirmation"
            {...form.getInputProps("passwordConfirmation")}
          />
          <Group position="center" mt="md">
            {load ? (
              <Button className="bg-[#068DA9]" type="submit">
                Submit
              </Button>
            ) : (
              <Button className="bg-[#068DA9]  disabled " type="submit">
                <Loader color="red" variant="dots" />
              </Button>
            )}
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
