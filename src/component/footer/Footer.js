import React, { Component } from "react";
import "../../stylesheets/global.scss";
import "../../stylesheets/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer--wrapper">
        <div className="footer--left_wrapper yellow">
          <h2 className="footer--left_h2 ">Join our Newsletter!</h2>
          <div className="footer--left_p">Your Email</div>
        </div>
        <div className="footer--right_wrapper">
          <p className="footer--right_p">Find a store</p>
          <span className="footer--right_span">Berlin</span>
          <span className="footer--right_span">Amsterdam</span>
          <span className="footer--right_span">London</span>
          <br></br>
          <p className="footer--right_p">Assistence</p>
          <span className="footer--right_span">Email</span>
          <span className="footer--right_span">Call</span>
          <br></br>
          <p className="footer--right_p">Legal and Cookies</p>
          <span className="footer--right_span">Terms and condition</span>
          <span className="footer--right_span">Privacy Poilcy</span>
          <span className="footer--right_span">Cookies and Data</span>
        </div>
        <div className="footer--cool_wrap">
          <p className="footer--cool_p">Super Cool</p>
          <span className="footer--cool_span">All Rights Reserved</span>
          <p className="footer--cool_p">We are cool</p>
        </div>
      </div>
    );
  }
}

export default Footer;
