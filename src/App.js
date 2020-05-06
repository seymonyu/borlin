import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./component/header/Header";
import "./stylesheets/global.scss";
import Highlight from "./component/highlights/Highlights";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Highlight />
      <Footer />
    </div>
  );
}

export default App;
