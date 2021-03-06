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

class Cart extends Component {
  routeChange = () => {
    const { history } = this.props;
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

  //to reset store
  handleEmpty = (id) => {
    this.props.resetStore(id);
  };
  render() {
    return (
      <div className="cart--wrapper">
        <div className="cart--items">
          {this.props.cartList.map((item) => {
            return (
              <div className="cart--row">
                <li className="cart--list_item" key={item.id}>
                  <div className="cart--list_img">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="cart--img"
                    />
                  </div>

                  <div className="cart--item-desc">
                    <p className="title">{item.name}</p>
                    <p>{item.category}</p>

                    <b>Price: {item.price}€</b>

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
              </div>
            );
          })}
        </div>
        <div className="cart--text">
          <div className="cart">
            <ul className="cart--list">
              YOU HAVE {this.props.cartList.length} ITEMS IN YOUR BASKET
            </ul>

            <ul className="cart--list_total">{this.props.total} €</ul>
          </div>
        </div>

        <div className="cart--buttons">
          <button
            className="cart--clear_button "
            onClick={() => {
              this.handleEmpty();
            }}
          >
            Clear
          </button>
          <button className="cart--button" onClick={this.routeChange}>
            Checkout!
          </button>
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
