import React, { Component } from "react";
import "./stylesheets/global.scss";
import "./stylesheets/Highlights.scss";

import "./App.css";
import ProductDetails from "./component/pages/productDetail/ProductDetail";
//import { Router, Route, Switch } from "react-router";


class App extends Component  {
  render() {
    return(
     
     <div className="App">
       <ProductDetails />

     </div>

     
    )
  }
}

export default App;
