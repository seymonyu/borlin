import { connect } from "react-redux";
import { data } from "../../../API/data";
import {addToCart} from "../../../reducers/action/actions.product";
import React, { Component } from "react";

class ProductDetial extends Component {
  state = {
    data: data.products,
    selectedData: "",
    cartList: [],
    name: this.props.name,
    total: 0
  };

  

  
  /*handleclick to add to cart when clicked*/

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <div className="product_detail--wrapper">
        <div className="product_detail--header">
          <h1 className="product_detail--h1">Product Detail</h1>
        </div>
        <img
          src=" "/>
          alt={data.products.id}
        />
        <p>{this.props.description}</p>
        <p>{data.products.category}</p>
        <p>{data.products.size}</p>
        <p> {data.products.price}</p>
        <button 
          onClick={() => {
            this.handleClick(this.props.id);
          }}
        ></button>
      </div>
    );
  }
}

/*connecto to our reducer to change the state of our store  */



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => {
      dispatch({type: "ADD_TO_CART"});
    },
  };
};

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};


export default connect(mapDispatchToProps, mapStateToProps)(ProductDetial);
