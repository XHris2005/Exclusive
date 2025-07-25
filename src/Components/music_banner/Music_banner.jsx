import React from "react";
import './Music_banner.css'
import JBL from '../assets/JBL.png'
const Music_banner = () => {
    return (  
        <>
        <div className="banner_container">
            <div className="banner">
                <div className="banner_left">
                    <h3>Categories</h3>
                    <h1>Enhance Your Music Experience</h1>
                    <button className="buy_now">
                        Buy Now
                    </button>
                </div>
                <div className="banner_right">
                    <img src={JBL} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Music_banner;