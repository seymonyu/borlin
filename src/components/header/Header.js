import React, { Component } from "react";
import "../../stylesheets/global.scss";
import "../../stylesheets/Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid header--wrapper">
        <div className="header--left_wrapper">
          <h1>hello</h1>
          <img src="" alt="" />
        </div>
        <div className="header--right_wrapper">
          <h1>hello</h1>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
