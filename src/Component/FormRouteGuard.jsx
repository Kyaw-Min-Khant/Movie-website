import React from "react";
import Cookies from "js-cookie";
import Profile from "./Profile";
const FormRouteGuard = ({ children }) => {
  const token = Cookies.get("token");

  if (token == undefined) {
    return children;
  } else {
    return <Profile />;
  }
};
export default FormRouteGuard;
