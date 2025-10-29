import React from "react";
import './About_page.css'
import { Link } from "react-router-dom";
import about_side_image from '../assets/about_side_image.png'
import Icon_shop from '../assets/Icon-Shop.png'
import Icon_sale from '../assets/Icon-Sale.png'
import Icon_shopping_bag from '../assets/Icon-Shopping bag.png'
import Icon_Moneybag from '../assets/Icon-Moneybag.png'
import image_1 from '../assets/image 1.png'
import image_2 from '../assets/image 2.png'
import image_3 from '../assets/image 3.png'
import Services from "../our_services/Services";

const About_page = () => {
    return (  
        <>
        <div className="about_page">
            <div className="about_nav">
                <h3><Link to={'/'}>Home</Link> / <span>About</span></h3>
            </div>
            <div className="our_story">
                <div className="our_story_left">
                    <h1>Our Story</h1>
                    <p>Lauched in 2015, Exclusive in South Asia's premier online shopping marketplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and services solutions, Exclusive has 10,500 sailers and 300 brands and serves 3 million customers across the region. </p>
                    <p>Exclusive has more than 1 million product tooffer, growing at a very fast pace. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
                </div>
                <div className="our_story_right">
                    <img src={about_side_image} alt="" />
                </div>
            </div>
            <div className="icon_sale_bars">
                <div className="icon_bar">
                    <div className="icon_container">
                        <div className="icon">
                            <img src={Icon_shop} alt="" />
                        </div>
                    </div>
                    <h2>10.5k</h2>
                    <p>sellers active on our site</p>
                </div>
                <div className="icon_bar">
                    <div className="icon_container">
                        <div className="icon">
                            <img src={Icon_sale} alt="" />
                        </div>
                    </div>
                    <h2>33k</h2>
                    <p>Monthly product sale</p>
                </div>
                <div className="icon_bar">
                    <div className="icon_container">
                        <div className="icon">
                            <img src={Icon_shopping_bag} alt="" />
                        </div>
                    </div>
                    <h2>45.5k</h2>
                    <p>customer active on our site</p>
                </div>
                <div className="icon_bar">
                    <div className="icon_container">
                        <div className="icon">
                            <img src={Icon_Moneybag} alt="" />
                        </div>
                    </div>
                    <h2>45k</h2>
                    <p>Annual gross sale on our site</p>
                </div>
            </div>
            <div className="personnels">
                <div className="personnel">
                    <div className="personnel_img">
                        <img src={image_1} alt="" style={{width:'220px'}}/>
                    </div>
                    <h2>Tom Cruise</h2>
                    <p>founder & chairman</p>
                    <div className="social_icons"></div>
                </div>
                <div className="personnel">
                    <div className="personnel_img">
                        <img src={image_2} alt="" />
                    </div>
                    <h2>Emma Watson</h2>
                    <p>Managing Director</p>
                    <div className="social_icons"></div>
                </div>
                <div className="personnel">
                    <div className="personnel_img">
                        <img src={image_3} alt="" style={{width: '260px'}}/>
                    </div>
                    <h2>Will Smith</h2>
                    <p>Product Design</p>
                    <div className="social_icons"></div>
                </div>
            </div>
            <Services></Services>
        </div>
        </>
    );
}

export default About_page;