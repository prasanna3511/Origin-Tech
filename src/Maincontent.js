import Productsak from "./Product_data";
import React from "react";
import './Maincontent.css'
import Product from "./Product";
import teslaboard from "./teslaboard.jpeg";
import iotwater from "./iot-water.jpg"
import Water from "./water.jpg"
import sanitizer from "./sanitizer-1.jpg"

import occupancy from "./occupancy.jpg"





const Maincontent = () =>
{
    console.log(Productsak);
    const listitem = Productsak.map((item)=>
     <div className="card">
         <div className="card_img">
             <img src={item.thumb} />
         </div>
         <div className="card_header">
             <h2>{item.product_name}</h2>
             <p>{item.description}</p>
             <div className="btn">Contact Us</div>

         </div>
     </div>  
    
    );
    return(
        <div className = "home" > 
      { /**/ } 
      <div className = "home_container" >
     </div>

        <div className = "home_row" >
        <h1 > Our Products </h1>
        
         <hr / >
        <Product id = "2"
        title = "Sanitizer Machine"
        // price = { 1899 }
        image = { iotwater }
        /> 
        </div>
        <div className = "home_row" >
       
        
         <hr / >
        <Product id = "2"
        title = "Sanitizer Machine"
        // price = { 1899 }
        image = { sanitizer }
        /> 
        </div>
        <div className = "home_row" >
       
        
         <hr / >
        <Product id = "2"
        title = "Sanitizer Machine"
        // price = { 1899 }
        image = { Water }
        /> 
        </div>
        <div className = "home_row" >
       
        
         <hr / >
        <Product id = "2"
        title = "Sanitizer Machine"
        // price = { 1899 }
        image = { occupancy }
        /> 
        </div>

        <br / >
        </div>
    )
}


export default Maincontent;

