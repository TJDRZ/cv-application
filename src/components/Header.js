import React, { Component } from "react";
import Input from "./Input";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <h1>
        <Input type="Name" placeholder="Please Enter Your Name" />

        <Input
          type="Email"
          placeholder="Please Enter Your Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />

        <Input type="Phone" placeholder="Please Enter Your Phone #" />

        <hr />
      </h1>
    );
  }
}

export default Header;
