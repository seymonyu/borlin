import React, { Component } from "react";
import "../../stylesheets/global.scss";
import "../../stylesheets/Highlights.scss";

class Highlight extends Component {
  render() {
    return (
      <div className="highlights--wrapper">
        <h2 className="highlight--headline headline-2">What's new?</h2>
        <div className="highlight--product_wrap">
          <div className="highlight--product_cols">
            <div className="highlight--img"></div>
            <p className="highlight--product_p">Productname</p>
            <span className="highlight--product_span">125€</span>
          </div>
          <div className="highlight--product_cols">
            <div className="highlight--img"></div>
            <p className="highlight--product_p">Productname</p>
            <span className="highlight--product_span">125€</span>
          </div>
          <div className="highlight--product_cols">
            <div className="highlight--img"></div>
            <p className="highlight--product_p">Productname</p>
            <span className="highlight--product_span">125€</span>
          </div>
        </div>
        <div className="highlight--button_wrap">
          <div className="highlight--product_button">show all</div>
        </div>
      </div>
    );
  }
}

export default Highlight;
