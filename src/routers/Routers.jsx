import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
