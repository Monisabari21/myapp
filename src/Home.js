import React from "react";
import Navbar from"./Navbar";
import ProductList from "./ProductList";
import "./Style.css";


const Home = () => {
  return (
    <div >
      <Navbar/>
      <h1> welcome to our store "JIO DIGITALS"</h1>
      <ProductList/>
      </div>
  );
};

export default Home; 