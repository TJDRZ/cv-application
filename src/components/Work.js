import React, { Component } from "react";
import Input from "./Input";
import "../styles/list-container.css";

class Work extends Component {
  render() {
    return (
      <div className="list-container">
        <Input type="Work Name" placeholder="Please Enter Your Work" />

        <Input type="Work Title" placeholder="Please Enter Your Title" />

        <Input type="Work Date" placeholder="Please Enter Your Work Date" />
      </div>
    );
  }
}

export default Work;
