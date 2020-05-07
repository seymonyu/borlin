import { connect } from "react-redux";
import { data } from "../../../API/data";
import { addToCart } from "../../../reducers/action/actions.product";
import React, { Component } from "react";
import "../../../stylesheets/ProductDetail.scss";

class ProductDetail extends Component {
  state = {
    products: this.props.product,
    selectedData: "",
    cartList: [],
    name: this.props.name,
    total: 0,
  };

  /*handleclick to add to cart when clicked*/

  handleClick = () => {
    this.props.addToCart();
  };

  render() {
    console.log(this.props.product);
    return (
      <div className="product_detail--wrapper">
        {this.state.products ? (
          <div>
            <div className="product_detail--header">
              <h1 className="product_detail--h1">Product Detail</h1>
            </div>
            <img src={this.state.products.image} alt={this.state.products.id} />

            <p>{this.state.products.category}</p>
            <p>{this.state.products.size}</p>
            <p> {this.state.products.price}</p>
            {/* <button 
      onClick={() => {
        this.handleClick(this.state.products.id);
      }}
    ></button> */}
          </div>
        ) : (
          <h1>Helloooo</h1>
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    product: state.addShipping
  };
};

//   return {
//     addToCart: () => {
//       dispatch({type: "ADD_TO_CART"});
//     },
//   };
// };

export default connect(mapStateToProps)(ProductDetail);
