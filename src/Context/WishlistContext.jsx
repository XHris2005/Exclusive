import React, { createContext, useEffect, useState, useContext } from "react";
import all_products from "../Components/assets/All_Product";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext(null)

const getDefaultWishlist = ()=>{
    try{
        const storedWishlist = localStorage.getItem('wishlistItems')
        if(storedWishlist){
            return JSON.parse(storedWishlist)
        }
    } catch (err){
        console.error('There was an error passing Wishlistitems from localstorage:', err)
    }
    let wishlist= {};
    for ( let index = 0; index < all_products.length + 1; index++){
        wishlist[index] = 0
    }
    return wishlist
}

const getDefaultForYou=()=>{
    try{
        const storedForYou = localStorage.getItem('forYouItems')
        if(storedForYou){
            return JSON.parse(storedForYou)
        }
    } catch (err){
        console.error('There was an error parsing ForYouItems from localStorage:', err)
    }
    let forYou = {};
    for(let i = 0; i < all_products.length + 1; i++){
        forYou[i] = 0
    }
    return forYou
}
const WishlistContextProvider = (props) => {
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist())
    const {user} = useContext(AuthContext)

    const [forYouItems, setForYouItems] = useState(getDefaultForYou())
    
    const addToWishlist = (wishId)=>{
        user ? setWishlistItems((prev)=>({...prev, [wishId] : (0) + 1})) : console.log('go to login');
        
    }

    const addToForYou = (forYouId)=>{
        user ? setForYouItems((prevState)=>({...prevState, [forYouId] : (0) + 1})) : console.log('go to login');
        
    }

    const removeFromWishlist = (itemId)=>{
        setWishlistItems((prev)=>({...prev, [itemId]: 0}))
    }

    const removeFromForYou = (forYouId)=>{
        setForYouItems((prevState)=>({...prevState, [forYouId] : prevState[forYouId] - 1}))
    }
    const getTotalWishlists = ()=>{
        let totalWishlist = 0
        for(const items in wishlistItems){
            if(wishlistItems[items] > 0 && user){
                totalWishlist += wishlistItems[items]
            }
        }
        return totalWishlist
    }
    useEffect(()=>{
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems))
        localStorage.setItem('forYouItems', JSON.stringify(forYouItems))
    }, [wishlistItems, forYouItems])
    
    const wishlistValue = {all_products, wishlistItems,forYouItems, addToWishlist,addToForYou, removeFromWishlist,removeFromForYou, getTotalWishlists}
    return (  
        <>
    <WishlistContext.Provider value={wishlistValue}>
        {props.children}
    </WishlistContext.Provider>
        </>
    );
}

export default WishlistContextProvider;