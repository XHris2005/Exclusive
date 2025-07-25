import React from 'react';
import './Services.css'
import delivery from '../assets/icon-delivery.png'
import Customer_service from '../assets/Icon-Customer service.png'
import secure from '../assets/Icon-secure.png'
const Services = () => {
    return (  
        <>
        <div className="service">
            <div className="delivery">
                <div className="icon_container">
                    <div className="icon">
                        <img src={delivery} alt="" />
                    </div>
                </div>
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="customer_service">
                <div className="icon_container">
                    <div className="icon">
                        <img src={Customer_service} alt="" />
                    </div>
                </div>
                <h3>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer service support</p>
            </div>
            <div className="guarantee">
                <div className="icon_container">
                    <div className="icon">
                        <img src={secure} alt="" />
                    </div>
                </div>
                <h3>MONEY BACK GUARANTEE</h3>
                <p>We return your money within 30 days</p>
            </div>
        </div>
        </>
    );
}

export default Services;