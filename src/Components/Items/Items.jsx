import React from "react";
import { useState, useContext} from "react";
import './items.css'
import Fill_Eye from '../assets/Fill Eye.png'
import Fill_Heart from '../assets/Fill Heart.png'
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
const Items = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const {addToCart} = useContext(CartContext)
    const {addToWishlist,addToForYou} = useContext(WishlistContext)
    return (  
        <>
        <div className="item" onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>{setIsHovered(false)}}>
            <div className="item_icon">
                <img src={Fill_Heart} alt="" onClick={()=> addToWishlist(props.id)}/>
                <img src={Fill_Eye} alt="" onClick={()=> addToForYou(props.id)} />
            </div>
            <div className="item_img">
            <Link to={`/product/${props.id}`}> <img onClick={()=> window.scrollTo(0,0)} src={props.image} alt="" /></Link>
                <button style={{display: isHovered? 'flex' : 'none'}} onClick={()=> addToCart(props.id)}>Add to cart</button>
            </div>
            <p>{props.name}</p>
            {
                props.old_price === undefined ?
                <div className="item_about" style={{display:'flex', gap:'10px'}}>
                    <div className="item_prices">
                        <p className="item_new_price">${props.new_price}</p>
                    </div>
                    <div className="star">
                        <img src={props.star} alt="" />
                        <p>({props.no_star})</p>
                    </div>
                </div> 
                :
                <div className="item_about">
                    <div className="discount">{props.discount}%</div>
                <div className="item_prices">
                    <p className="item_new_price">${props.new_price}</p>
                    <p className="item_old_price">${props.old_price}</p>
                </div>
                <div className="star">
                    <img src={props.star} alt="" />
                    <p>({props.no_star})</p>
                </div>
            </div>
            }
        </div>
        </>
    );
}

export default Items;