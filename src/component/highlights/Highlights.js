import React, { Component } from "react";
import "../../stylesheets/global.scss";
import "../../stylesheets/Highlights.scss";

class Highlight extends Component {
  render() {
    return (
      <div>
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
        </div>
        <div className="newarrivals--wrapper">
          <div className="newarrivals--left_wrapper">
            <h2 className="newarrivals--headline headline-2">Our highlights</h2>
          </div>
          <div className="newarrivals--right_wrapper"></div>
        </div>
      </div>
    );
  }
}

export default Highlight;
