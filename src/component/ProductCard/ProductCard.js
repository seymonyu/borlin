import React, { Component } from "react";
import { getProduct } from "../../reducers/action/index";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Row";
import "./ProductCard.css";

import { Link } from "react-router-dom";

export function mapStateToProps(state) {
  return {
    product: state.getProduct,
  };
}

class ProductCard extends Component {
  handleDispatch = (e) => {
    const productId = e.target.id;
    let filteredProduct = {};
    this.props.data.filter((item) => {
      if (item.id === parseFloat(productId)) filteredProduct = item;
    });

    this.props.dispatch(getProduct(filteredProduct));
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
            <Card.Title>{this.props.product.price}</Card.Title>
            <Link to={`/productdetails`}>
              <Button variant="danger">More Details</Button>
              <figure className="Favorite">
                <span onClick>&#9733;</span>
              </figure>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default connect()(ProductCard);
