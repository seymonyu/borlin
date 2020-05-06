import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import Highlight from "./component/highlights/Highlights";
import "./stylesheets/global.scss";
import Navbar from "./component/navbar/Navbar";
import NewArrivals from "./component/newarrivals/NewArrivals";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Highlight />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;
