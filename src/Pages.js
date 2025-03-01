import React from "react";
import Login from './Login';
import Home from"./Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default Pages;