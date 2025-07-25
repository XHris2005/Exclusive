import React from 'react';
import './Browse_by_category.css';
import category_camera from '../assets/Category-Camera.png';
import category_cellphone from '../assets/Category-CellPhone.png'
import category_computer from '../assets/Category-Computer.png'
import category_gamepad from '../assets/Category-Gamepad.png'
import category_headphone from '../assets/Category-Headphone.png'
import category_phone from '../assets/Category-Phone.png'
import category_smartwatch from '../assets/Category-SmartWatch.png'
const Browse_by_category = () => {
    return (  
        <>
        <div className="category">
            <div className="categories">
                <div className="rectangle"></div>
                <h3>Categories</h3>
            </div>
            <h1>Browse By Category</h1>
            <div className="category_items">
                <div className="category_item">
                    <img src={category_cellphone} alt="" />
                    <p>Phones</p>
                </div>
                <div className="category_item">
                    <img src={category_computer} alt="" />
                    <p>Computers</p>
                </div>
                <div className="category_item">
                    <img src={category_smartwatch} alt="" />
                    <p>SmartWatch</p>
                </div>
                <div className="category_item">
                    <img src={category_camera} alt="" />
                    <p>Cameras</p>
                </div>
                <div className="category_item">
                    <img src={category_headphone} alt="" />
                    <p>HeadPhones</p>
                </div>
                <div className="category_item">
                    <img src={category_gamepad} alt="" />
                    <p>Gaming</p>
                </div>
            </div>
        </div>
        <hr />
        </>
    );
}

export default Browse_by_category;