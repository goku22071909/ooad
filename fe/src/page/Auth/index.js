import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import WaitVerifyMail from "./WaitVerifyMail";
const Auth = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/wait-verify-mail" element={<WaitVerifyMail />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Auth;
