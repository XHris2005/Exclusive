import React, { useState, createContext } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './product_display.css'
import fill_heart from '../assets/Fill Heart.png'
import icon_delivery from '../assets/icon-delivery-b.png'
import icon_return from '../assets/Icon-return.png'
import { CartContext } from "../../Context/CartContext";
const Product_display = (props) => {
    const {product} = props;
    const [size, setSize] = useState(null)
    const [count, setCount] = useState(0)
    const {addToCart} = useContext(CartContext) 
    return (  
        <>
        <div className="product_display_nav">
            <h3><Link to={'/'}>Home</Link> / <span>{product.Category}</span> / <span>{product.name}</span></h3>
        </div>
        <div className="product_display">
            <div className="product_image_div">
            <div className="product_images">
                <div className="product_image"><img src={product.image} alt="" /></div>
                <div className="product_image"><img src={product.image} alt="" /></div>
                <div className="product_image"><img src={product.image} alt="" /></div>
                <div className="product_image"><img src={product.image} alt="" /></div>
            </div>
            <div className="product_main_image">
                <img src={product.image} alt="" />
            </div>
            </div>
            <div className="product_details">
                <h1>{product.name}</h1>
                <div className="star_review">
                    <img src={product.star} alt="" style={{width:'100px'}}/>
                    <p> ({product.no_star} reviews)</p> | <span>in stock</span>
                </div>
                <h1 className="price" style={{fontWeight: '400'}}>${product.new_price}</h1>
                <p>Product description will come at a later time as i have not compiled it up yet</p>
                <hr />
                <div className="sizes">
                    <h3>Size:</h3>
                    <div className="size" onClick={()=> setSize('XS')} style={{backgroundColor: size === 'XS' ? 'black' : 'white', color: size === 'XS' ? 'white' : 'black'}}>XS</div>
                    <div className="size" onClick={()=> setSize('S')} style={{backgroundColor: size === 'S' ? 'black' : 'white', color: size === 'S' ? 'white' : 'black'}}>S</div>
                    <div className="size" onClick={()=> setSize('M')} style={{backgroundColor: size === 'M' ? 'black' : 'white', color: size === 'M' ? 'white' : 'black'}}>M</div>
                    <div className="size" onClick={()=> setSize('L')} style={{backgroundColor: size === 'L' ? 'black' : 'white', color: size === 'L' ? 'white' : 'black'}}>L</div>
                    <div className="size" onClick={()=> setSize('XL')} style={{backgroundColor: size === 'XL' ? 'black' : 'white', color: size === 'XL' ? 'white' : 'black'}}>XL</div>
                </div>
                <div className="quantity_buy">
                    <div className="quantity">
                        <div className="minus" onClick={()=>{
                            setCount((prevCount)=>prevCount - 1)
                        }}><p>-</p></div>
                        <div className="count"><p>{count}</p></div>
                        <div className="add" onClick={()=>{
                            setCount((prevCount)=>prevCount + 1)
                        }}><p>+</p></div>
                    </div>
                    <div className="buy_div">
                        <button className="buy" onClick={()=>{addToCart(product.id)}}>Buy Now</button>
                        <div className="wish">
                            <img src={fill_heart} alt="" />
                        </div>
                    </div>
                </div>
                <div className="shipping_detail">
                    <div className="delivery_detail">
                        <img src={icon_delivery} alt="" />
                        <div className="detail">
                            <h3>Free Delivery</h3>
                            <p>Enter your postal code for delivery availability</p>
                        </div>
                    </div>
                    <div className="return_detail">
                        <img src={icon_return} alt="" />
                        <div className="detail">
                            <h3>Return Delivery</h3>
                            <p>Free 30 days delivery Returns. Details </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Product_display;