import React from "react";
import './All_product_page.css'
import All_Product from "../assets/All_Product";
import Items from "../Items/Items";
const All_product_page = () => {
    return (  
        <>
        <div className="All_product_page">
            <div className="all_product">
                <div className="rectangle"></div>
                <h3>All Products</h3>
            </div>
            <h1>Explore All Products</h1>
            <div className="all_product_item">
                {All_Product.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} star={item.star} discount={item.discount} no_star={item.no_star}></Items>
                })}
            </div>
        </div>
        </>
    );
}

export default All_product_page;