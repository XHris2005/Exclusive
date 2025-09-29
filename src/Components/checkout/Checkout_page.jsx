import React from "react";
import './Checkout_page.css'
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { PaystackButton } from 'react-paystack'
import all_products from "../assets/All_Product";
import Bkash from '../assets/Bkash.png'
import Visa from '../assets/Visa.png'
import Mastercard from '../assets/Mastercard.png'
import Nagad from '../assets/Nagad.png'
const Checkout_page = () => {
    const publicKey = 'pk_test_0f3f4393a5ed9ca332b99218c225825f341441c8'
    const {getTotalAmount,cartItems,addToCart, removeFromCart} = useContext(CartContext)
    const [firstName, setFirstName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [streetAddress, setstreetAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const config = {
        email,
        amount : getTotalAmount() * 100,
        metadata : {
            firstName,
            phoneNumber
        },
        publicKey,
        text : 'pay now',
        onSuccess: (reference)=> alert(`payment complete ${reference}`),
        onClose:()=>alert('are you sure')
    }
    return (  
        <>
        <div className="checkout_page">
            <div className="checkout_breadcrum">
                Home  /  Cart  /  <span>Checkout</span>
            </div>
            <div className="checkout">
                <div className="billing_details">
                    <h2>Billing Details</h2>
                    <form action="">
                        <label htmlFor="first_name">first Name</label>
                        <input type="text" id="first_name" value={firstName}
                            onChange={(e)=> setFirstName(e.target.value)}/>

                        <label htmlFor="company_name">Company Name</label>
                        <input type="text" id="campany_name" value={companyName}
                            onChange={(e)=> setCompanyName(e.target.value)}/>

                        <label htmlFor="street_address">Street Address</label>
                        <input type="text" id="street_address" value={streetAddress}
                            onChange={(e)=> setstreetAddress(e.target.value)} />

                        <label htmlFor="apartment_floor">Apartment, floor (optional)</label>
                        <input type="text" id="apartment_floor" />

                        <label htmlFor="town_city">Town/City</label>
                        <input type="text" id="town_city" />

                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="no" id="phone_number" value={phoneNumber}
                            onChange={(e)=> setPhoneNumber(e.target.value)}/>

                        <label htmlFor="email_address">Email Address</label>
                        <input type="email" email="email_address" value={email}
                            onChange={(e)=> setEmail(e.target.value)}/>
                    </form>
                </div>
                <div className="checkout_panel">
                    <div className="checkout_items">
                        {all_products.map((e)=>{
                            if(cartItems[e.id] > 0){
                                return <div className="checkout_item" key={e.id}>
                                    <div className="product">
                                        <div className="product_image">
                                            <img src={e.image} alt="" />
                                        </div>
                                        <p>{e.name}</p>
                                    </div>
                                    <p>${e.new_price}</p>
                                </div>
                            } return null
                        })}
                    </div>
                    <div className="checkout_item_total">
                        <div className="checkout_item_total_item">
                            <p>SubTotal:</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="checkout_item_total_item">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="checkout_item_total_item">
                            <p>Total:</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <div className="payment_options">
                            <div className="bank_payment">
                                <input type="radio" id="Bank"/>
                                <label htmlFor="Bank" className="bank">Bank
                                    <div className="bank_options">
                                        <img src={Bkash} alt="" />
                                        <img src={Visa} alt="" />
                                        <img src={Mastercard} alt="" />
                                        <img src={Nagad} alt="" />
                                    </div>
                                </label>
                            </div>
                            <div className="cash_payment">
                                <input type="radio" id="cash" />
                                <label htmlFor="cash">Cash on delivery</label>
                            </div>
                        </div>
                        <div className="coupon_div">
                            <input type="text" placeholder="Coupon Code"/>
                            <button>Apply Coupon</button>
                        </div>
                        <PaystackButton {...config} className="place_order">Place order</PaystackButton>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Checkout_page;