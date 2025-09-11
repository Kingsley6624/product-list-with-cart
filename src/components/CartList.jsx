import React, { useContext } from "react";
import { ShopContext } from "../context/Shop-context";
import CartItem from "./CartItem.JSX";
import data from "../data/data.json";
import remove from '/assets/images/icon-remove-item.svg';

const CartList = () => {
  const { cartItems, closeList } = useContext(ShopContext);

  return (
    <div className="">
      {data.map((item, index) => {
        if (cartItems[index] !== 0) {
          return (
            <div key={index}
             className="flex justify-between items-center border-b borer-[#c9aea6ff] py-4">
              <CartItem {...item} itemId={index} cartItems ={cartItems} />
              {/* cancel item */}
              <button
              onClick={()=> closeList(index) }
              className="rounded-full border border-[#ad8985ff] active:border-[#260f08ff]">
                <img className="h-4 w-4" src={remove} alt="" />
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartList;
