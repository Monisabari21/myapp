import React from "react";
import Laptop from './Laptop.jpg';
import Smartphone from './Smartphone.jpg';
import Headphones from './Headphones.jpg';

const Product = [{id:1,name:"Laptop", price: 999, description: "High-performance laptop with 16GB RAM.",Laptop},
 { id: 2, name: "Smartphone", price: 599, description: "Latest 5G smartphone with OLED display.",Smartphone},
 { id: 3, name: "Headphones", price: 199, description: "Noise-canceling wireless headphones.",Headphones}
];
const ProductList=()=>{
  return(
    <div className="Productcontainer">
        <div className="Productbox">
            <img src={Laptop} alt="Laptop"/>
            <h3>Laptop</h3>
            <p className="price">$40000</p>
          
        </div>
        <div className="Productbox">
            <img src={Smartphone} alt="Smartphone"/>
            <h3>Smartphone</h3>
            <p className="price">$50000</p>
            

        </div>
        <div className="Productbox">
            <img src={Headphones} alt="Headphones"/>
            <h3>Headphones</h3>
            <p className="price">$200</p>
            </div>
        
          
    <div className="Product-list">
    
          {Product.map((Product) => (
          
             <div key={Product.id} className="Product">
          <h3>{Product.name}</h3>
         <p>  key={Product.description} </p>
          <p><strong>${Product.price}</strong></p>
         <button>Add to Cart</button>
        </div>
            
          ))}
      
    </div>
      
    </div>
  )}
export default ProductList;