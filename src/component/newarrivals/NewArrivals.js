import React, { Component } from "react";
import "../../stylesheets/global.scss";
import "../../stylesheets/NewArrivals.scss";

class NewArrivals extends Component {
  render() {
    return (
      <div className="newarrivals--wrapper">
        <div className="newarrivals--left_wrapper">
          <h2 className="newarrivals--headline headline-2">Our highlights</h2>
        </div>
        <div className="newarrivals--right_wrapper"></div>
      </div>
    );
  }
}

export default NewArrivals;
