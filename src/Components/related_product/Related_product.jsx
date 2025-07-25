import React from "react";
import './Related_product.css'
import Items from "../Items/Items";
const Related_product = (props) => {
    const {Related_products} = props
    return (  
        <>
        <div className="related_product">
            <div className="related_item">
                <div className="rectangle"></div>
                <h3>Related item</h3>
            </div>
            <div className="related_product_item">
                {Related_products.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} star={item.star} discount={item.discount} no_star={item.no_star}></Items>
                })}
            </div>
        </div>
        </>
    );
}

export default Related_product;