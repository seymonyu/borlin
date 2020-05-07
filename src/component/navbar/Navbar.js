import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar--wrapper">
        <nav className="nav-wrapper container">
          <ul className="navbar--list">
            <li className={"navbar--list_item"}>
              <Link className="navbar--link" to="/">
                HOME
              </Link>
            </li>
            <li className="navbar--list_item">
              <Link className="navbar--link" to="/" to="/product">
                SHOP
              </Link>
            </li>
            <li className="navbar--list_item">
              <Link className="navbar--link" to="/" to="/wishlist">
                WISHLIST
              </Link>
            </li>
            <li className="navbar--list_item">
              <Link className="navbar--link" to="/" to="/cart">
                CART
              </Link>
            </li>

          </ul>

        </nav>
      </div>
    );
  }
}

export default Navbar;
