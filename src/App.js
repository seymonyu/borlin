import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./component/header/Header";
import "./stylesheets/global.scss";
import Highlight from "./component/highlights/Highlights";
import Footer from "./component/footer/Footer";
import NewArrivals from "./component/newarrivals/NewArrivals";

function App() {
  return (
    <div className="App">
      <Header />
      <Highlight />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;
