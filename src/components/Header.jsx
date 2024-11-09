// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};

export default Header;
