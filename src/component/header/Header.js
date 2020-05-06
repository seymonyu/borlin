import React, { Component } from "react";
import "../../stylesheets/global.scss";
import "../../stylesheets/Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header--wrapper">
        <div className="header--left_wrapper">
          <h1 className="header--typo_big">SS20</h1>
          <div className="header--img_container"></div>
        </div>
        <div className="header--right_wrapper">
          <p className="header--right_circle headline-2 yellow">
            Spring Summer
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
