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
        {this.props.wishList.map((item) => {
          return (
            <li className="wishlist--list_item" key={item.id}>
              <img
                src={item.image}
                alt={item.image}
                className="wishlist--list_img"
              />

              <div className="item-desc">
                <span className="title--wish">{item.description}</span>

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
          );
        })}

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
