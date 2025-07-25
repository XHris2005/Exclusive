import React from "react";
import './New_arrival.css'
import ps5 from '../assets/ps5.png'
import lady_hat from '../assets/lady_hat.png'
import amazon_speaker from '../assets/amazon_speaker.png'
import perfume from '../assets/perfume.png'
const New_arrival = () => {
    return (  
        <>
        <div className="new_arrivals">
            <div className="featured">
                <div className="rectangle"></div>
                <h3>featured</h3>
            </div>
            <h1>New Arrival</h1>
            <div className="new_arrival_items">
                <div className="item_left">
                    <div className="ps5">
                        <img src={ps5} alt="" />
                        <div className="ps5_text">
                            <h2>Playstation 5</h2>
                            <p>Black and white version of the PS5 coming out on sale</p>
                            <p style={{borderBottom: '1px solid lightgrey', width: '90px'}}>Shop now!</p>
                        </div>
                    </div>
                </div>
                <div className="item_right">
                    <div className="item_right_top">
                        <img src={lady_hat} alt="" />
                        <div className="lady_hat_text">
                            <h2>Women's Collection</h2>
                            <p>Featured women collection that gives you another vibe</p>
                            <p style={{borderBottom: '1px solid lightgrey', width: '90px'}}>Shop now!</p>
                        </div>
                    </div>
                    <div className="item_right_bottom">
                        <div className="item_bottom_left">
                            <img src={amazon_speaker} alt="" />
                            <div className="amazon_speaker_text">
                                <h2>Speakers</h2>
                                <p>Amazon wireless speakers</p>
                                <p style={{borderBottom: '1px solid lightgrey', width: '90px'}}>Shop now!</p>
                            </div>
                        </div>
                        <div className="item_bottom_right">
                            <img src={perfume} alt="" />
                            <div className="perfume_text">
                                <h2>Perfume</h2>
                                <p>GUCCI INTENSE OUD EDP</p>
                                <p style={{borderBottom: '1px solid lightgrey', width: '90px'}}>Shop now!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default New_arrival;