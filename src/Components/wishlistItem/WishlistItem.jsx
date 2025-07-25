import React, { useState } from "react";
import './WishlistItem.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import all_products from "../assets/All_Product";
import icon_delete from '../assets/icon-delete.png'
import { WishlistContext } from "../../Context/WishlistContext";
const WishlistItem = () => {
    const {wishlistItems,forYouItems, addToWishlist, removeFromWishlist,removeFromForYou, getTotalWishlists} = useContext(WishlistContext)
    return (  
        <>
        <div className="wishlist_products">
            <div className="wishlist_top">
                <h3>Wishlist ( {getTotalWishlists()} )</h3>
                <button>Move to bag</button>
            </div>
            <div className="wishlist_product">
                {all_products.map((e)=>{
                    if(wishlistItems[e.id]>0){
                        return <div className="item" key={e.id} >
                            <div className="item_icon">
                                <img src={icon_delete} alt="" onClick={()=> removeFromWishlist(e.id)}/>
                            </div>
                            <div className="item_img">
                                <Link to={`/product/${e.id}`}> <img onClick={()=> window.scrollTo(0,0)} src={e.image} alt="" /></Link>
                                <button  onClick={()=> addToCart(e.id)}>Add to cart</button>
                            </div>
                        <p>{e.name}</p>
                        {
                        e.old_price === undefined ?
                        <div className="item_about" style={{display:'flex', gap:'10px'}}>
                            <div className="item_prices">
                                <p className="item_new_price">{e.new_price}</p>
                            </div>
                        </div> 
                        :
                        <div className="item_about">
                            <div className="discount">{e.discount}%</div>
                            <div className="item_prices">
                                <p className="item_new_price">{e.new_price}</p>
                                <p className="item_old_price">{e.old_price}</p>
                            </div>
                        </div>
                        }
                        </div>
                    }
                })}
            </div>
            <div className="forYou_top">
                <div className="forYou">
                    <div className="rectangle"></div>
                    <h3>Just For You</h3>
                </div>
                <button>See All</button>
            </div>
            <div className="forYou_product">
                {all_products.map((e)=>{
                    if(forYouItems[e.id]>0){
                        return <div className="item" key={e.id} >
                            <div className="item_img">
                                <Link to={`/product/${e.id}`}> <img onClick={()=> window.scrollTo(0,0)} src={e.image} alt="" /></Link>
                                <button  onClick={()=> addToCart(e.id)}>Add to cart</button>
                            </div>
                        <p>{e.name}</p>
                        {
                        e.old_price === undefined ?
                        <div className="item_about" style={{display:'flex', gap:'10px'}}>
                            <div className="item_prices">
                                <p className="item_new_price">{e.new_price}</p>
                            </div>
                            <div className="star">
                                <img src={e.star} alt="" />
                                <p>({e.no_star})</p>
                            </div>
                        </div>
                        
                        :
                        <div className="item_about">
                            <div className="discount">{e.discount}%</div>
                            <div className="item_prices">
                                <p className="item_new_price">{e.new_price}</p>
                                <p className="item_old_price">{e.old_price}</p>
                            </div>
                            <div className="star">
                                <img src={e.star} alt="" />
                                <p>({e.no_star})</p>
                            </div>
                        </div>
                        }
                        </div>
                    }
                })}
            </div>
        </div>
        </>
    );
}

export default WishlistItem;