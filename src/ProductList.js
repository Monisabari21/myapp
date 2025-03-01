import React from "react";
import Laptop from './Laptop.jpg';
import Smartphone from './Smartphone.jpg';
import Headphones from './Headphones.jpg';
const Product = 
[{id:1,name:"Laptop", price:"$50000",description:"High performance laptop with 16GB RAM.",Laptop},
 { id:2,name: "Smartphone", price:"$25000", description: "Latest 5G smartphone with OLED display",Smartphone},
 { id:3, name: "Headphones", price:"$1000", description: "Noise cancelling wireless headphones",Headphones}
];
const ProductList=()=>{
  return(
    
            <div className="Product-list">
    
                {Product.map((Product) => (
          
             <div key={Product.id} className="Product">
              <img  src={Laptop}alt="Laptop"/>
              
              <img src={Smartphone}alt="Smartphone"/>
              
              <img src={Headphones}alt="Headphones"/>
              <h3>{Product.name}</h3>
              <p>{Product.descrption}</p>
              <p><strong>${Product.price}</strong></p>
              <button>Add to cart</button>
              
          
        </div>
  
            
                ))}
          
      
    </div>
      
    
  );};
export default ProductList;