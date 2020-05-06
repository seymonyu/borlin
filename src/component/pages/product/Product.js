import React, { Component } from "react";
import { data } from "../../../API/data";
export default class Product extends Component {
  state = {
    data: data,
    selectedData: "",
    productList: [],
  };

  handlerSelectedData = (e) => {
    const category = e.target.id;
    let newData = [];
    this.state.data.products.filter((item) => {
      if (item.category === category) newData.push(item);
    });
    this.setState({ productList: newData });
  };

  handleprices = (e) => {
    const action = e.target.value;
    const sortHighLow = this.state.productList.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    const sortLowHigh = this.state.productList.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    this.setState({
      sortValue: action === "ASC" ? sortLowHigh : sortHighLow,
    });

    console.log(sortHighLow);
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
          <li>lounge</li>
          <li>casual</li>
          <li>evening</li>
          <li>active</li>
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

        {this.state.productList.map((product, i) => (
          <div key={i}>
            <p>{product.price}</p>
            <img src={product.image} alt={product.id} />
          </div>
        ))}
      </div>
    );
  }
}
