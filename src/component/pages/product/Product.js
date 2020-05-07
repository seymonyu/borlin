import React, { Component } from "react";
import { data } from "../../../API/data";
import "../../../stylesheets/products.scss";
import { getProduct } from "../../../reducers/action/index";
import { connect } from "react-redux";

class Product extends Component {
  state = {
    data: data.products,
    selectedData: "",
    productList: [],
    name: this.props.name,
  };

  handlerSelectedData = (e) => {
    const category = e.target.id;
    let newData = [];
    this.state.data.filter((item) => {
      if (item.category === category) newData.push(item);
    });
    this.setState({ productList: newData });
  };

  handleprices = (e) => {
    const action = e.target.value;

    

    this.setState({
      sortValue: action === "ASC" ? this.state.productList.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      ): this.state.productList.sort(
        (a, b) =>  parseInt(b.price) - parseInt(a.price)
      )
    }); 


  };

  handleDispatch = (e) => {
    const productId = e.target.id;
    let filteredProduct = {};
    this.state.data.filter((item) => {
      if (item.id === parseFloat(productId)) filteredProduct = item;
    });

    this.props.dispatch(getProduct(filteredProduct));
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            {" "}
            <button id="party" onClick={this.handlerSelectedData}>
              {" "}
              Party
            </button>
          </li>
          <li>
            {" "}
            <button id="lounge" onClick={this.handlerSelectedData}>
              {" "}
              Lounge
            </button>
          </li>
          <li>
            {" "}
            <button id="casual" onClick={this.handlerSelectedData}>
              {" "}
              Casual
            </button>
          </li>
          <li>
            {" "}
            <button id="evening" onClick={this.handlerSelectedData}>
              {" "}
              Evening
            </button>
          </li>
          <li>
            {" "}
            <button id="active" onClick={this.handlerSelectedData}>
              {" "}
              Active
            </button>
          </li>
        </ul>

        <select
          onChange={this.handleprices}
          name="selectPrice"
          id="selectPrice"
        >
          <option> Select your option</option>
          <option value="DES">High to Low</option>
          <option value="ASC">Low High</option>
        </select>

        {/* here we will be mappin using the component card  */}


        {this.state.productList.length>0? this.state.productList.map((product, i) => (
          <div key={i}>
            <p>{product.price}</p>
            <img   onClick={this.handleDispatch} id={product.id} src={product.image} alt={product.id} />
          </div>
        )):this.state.data.map( (product,i) =>
            <div key={i}>
            <p>{product.price}</p>
            <img   onClick={this.handleDispatch} id={product.id}src={product.image} alt={product.id} />
          </div> 
          )
        }

      </div>
    );
  }
}

export default connect()(Product);
