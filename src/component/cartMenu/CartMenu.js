import React from "react";
import "../../stylesheets/cartMenu.scss";
import { data } from "../../API/data";

class CartMenu extends React.Component {
  state = {
    data: data.products,
  };

  render() {
    return (
      <div
        className={
          this.props.basketOn ? "cartMenu--side-body" : "cartMenu--hide-body"
        }
      >
          <h4>Cart List</h4>
          <button onClick={this.props.handleBasket}>close</button>
        {this.state.data.slice(0, 3).map((item) => (
          <div className='cartMenu--wrapimages'>
            <img
              className="cartMenu--left-image"
              src={item.image}
              alt={item.name}
            />

            <h5>{item.name}</h5>
            <h6>{item.price}</h6>
          </div>
        ))}
      </div>
    );
  }
}
export default CartMenu;
