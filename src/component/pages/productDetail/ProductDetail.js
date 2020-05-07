import React from "react";
import { connect } from "react-redux";
import { data } from "../../../API/data";




import React, { Component } from "react";



class ProductDetial extends Component {
    state = {
        product: data.products
    }

   
  
    /*handleclick to add to cart when clicked*/

  handleClick = (id) => {
    this.props.addToCart(id);    
  };

  //to remove the item completely
  handleRemove = (id)=>{
    this.props.removeItem(id);
}
//to add the quantity
handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
}
//to substruct from the quantity
handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
}

  render() {
    

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
        <btton onClick={()=>{this.handleAddQuantity(product.id)}}> 
        </btton>
      </div>
    );
  }
}

/*connecto to our reducer to change the state of our store  */

const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id) =>{dispatch(addToCart(id))},
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }

}

export default connect(mapDispatchToProps, mapStateToProps)(ProductDetial);
