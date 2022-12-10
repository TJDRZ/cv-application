import React from "react";
import Input from "./Input";
import "../styles/list-container.css";

const School = () => {
  return (
    <div className="list-container">
      <Input type="School Name" placeholder="Please Enter Your School" />

      <Input type="Study Title" placeholder="Please Enter Your Field" />

      <Input type="Study Date" placeholder="Please Enter Your Study Date" />
    </div>
  );
}

export default School;
