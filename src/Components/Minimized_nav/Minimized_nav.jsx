import React from "react";
import './Minimized_nav.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import greater_than from '../assets/greater-than.png'
const Minimized_nav = () => {
    const [menu, setMenu] = useState('Home')
    return (  
        <>
        <div className="content">
            <h3><Link to='/'>X </Link></h3>
            <ul className='content_menu'>
                <li onClick={()=>{setMenu('Home')}}><Link to='/'>Home</Link></li>
                <li onClick={()=>{setMenu('Contact')}}> <Link to = '/Contact'>Contact</Link></li>
                <li onClick={()=>{setMenu('about')}}><Link to = '/about'>about</Link></li>
                <li onClick={()=>{setMenu('Sign Up')}}><Link to = '/Sign Up'>Sign Up</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Minimized_nav;