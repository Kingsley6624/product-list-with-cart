import React from "react";
import Cart from './Cart'
import AddCart from "./AddCart";
import { useState } from "react";


const DessertsCard = ({ image, name, category, price }) => {
  const [openCart, setOpenCart]= useState(false)
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <picture className="rounded-md">
          <source media="(min-width: 1024px)" srcSet={image.desktop} />
          <source media="(min-width: 768px)" srcSet={image.tablet} />
          <img
            className={`rounded-lg shadow ${!openCart? 'border-none' : 'border-2 border-[#c73a0fff]'} `}
            src={image.mobile}
            alt={`${name} image`}
          />
        </picture>
        <span
         onClick={()=>
          setOpenCart(true)
        }>{openCart? <AddCart openCart={openCart} setOpenCart={setOpenCart} /> : <Cart/>}</span>
        
      </div>
      <div className="font-semibold self-start flex flex-col">
        <span className="font-normal text-[#87635aff]">{name}</span>
        <span className="text-[#260f08ff]">{category}</span>
        <span className="text-[#c73a0fff]">{`$${price.toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default DessertsCard;
