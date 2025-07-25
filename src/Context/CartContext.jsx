import React, { createContext, useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import all_products from "../Components/assets/All_Product";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext(null)
const getDefaultCart = ()=>{
    try {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        } catch (err) {
            console.error("Error parsing cartItems from localStorage:", err);
    }
    let cart = {};
    for ( let index = 0; index < all_products.length + 1; index++){
        cart[index] = 0
    }
    return cart;
}
const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const {user} = useContext(AuthContext)

    const addToCart = (itemId)=>{
        user ?
            setCartItems((prev)=>({...prev, [itemId] : prev[itemId] + 1}))
        :
            console.log('go to login')
        
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId] - 1}))
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((product)=>product.id === Number(item))
                if(itemInfo){
                    totalAmount += itemInfo.new_price * cartItems[item]
                }
            }
        }
        return totalAmount
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0 && user){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }
    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])
    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalAmount, getTotalCartItems}
    
    return (  
        <>
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;