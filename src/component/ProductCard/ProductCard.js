import React, { Component } from "react";
import { getProduct } from "../../reducers/action/index";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router";

import {
  removeFromWishList,
  addToWishList,
} from "../../reducers/action/wishlistAction";
import "./ProductCard.css";

import { Link } from "react-router-dom";

class ProductCard extends Component {
  state = { favorite: false };

  handleRemoveFromWishlist = (id) => {
    console.log("remove");
    this.props.removeFromWishList(id);
    this.isFavorite();
  };
  handleAddToWishlist = (id) => {
    console.log("add");

    this.props.addToWishList(id);
    this.isFavorite();
  };

  isFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  };

  handleDispatch = async (e) => {
    const productId = e.target.id;
    let filteredProduct = {};
    this.props.data.filter((item) => {
      if (item.id === parseFloat(productId)) filteredProduct = item;
    });

    await this.props.filterProduct(filteredProduct);
    this.props.history.replace("/product-details");
  };

  render() {
    return (
      <Container className="AllProduct">
        <Card>
          <Card.Img
            variant="top"
            src={this.props.product.image}
            id={this.props.product.id}
            style={{ height: "13rem" }}
            onClick={this.handleDispatch}
          />

          <Card.Body>
            <Card.Title>{this.props.product.name}</Card.Title>
            <Card.Title>{this.props.product.price} €</Card.Title>

            <figure>
              <span
                className={this.state.favorite ? "is-favorite" : "not-favorite"}
                onClick={() => {
                  this.state.favorite
                    ? this.handleRemoveFromWishlist(this.props.product.id)
                    : this.handleAddToWishlist(this.props.product.id);
                }}
              >
                &#9733;
              </span>
            </figure>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterProduct: (filteredProduct) => {
      dispatch(getProduct(filteredProduct));
    },
    removeFromWishList: (id) => {
      dispatch(removeFromWishList(id));
    },
    addToWishList: (id) => {
      dispatch(addToWishList(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ProductCard));
