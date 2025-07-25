import React from "react";
import all_products from "../Components/assets/All_Product";
import { useParams } from "react-router-dom";
import './CSS/Product.css'
import Product_display from "../Components/product_display/Product_display";
import Related_product from "../Components/related_product/Related_product";
const Product = () => {
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId))
    const Related_products = all_products.filter((a)=>a.Category === product.Category )
    return (  
        <>
        <Product_display product={product}></Product_display>
        <Related_product Related_products={Related_products}></Related_product>
        </>
    );
}

export default Product;