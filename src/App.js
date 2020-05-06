import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./component/header/Header";
import "./stylesheets/global.scss";
import Highlight from "./component/highlights/Highlights";
import Footer from "./component/footer/Footer";
import NewArrivals from "./component/newarrivals/NewArrivals";
import Navbar from "./component/navbar/Navbar";
import Checkout from "./component/pages/checkout/Checkout";
import Product from "./component/pages/product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Highlight />
      <NewArrivals />
      <Checkout />
      <Footer />
      <Product />
    </div>
  );
}

export default App;
