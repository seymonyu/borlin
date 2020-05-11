import React, { Component } from "react";
import { connect } from "react-redux";
import "../../stylesheets/global.scss";
import "../../stylesheets/Highlights.scss";
import { withRouter } from "react-router";
import cartReducer from "../../reducers/cartReducer";

class Highlight extends Component {
  state = {
    data: this.props.data,
  };

  routeChange = () => {
    let path = `/product`;
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="highlights--wrapper">
        <h2 className="highlight--headline headline-2">Highlights</h2>
        <div className="highlight--product_wrap">
          <div className="highlight--product_cols">
            <div className="highlight--img">
              <img
                className="highlight--img"
                src={this.state.data[9].image}
                alt=""
              />
            </div>
            <div className="highlight--text">
              <p className="highlight--product_p">{this.state.data[5].name}</p>
              <span className="highlight--product_span">
                {this.state.data[8].price}€
              </span>
            </div>
          </div>
          <div className="highlight--product_cols">
            <div className="highlight--img">
              <img
                className="highlight--img"
                src={this.state.data[8].image}
                alt=""
              />
            </div>
            <div className="highlight--text">
              <p className="highlight--product_p">{this.state.data[2].name}</p>
              <span className="highlight--product_span">
                {this.state.data[2].price}€
              </span>
            </div>
          </div>
          <div className="highlight--product_cols">
            <div className="highlight--img">
              <img
                className="highlight--img"
                src={this.state.data[8].image}
                alt=""
              />
            </div>
            <div className="highlight--text">
              <p className="highlight--product_p">{this.state.data[6].name}</p>
              <span className="highlight--product_span">
                {this.state.data[6].price}€
              </span>
            </div>
          </div>
        </div>
        <div className="highlight--button_wrap">
          <button
            onClick={this.routeChange}
            className="highlight--product_button"
          >
            show all
          </button>
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

export default connect(mapStateToProps)(Highlight);
