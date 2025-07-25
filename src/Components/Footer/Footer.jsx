import React from "react";
import './Footer.css'
import icon_send from '../assets/icon-send.png'
import Qr_Code from '../assets/Qr Code.png'
import google_play from '../assets/GooglePlay.png'
import app_store from '../assets/AppStore.png'
import twitter from '../assets/Icon-Twitter.png'
import instagram from '../assets/icon-instagram.png'
import facebook from '../assets/Icon-Facebook.png'
import linkedln from '../assets/Icon-Linkedin.png'
const Footer = () => {
    return (  
        <>
        <div className="footer_container">
        <div className="exclusive">
                <h2>Exclusive</h2>
                <h3>Subscribe</h3>
                <p>Get 10% off on first order</p>
                <div className="mail">
                    <input type="text" placeholder="Enter your mail" />
                    <img src={icon_send} alt="" />
                </div>
            </div>
            <div className="support">
                <h3>Support</h3>
                <p>E close goowon estate Egbeda Lagos State Nigeria</p>
                <p>exclusive@gmail.com</p>
                <p>+2348144379877</p>
            </div>
            <div className="account">
                <h3>Account</h3>
                <p>My Account</p>
                <p>Login/Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className="quick_link">
                <h3>Quick Link</h3>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className="download">
                <h3>Download App</h3>
                <p>Save $3 with app New users only</p>
                <div className="download_options">
                    <div className="qr_code">
                        <img src={Qr_Code} alt="" />
                    </div>
                    <div className="p_a_store">
                        <div className="play_store">
                            <img src={google_play} alt="" />
                        </div>
                        <div className="app_store">
                            <img src={app_store} alt="" />
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedln} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;