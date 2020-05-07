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
      >    <div className='cartMenu---top-wraper'>
          <h4 className='cartMenu--top-close' >Cart List</h4>
          <h5 className='cartMenu--top-close' onClick={this.props.handleBasket}>close</h5>
          </div>
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
