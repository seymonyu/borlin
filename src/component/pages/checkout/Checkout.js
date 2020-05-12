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
  payPopup() {
    alert("You have succesfully paid!");
  }

  render() {
    return (
      <div className="checkout--wrapper">
        <div className="checkout--left_wrapper">
          <h2>CHECKOUT</h2>

          <form action="">
            <input
              className="checkout--input"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="checkout--input"
              placeholder="Address"
              type="text"
            />
            <input
              className="checkout--input"
              placeholder="Card Number"
              type="text"
            />
            <input className="checkout--input" placeholder="CVV" type="text" />
          </form>

          <div className="shipping">
            <div className="shipping-inner">
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <label for="shipping+9">Shipping(+9€)</label>
            </div>

            <p className="checkout--item">
              <b>Total: {this.props.total} €</b>
            </p>
          </div>

          <button className="button" onClick={this.payPopup}>
            PAY
          </button>
        </div>

        <div className="checkout--right_wrapper">
          <div className="checkout-order">
            <ul className="checkout--list">
              <h2>YOUR CART</h2>
              {this.props.cartList.map((item) => {
                return (
                  <div className="checkout--item_container">
                    <li className="checkout--list_item" key={item.id}>
                      <div>
                        <img
                          src={item.image}
                          alt={item.image}
                          className="checkout--img"
                        />
                      </div>

                      <div className="item-desc">
                        <p className="title">{item.name}</p>

                        <p>
                          <b>Price: {item.price}€</b>
                        </p>
                        <p>
                          <b>Quantity: {item.quantity}</b>
                        </p>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
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
