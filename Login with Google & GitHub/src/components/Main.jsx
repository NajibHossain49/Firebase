// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <br />
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
