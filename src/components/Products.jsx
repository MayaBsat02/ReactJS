import React from "react";
import Product from "./Product";

const Products=(props)=>{
    return(
        <ul style={{listStyle:"none",margin:0}}>
            {props.products.map((product,index)=>
            <Product
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            image={product.image}
            key={index}
            />)}
        </ul>
    )
}

export default Products