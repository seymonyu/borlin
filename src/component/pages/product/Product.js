import React, { Component } from "react";
import { data } from "../../../API/data";
import "../../../stylesheets/products.scss";
import { getProduct } from "../../../reducers/action/index";
import { connect } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";
import { Container, Col, Row } from "react-bootstrap";
import { asc, des } from "./services/services";
class Product extends Component {
  state = {
    data: data.products,
    selectedData: "",
    visible: 6,
    productList: data.products,
    name: this.props.name,
    flag: false,
    filters: {
      size: {
        XS: false,
        S: false,
        M: false,
        L: false,
      },
      category: {
        party: false,
        active: false,
        evening: false,
        casual: false,
        lounge: false,
      },
    },
  };

  handleLoadMore = () => {
    this.setState((prev) => {
      return { visible: prev.visible + 6 };
    });
  };

  handlerSelectedData = (e, filterProps) => {
    const category = e.target.value;

    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [filterProps]: {
          ...prevState.filters[filterProps],
          [category]: !prevState.filters[filterProps][category],
        },
      },
    }));
  };

  filteredCollecte = () => {
    const { category, size } = this.state.filters;

    const collectedTrueKeys = {
      category: [],
      size: [],
    };
    if (
      !collectedTrueKeys.category.length === 0 &&
      !collectedTrueKeys.size.length === 0
    ) {
      collectedTrueKeys.category.splice(0, collectedTrueKeys.category.lenght);
      collectedTrueKeys.size.splice(0, collectedTrueKeys.category.lenght);

      return collectedTrueKeys;
    } else {
      
      for (let categoryKey in category) {
        if (category[categoryKey]) collectedTrueKeys.category.push(categoryKey);
      }
      for (let sizeKey in size) {
        if (size[sizeKey]) collectedTrueKeys.size.push(sizeKey);
      }
      return collectedTrueKeys;
    }
  };

  multiPropsFilter = (data, filters) => {
    const filterKeys = Object.keys(filters);
    console.log("filterKeys" + filterKeys);
    console.log(filters);
    return data.filter((item) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;

        return filters[key].includes(item[key]);
      });
    });
  };

  searchProduct = () => {
    let filteredProducts = this.multiPropsFilter(
      this.state.data,
      this.filteredCollecte()
    );

    console.log(filteredProducts);

    if (!this.state.flag) {
      return this.setState({
        productList: filteredProducts,
        flag: !this.state.flag,
      });
    } else {
      filteredProducts = this.state.data;
      return this.setState({
        productList: filteredProducts,
        flag: !this.state.flag,
      });
    }
  };

  handleprices = (e) => {
    const action = e.target.value;

    if (this.state.productList.length > 0) {
      this.setState({
        sortValue:
          action === "ASC"
            ? asc(this.state.productList)
            : des(this.state.productList),
      });
    } else {
      this.setState({
        sortValue:
          action === "ASC"
            ? asc(this.state.data.sort)
            : des(this.state.data.sort),
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
    console.log(this.state.flag);
    const categories = ["party", "active", "evening", "casual", "lounge"];
    return (
      <div className="product--body">
        <nav className="product---top-navegation">
          <select
            className="product---top-select"
            onChange={(e) => this.handlerSelectedData(e, "category")}
          >
            <option value="none" selected="selected">
              {" "}
              FILTER BY{" "}
            </option>
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
            <option>SORT BY </option>
            <option value="DES">High to Low</option>
            <option value="ASC">Low High</option>
          </select>
          <select
            className="product---top-select"
            onChange={(e) => this.handlerSelectedData(e, "size")}
            name="selectSize"
            id="selectSize"
          >
            <option value="none" selected="selected">
              SIZE
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <button className="button" onClick={this.searchProduct}>
            {this.state.flag ? "Clear" : "Search"}
          </button>
        </nav>
        {/* here we will be mappin using the component card  */}
        <Container className="product--center-displaycolumn">
          <div className="product--center-displayproducts">
            {this.state.productList.length > 0
              ? this.state.productList
                  .slice(0, this.state.visible)
                  .map((product, i) => (
                    <div key={i} className="product--center-eachproduct">
                      <ProductCard product={product} data={this.state.data} />
                    </div>
                  ))
              : this.state.data
                  .slice(0, this.state.visible)
                  .map((product, i) => (
                    <div key={i} className="product--center-eachproduct">
                      <ProductCard product={product} data={this.state.data} />
                    </div>
                  ))}
          </div>
          <div>
            {this.state.productList.length > 0 ? (
              this.state.productList.length > 6 ? (
                <button
                  className="button"
                  id="product--bottom-button"
                  onClick={this.handleLoadMore}
                >
                  {" "}
                  Load More{" "}
                </button>
              ) : null
            ) : (
              <button
                className="button"
                id="product--bottom-button"
                onClick={this.handleLoadMore}
              >
                {" "}
                Load More{" "}
              </button>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default connect()(Product);
