import React, { Component } from "react";
import "../../../stylesheets/Wishlist.scss";
import { connect } from "react-redux";
import {
  removeFromWishList,
  resetStore,
} from "../../../reducers/action/wishlistAction";

export class Wishlist extends Component {
  handleRemove = (id) => {
    this.props.removeFromWishList(id);
  };
  handleEmpty = (id) => {
    this.props.resetStore(id);
  };
  render() {
    return (
      <div className="wishlist--wrapper">
        <h2 className="wishlist--headline headline-2">Wishlist</h2>
        <div className="wishlist--items">
          {this.props.wishList.map((item) => {
            return (
              <div className="wishlist--row">
                <li className="wishlist--list_item" key={item.id}>
                  <div className="wishlist--img_container">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="wishlist--list_img"
                    />
                  </div>
                  <div className="item-desc">
                    <p className="title--wish">{item.name}</p>
                  </div>
                  <div className="wishlist--button_container">
                    <button
                      className="button"
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
        <button
          className="wishlist--button"
          onClick={() => {
            this.handleEmpty();
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    wishList: state.wishlistReducer.wishList,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromWishList: (id) => {
      dispatch(removeFromWishList(id));
    },
    resetStore: (id) => {
      dispatch(resetStore(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
