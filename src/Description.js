import React from 'react'
import './Description.css'
import teslaboard from "./teslaboard.jpeg";

function Description() {
    return (
 <div className="dcontainer">

{/* <!-- Left Column / Headphones Image --> */}
<div className="left-column">
     <img src={teslaboard} alt="" />
</div>


{/* <!-- Right Column --> */}
<div className="right-column">

  {/* <!-- Product Description --> */}
  <div className="product-description">
    <span>Tesla Board</span>
    <h1>Features</h1>
    <p>1.Direct Programming using Micro-USB <br /> 2.ESP8266 12-E On-Board Chip <br /> 3. 12v power jack to power tesla board <br /> 4.On-Board DC motor driver <br /> 4.On board Buzzer <br /> 5.Direct LCD interfacing setup <br /> 6. 2 relay driver <br /> 7. On-board LED's ,potentiometer ,pull ups ,power source and switch <br /> 8. Easy to interface other sensors, Microcontrollers and peripherals <br /> 9. Extremely easy to use and program using arduino IDE, Visual studio at commands ,Micro-python ,Mongoose OS <br />10. Inexpensive with respect to other IOT boards available in the market
    </p>
  </div>


  {/* <!-- Product Pricing --> */}
  <div className="product-price">
    <span>RS /- 1800 </span> 
    

    <a href="#" class="cart-btn">Contact us</a>
    <br />

  </div>
</div>
</div>
    )
}

export default Description
