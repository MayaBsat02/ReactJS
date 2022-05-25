import React from 'react';
import { ProductItem
 } from '../styles/Product.style';
const Product=(props)=>{
    return (
        <ProductItem>
          <h2 style={{fontSize:'2rem',color:'#f7e702' }}>{props.title}</h2>
          <h3 style={{color:'#eccf77',margin: 0,fontSize: '1rem'}}>{props.price}</h3>
          <h4>{props.category}</h4>
          <p>{props.description}</p>
          <img src={props.image} style={{width:100}}/>
        </ProductItem>
      ); 
}

export default Product