import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <div className="nav">
                <Link to='/'>  <a className="active" href="#home">Home</a></Link>
                <a href="#news">Boards And Programmer</a>
                <a href="#about">Products</a>
                <a href="#about">Courses</a>
                <a href="#about">Information</a>
            </div>
    )
}

export default Navbar
