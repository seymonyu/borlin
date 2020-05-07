import React, { Component } from "react";
import { data } from "../../../API/data";
import "../../../stylesheets/products.scss";
import { getProduct } from "../../../reducers/action/index";
import { connect } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";
import { Container, Col, Row } from "react-bootstrap";
class Product extends Component {
  state = {
    data: data.products,
    selectedData: "",
    productList: [],
    name: this.props.name,
  };

  handlerSelectedData = (e) => {
    const category = e.target.value;
    let newData = [];
    this.state.data.filter((item) => {
      if (item.category === category) newData.push(item);
    });
    this.setState({ productList: newData });
  };

  handleprices = (e) => {
    const action = e.target.value;

    if (this.state.productList.length > 0) {
      this.setState({
        sortValue:
          action === "ASC"
            ? this.state.productList.sort(
                (a, b) => parseFloat(a.price) - parseFloat(b.price)
              )
            : this.state.productList.sort(
                (a, b) => parseInt(b.price) - parseInt(a.price)
              ),
      });
    } else {
      this.setState({
        sortValue:
          action === "ASC"
            ? this.state.data.sort(
                (a, b) => parseFloat(a.price) - parseFloat(b.price)
              )
            : this.state.data.sort(
                (a, b) => parseInt(b.price) - parseInt(a.price)
              ),
      });
    }
  };

  handleDispatch = (e) => {
    const productId = e.target.id;
    let filteredProduct = {};
    this.state.data.filter((item) => {
      if (item.id === parseFloat(productId)) filteredProduct = item;
    });
  };

  render() {
    const categories = ["party", "active", "evening", "casual", "lounge"];
    return (
      <div className="product--body">
        <nav className="product---top-navegation">
          <select
            className="product---top-select"
            onChange={this.handlerSelectedData}
          >
            <option> SORT BY </option>
            {categories.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            className="product---top-select"
            onChange={this.handleprices}
            name="selectPrice"
            id="selectPrice"
          >
            <option>FILTER BY </option>
            <option value="DES">High to Low</option>
            <option value="ASC">Low High</option>
          </select>
        </nav>
        {/* here we will be mappin using the component card  */}
        <div className="product--center-displayproducts">
          {this.state.productList.length > 0
            ? this.state.productList.map((product, i) => (
                <div   className="product--center-eachproduct">
                  
                    <ProductCard
                      key={i}
                      product={product}
                      data={this.state.data}
                    />
                  
                </div>
              ))
            : this.state.data.map((product, i) => (
              <div   className="product--center-eachproduct">
                 
                    <ProductCard
                      key={i}
                      product={product}
                      data={this.state.data}
                    />
                
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default connect()(Product);
