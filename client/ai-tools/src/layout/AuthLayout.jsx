import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
