import React from 'react'
import insta from './insta.png'
import linkedin from './linkedin.png'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="foot">

                <div className="fot1">
                <div className="ft1" >
               < p> Home</p>
                <br />
                <p href="#news">Boards And Programmer</p>
                <br />
                <p href="#about">Products</p>
                <br />
                <p href="#about">Courses</p>
                <br />
                <p href="#about">Information</p>
                </div>

                <div className="ft1">
                <p className="active" href="#home">Shopping Return</p>
                <br />
                <p href="#news">Boards And Programmer</p>
                <br />
                <p href="#about">Payment Method</p>
                <br />
                <p href="#about">Track Order</p>
                <br />
                <p href="#about">Information</p>
                <br />
                </div>
                </div>

            <div className="smedia">
          
               <a href="https://instagram.com/_shubhamomase?utm_medium=copy_link">
            <img className='instagram' src={insta}/>
            </a>
           

            <a href="https://instagram.com/_shubhamomase?utm_medium=copy_link"> 
                       <img className='linkedin' src={linkedin}/>
           </a>
            </div>
           


        </div>


    )
}

export default Footer
