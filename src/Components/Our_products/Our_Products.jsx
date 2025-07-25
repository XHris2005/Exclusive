import React from "react";
import './Our_Products.css'
import Our_Products from "../assets/Our_product";
import Items from "../Items/Items";
import { Link } from "react-router-dom";
const Our_Product = () => {
    return (  
        <>
        <div className="our_products">
            <div className="our_product">
                <div className="rectangle"></div>
                <h3>Our Products</h3>
            </div>
            <h1>Explore Our Products</h1>
            <div className="our_product_item">
                {Our_Products.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} star={item.star} discount={item.discount} no_star={item.no_star}></Items>
                })}
            </div>
            <Link to={'/Home/all_product'}><button className='view_product'>View All Products</button></Link>
        </div>
        </>
    );
}

export default Our_Product;