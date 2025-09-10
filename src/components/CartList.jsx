import React, { useContext } from "react";
import { ShopContext } from "../context/Shop-context";
import CartItem from "./CartItem.JSX";
import data from "../data/data.json";
import remove from '/assets/images/icon-remove-item.svg';

const CartList = () => {
  const { cartItems, removeFromCar } = useContext(ShopContext);
 
  return (
    <div className="">
      {data.map((item, index) => {
        if (cartItems[index] !== 0) {
          return (
            <div key={index}
             className="flex justify-between items-center border-b borer-[#260f08ff] py-4">
              <CartItem {...item} itemId={index} cartItems ={cartItems} />
              {/* cancel item */}
              <button className="rounded-full border border-">
                <img src={remove} alt="" />
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartList;
