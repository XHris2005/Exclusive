import React from "react";
import './Contact_page.css'
import icon_phone from '../assets/icons-phone.png'
import icon_mail from '../assets/icons-mail.png'
const Contact_page = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    return (  
        <>
        <div className="contact_page">
            <div className="contact_nav">
                <h3><span>Home / </span>Contact</h3>
            </div>
            <div className="contact_main">
                <div className="main_left">
                    <div className="left_top">
                        <div className="top_head">
                            <div className="head_icon">
                                <img src={icon_phone} alt="" />
                            </div>
                            <h3>Call to us</h3>
                        </div>
                        <p>We are available 24/7 7 days a week</p>
                        <p>phone: +2348144379877</p>
                    </div>
                    <hr />
                    <div className="left_bottom">
                        <div className="bottom_head">
                            <div className="head_icon">
                                <img src={icon_mail} alt="" />
                            </div>
                            <h3>Write To US</h3>
                        </div>
                        <p>Fill out our forms and we will contact you withion 24hrs</p>
                        <p>Emails: christoph3eze@gmail.com</p>
                        <p>Emails: Exclusive@gmail.com</p>
                    </div>
                </div>
                <div className="main_right">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form_content">
                            <div className="credentials">
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Your Email" />
                                <input type="no" placeholder="Your Phone"/>
                            </div>
                            <div className="message">
                                <input type="textarea" placeholder="Your Message"/>
                            </div>
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact_page;