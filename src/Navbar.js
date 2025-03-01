import React from "react";
import "./Style.css";



const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">E-Shop</div>
      <ul className="Nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
    
      </ul>
      <input type="text" placeholder="Search product..." className="search-bar" />
    </nav>
    
  );
};
export default Navbar;