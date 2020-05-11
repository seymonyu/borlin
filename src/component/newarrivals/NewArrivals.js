import React, { Component } from "react";
import "../../stylesheets/global.scss";
import "../../stylesheets/NewArrivals.scss";
import { connect } from "react-redux";

class NewArrivals extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    return (
      <div className="newarrivals--wrapper">
        <div className="newarrivals--left_wrapper">
          <h2 className="newarrivals--headline headline-2">New Arrivals</h2>
          <div className="newarrivals--product_wrap">
            <div className="newarrivals--product_cols">
              <div className="newarrivals--img">
                <img
                  className="newarrivals--img"
                  src={this.state.data[12].image}
                  alt=""
                />
              </div>
              <div className="newarrivals--text">
                <p className="newarrivals--product_p">
                  {this.state.data[12].name}
                </p>
                <span className="newarrivals--product_span">
                  {this.state.data[12].price}€
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="newarrivals--right_wrapper">
          <div className="newarrivals--product_wrap">
            <div className="newarrivals--product_cols">
              <div className="newarrivals--img">
                <img
                  className="newarrivals--img"
                  src={this.state.data[12].image}
                  alt=""
                />
              </div>
              <div className="newarrivals--text">
                <p className="newarrivals--product_p">
                  P {this.state.data[12].name}
                </p>
                <span className="newarrivals--product_span">
                  {this.state.data[12].price}€
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.cartReducer.data,
  };
};

export default connect(mapStateToProps)(NewArrivals);
