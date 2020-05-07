import React, { Component } from "react";
import "./stylesheets/global.scss";
import "./stylesheets/Highlights.scss";

import "./App.css";
import ProductDetail from "./component/pages/productDetail/ProductDetail";
import { Route, Switch } from "react-router";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Checkout from "./component/pages/checkout/Checkout";
import Cart from "./component/pages/cart/Cart";
import Product from "./component/pages/product/Product";
import Home from "./component/pages/home/Home";
import Wishlist from "./component/pages/wishlist/Wishlist";





function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/productdetail" component={ProductDetail} /> 
        
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/wishlist" component={Wishlist} />
      </Switch>
      </div>
      <Footer />
    
    </div>
  );
}

export default App;
