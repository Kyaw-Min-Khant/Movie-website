import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const FormRouteGuard = ({ children }) => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token !== undefined) {
      return navigate("/profile");
    }
  }, []);
  return children;
};
export default FormRouteGuard;
