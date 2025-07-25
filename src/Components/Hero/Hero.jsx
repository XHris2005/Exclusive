import React from "react";
import './Hero.css'
import greater_than from '../assets/greater-than.png'
import apple from '../assets/apple.png'
import iphone from '../assets/iphone.png'
const Hero = () => {
    return (  
        <>
        <div className="hero">
        <div className="hero-left">
            <ul className="hero-left-menu">
                <li>Women's Fashion <img src={greater_than} alt="" /></li>
                <li>Men's Fashion <img src={greater_than} alt="" /></li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby & Toys</li>
                <li>Grocery & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
        <div className="hero-right">
            <div className="hero-right-main">
                <div className="main-left">
                    <div className="main-left-iphone">
                        <img src={apple} alt="" />
                        <p>iphone 14 series</p>
                    </div>
                    <h1>Up to 10% Off Voucher</h1>
                </div>
                <div className="main-right">
                    <img src={iphone} alt="" />
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Hero;