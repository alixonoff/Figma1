import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
        <header>
            <h1>UI.desk</h1>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/testimonials"}>Testimonials</Link></li>
            </ul>
            <div className="icons">
              <CiSearch className='icon'/> 
              {<MdOutlineShoppingCart className='icon' />} 
              <button className='btn1'>Order Now</button>              
            </div>
        </header>
    </div>
  )
}

export default Navbar
