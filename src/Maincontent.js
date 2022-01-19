import Productsak from "./Product_data";
import React from "react";
import './Maincontent.css'


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
        <div className="main_content">
           <center> <h3>Developed Products</h3> </center>
           <br />
            {listitem}
        </div>

    )
}


export default Maincontent;

