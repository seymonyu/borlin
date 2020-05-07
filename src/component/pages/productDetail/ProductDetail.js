import { connect } from "react-redux";
import { data } from "../../../API/data";

import React, { Component } from "react";
import "../../../stylesheets/ProductDetail.scss";




  
class ProductDetail extends Component {
 


  /*add to cart when clicked*/

  handleAddToCart = (id) => {
    this.props.addToCart(id);
  };

  render() {
    
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

        <button className="product_detail--button" 
        onClick={() => { this.handleAddToCart(this.state.products.id)}}
                   
        >
          ADD TO CART
        </button>
      </div>
    );
  }
}

/*connecto to our reducer to change the state of our store  */



const mapStateToprops = (state)=>{
  return{
    filteredProduct
  }
 
 }

export default connect(mapStateToProps)(ProductDetail);
