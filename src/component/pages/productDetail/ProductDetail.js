import { connect } from "react-redux";
import { data } from "../../../API/data";
<<<<<<< HEAD
import { addToCart } from "../../../reducers/action/actions.product";
=======
import { addToCart } from "../../../reducers/action/cartActions";
>>>>>>> def072be9df2a5944806f61aa70f3958e272958f
import React, { Component } from "react";
import "../../../stylesheets/ProductDetail.scss";
import cartReducer from "../../../reducers/cartReducer";

class ProductDetail extends Component {
  state = {
    products: this.props.product,
    selectedData: "",

    name: this.props.name,
    total: 0,
  };

  /*handleclick to add to cart when clicked*/

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
<<<<<<< HEAD
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
=======
    console.log(this.state.products);
    return (
      <div className="product_detail--wrapper">
        <div className="product_left--wrapper">
          <h1 className="product_detail--h1">Product Detail</h1>
          <div className="product_detail-img_container">
            <img src={this.state.products.image} alt={this.state.products.id} />{" "}
          </div>
        </div>

        <div className="product_detail--right_wrapper">
          <p>{this.state.products.category}</p>
          <p>{this.state.products.size}</p>
          <p> {this.state.products.price}</p>
        </div>

        <button
          className="product_detail--button"
          value={this.state.products.id}
          onClick={() => {
            this.handleClick(this.state.products.id);
          }}
        >
          ADD TO CART
        </button>
>>>>>>> def072be9df2a5944806f61aa70f3958e272958f
      </div>
    );
  }
}

<<<<<<< HEAD

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
=======
/*connecto to our reducer to change the state of our store  */

const mapStateToProps = (state) => {
  return {
    product: state.getProduct,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
>>>>>>> def072be9df2a5944806f61aa70f3958e272958f
