import React from "react";
import './Best_Selling.css';
import Best_Selling_product from '../assets/Best_Selling_product'
import Items from "../Items/Items";
const Best_Selling = () => {
    return (  
        <>
        <div className="Best_Selling">
            <div className="month">
                <div className="rectangle"></div>
                <h3>This Month</h3>
            </div>
            <h1>FLASH SALES</h1>
            <div className="Best_Selling_item">
                {Best_Selling_product.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} star={item.star} discount={item.discount} no_star={item.no_star}></Items>
                })}
            </div>
        </div>
        </>
    );
}

export default Best_Selling;