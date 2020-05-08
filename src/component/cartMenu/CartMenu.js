import React from "react";
import "../../stylesheets/cartMenu.scss";
import { connect } from "react-redux";
import { removeItem } from "../../reducers/action/cartActions";
class CartMenu extends React.Component {
  handleRemoveItem = (id) => {
    this.props.removeItem(id);
  };

  render() {
    return (
      <div
        className={
          this.props.basketOn ? "cartMenu--side-body" : "cartMenu--hide-body"
        }
      >
        {" "}
        <div className="cartMenu---top-wraper">
          <h4 className="cartMenu--top-close">Your Cart</h4>
          <h5 className="cartMenu--top-close" onClick={this.props.handleBasket}>
            × close
          </h5>
        </div>
        {this.props.cartReducer.cartList.map((item, i) => (
          <div key={i} className="cartMenu--wrapimages">
            <div className="cartMenu-wrapRemove">
              <p className="cartMenu--topOfImage">REMOVE</p>
              <img
                className="cartMenu--left-image"
                src={item.image}
                alt={item.name}
                onClick={() => {
                  this.handleRemoveItem(item.id);
                }}
              />
            </div>
            <h5>{item.name}</h5>
            <h6>{item.price}</h6>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartReducer: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);
