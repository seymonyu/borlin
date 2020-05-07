import React from "react";
import { connect } from "react-redux";


import React, { Component } from "react";

/*acess selected product from products page*/

const mapStateToProps = (state) => {
  return {
    product: state.products.selectedProduct,
  };
};

class ProductDetial extends Component {
  
    /*handleclick to add to cart when clicked*/

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    const { product } = this.props;

    return (
      <div className="product_detail--wrapper">
        <div className="product_detail--header">
            <h1 className="product_detail--h1">Product Detail</h1>

        </div>
        <img src="https://images.pexels.com/photos/3819624/pexels-photo-3819624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt={product.id} />
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.size}</p>
        <p> {product.price}</p>
        <button
          onClick={() => {
            this.handleClick(product.id);
          }}
        ></button>
      </div>
    );
  }
}

/*connecto to our reducer to change the state of our store  */
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(ProductDetial);
