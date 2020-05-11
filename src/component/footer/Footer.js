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
          <div className="findstore">
            <h5 className="footer--right_p">Find a store</h5>
            <p className="footer--right_span">Berlin</p>
            <p className="footer--right_span">Amsterdam</p>
            <p className="footer--right_span">London</p>
          </div>
          <div className="assistance">
            <h5 className="footer--right_p">Assistance</h5>
            <p className="footer--right_span">Email</p>
            <p className="footer--right_span">Call</p>
            <p className="footer--right_span">Live Chat</p>
          </div>
          <div className="legal">
            <h5 className="footer--right_p">Legal and Cookies</h5>
            <p className="footer--right_span">Terms and condition</p>
            <p className="footer--right_span">Privacy Poilcy</p>
            <p className="footer--right_span">Cookies and Data</p>
          </div>
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
