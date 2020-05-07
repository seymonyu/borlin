import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import "./stylesheets/global.scss";

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
        <Route path="/productdetail" component={Home} /> 
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
