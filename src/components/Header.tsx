import React from "react";
import Input from "./Input";
import "../styles/header.css";

const Header = () => {
  return (
    <h2 className="header-h2">
      <Input type="Name" placeholder="Please Enter Your Name" />

      <Input
        type="Email"
        placeholder="Please Enter Your Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />

      <Input type="Phone" placeholder="Please Enter Your Phone #" />

      <hr className="header-hr" />
    </h2>
  );
}

export default Header;
