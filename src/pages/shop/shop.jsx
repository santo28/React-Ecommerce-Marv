import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";


export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h3>Bachata Store by Marvin Santos</h3>
        </div>
        <div className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
        </div>
    </div>
  );
};
