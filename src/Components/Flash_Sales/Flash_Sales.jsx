import React from "react";
import './Flash_Sales.css';
import flash_sales_product from "../assets/Flash_sales_product";
import Items from "../Items/Items";
import { Link } from "react-router-dom";
const Flash_Sales = () => {
    return (  
        <>
        <div className="flash_sales">
            <div className="today">
                <div className="rectangle"></div>
                <h3>Today's</h3>
            </div>
            <h1>FLASH SALES</h1>
            <div className="flash_sale_item">
                {flash_sales_product.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} star={item.star} discount={item.discount} no_star={item.no_star}></Items>
                })}
            </div>
            <Link to={'/Home/all_product'}><button className='view_product'>View All Products</button></Link>
        </div>
        <hr />
        </>
    );
}

export default Flash_Sales;