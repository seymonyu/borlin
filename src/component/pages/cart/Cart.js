import React, { Component } from "react";
import "../../../stylesheets/Cart.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  resetStore,
} from "../../../reducers/action/cartActions";
import cartReducer from "../../../reducers/cartReducer";

import { data } from "../../../API/data";

class Cart extends Component {
  routeChange = () => {
    let path = `/checkout`;
    this.props.history.push(path);
  };

  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  handleEmpty = (id) => {
    this.props.resetStore(id);
  };
  render() {
    return (
      <div className="cart--wrapper">
        {this.props.cartList.map((item) => {
          return (
            <li className="cart--list_item" key={item.id}>
              <div className="cart--list_img">
                <img src={item.image} alt={item.image} className="cart--img" />
              </div>

              <div className="cart--item-desc">
                <span className="title">{item.description}</span>
                <p>{item.category}</p>
                <p>
                  <b>Price: {item.price}€</b>
                </p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <div className="cart--add-remove">
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      +1
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id);
                      }}
                    >
                      -1
                    </i>
                  </Link>
                </div>
                <button
                  className="cart--button"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
        <button
          className="cart--button"
          onClick={() => {
            this.handleEmpty();
          }}
        >
          Empty
        </button>
        <button className="cart--button" onClick={this.routeChange}>
          Checkout!
        </button>
        <div className="cart--wrapper">
          <div className="cart">
            <h5>You have ordered:</h5>
            <ul className="cart--list">{this.props.cartList.length} items</ul>
            <ul className="cart--list">{this.props.total} €</ul>
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
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
    resetStore: (id) => {
      dispatch(resetStore(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
