import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../stylesheets/Checkout.scss";
import { Link } from "react-router-dom";
//import { addShipping } from './actions/cartActions'
class Checkout extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div className="checkout--wrapper">
        <div className="checkout--left_wrapper">
          <h2>CHECKOUT</h2>

          <form action="">
            <label for="fname">FULL NAME</label>
            <br />
            <input className="checkout--input" type="text" />
            <label for="fname">ADDRESS</label>
            <br />
            <input className="checkout--input" type="text" />
            <label for="fname">CARD NUMBER</label>
            <br />
            <input className="checkout--input_box" type="text" />
            <label for="fname">CVV</label>
            <br />
            <input className="checkout--input_box" type="text" />
          </form>
          <ul className="checkout--list">
            <li className="checkout--list_item">
              <label>
                <input
                  type="checkbox"
                  ref="shipping"
                  onChange={this.handleChecked}
                />
                <span>Shipping(+9€)</span>
              </label>
            </li>
            <li className="checkout--item">
              <b>Total: {this.props.total} $</b>
            </li>
          </ul>

          <button className="button">PAY</button>
        </div>

        <div className="checkout--right_wrapper">
          <ul className="checkout--list">
            <h2>YOUR CART</h2>
            {this.props.cartList.map((item) => {
              return (
                <li className="checkout--list_item" key={item.id}>
                  <div className="checkout--list_img">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="checkout--img"
                    />
                  </div>

                  <div className="item-desc">
                    <span className="title">{item.description}</span>
                    <p>{item.category}</p>
                    <p>
                      <b>Price: {item.price}€</b>
                    </p>
                    <p>
                      <b>Quantity: {item.quantity}</b>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartReducer.cartList,
    total: state.cartReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
