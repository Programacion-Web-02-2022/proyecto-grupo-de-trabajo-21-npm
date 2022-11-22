import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import UserRouter from "./UserRouter";
import AdminRouter from "./AdminRouter";
import AuthRouter from "./AuthRouter";

const MainRouter = () => {
    const role ="user";
    const token = "null";
  return (
    <BrowserRouter>
      {role === "user" && <UserRouter />}
      {role === "admin" && <AdminRouter />}
      {(!token || !role) && <AuthRouter />}
    </BrowserRouter>
  );
};

export default MainRouter;

