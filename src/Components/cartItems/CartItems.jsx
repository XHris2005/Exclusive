import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './CartItems.css';
import all_products from "../assets/All_Product";
import { CartContext } from "../../Context/CartContext";
import icon_cancel from '../assets/icon-cancel.png'
import drop_down from '../assets/Drop-Down-Small.png'
import drop_up from '../assets/Drop-Up-Small.png'

const CartItems = () => {
    const {getTotalAmount,cartItems,addToCart, removeFromCart} = useContext(CartContext)
    const navigate = useNavigate()
    return (  
        <>
        <div className="cart_nav">
            <h3><Link to={'/'}>Home</Link> / <span>Cart</span></h3>
        </div>
        <div className="cart_items">
            <table>
            <thead>
                <tr className="cart_items_title">
                    <th style={{width: '40%', textAlign: 'left'}}><p>Product</p></th>
                    <th style={{width: '20%', textAlign: 'left'}}><p>Price</p></th>
                    <th style={{width: '20%', textAlign: 'left'}}><p>Quantity</p></th>
                    <th style={{width: '20%', textAlign: 'left'}}><p>SubTotal</p></th>
                </tr>
            </thead>
                <tbody className="cart_item">
                {all_products.map((e)=>{
                    if(cartItems[e.id] > 0){
                        return <tr className="cart_item_format" key={e.id}>
                            <td style={{width: '40%', textAlign: 'left'}}><div className="cart_item_product">
                                <div className="cart_item_img">
                                    <img src={e.image} alt="" className="cart_item_productImg"/>
                                    <img src={icon_cancel} alt="" className="cancel" onClick={()=> removeFromCart(e.id)} />
                                </div>
                                <p>{e.name}</p>
                                </div>
                            </td>
                            <td style={{width: '20%', textAlign: 'left', color: 'black'}}><p>${e.new_price}</p></td>
                            <td style={{width: '20%', textAlign: 'left'}}><div className="quantity">{cartItems[e.id]}
                                <div className="drop">
                                    <img src={drop_up} alt=""  onClick={()=> addToCart(e.id)}/>
                                    <img src={drop_down} alt=""  onClick={()=> removeFromCart(e.id)}/>
                                </div>
                            </div></td>
                            <td style={{width: '20%', textAlign: 'left', color: 'black'}}><p>${e.new_price*cartItems[e.id]}</p></td>
                        </tr>
                    } return null;
                })}
                </tbody>
            </table>
            <div className="cart_items_down">
                <div className="cart_buttons">
                    <button className="return_to_shop">Return To Shop</button>
                    <button className="update_cart">Update Cart</button>
                </div>
                <div className="cart_item_total_display">
                    <div className="coupon_div">
                        <input type="text" placeholder="Coupon Code"/>
                        <button>Apply Coupon</button>
                    </div>
                    <div className="cart_item_total">
                        <h3>Cart Total</h3>
                        <div className="cart_item_total_item">
                            <p>SubTotal:</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart_item_total_item">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart_item_total_item">
                            <p>Total:</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <button onClick={()=>{
                            navigate('/Checkout')
                            window.scrollTo(0,0)
                        } 
                        }>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartItems;
