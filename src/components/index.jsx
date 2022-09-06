import React, { Component } from "react";
import NavBar from "./NavBar";
import TableData from "./TableData";
import FormInput from "./FormInput";

export default class MainMenu extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-4">
          <TableData />
          <FormInput />
        </div>
      </div>
    );
  }
}
