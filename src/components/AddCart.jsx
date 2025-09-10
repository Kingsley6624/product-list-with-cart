import React, { useContext } from "react";
import increment from "/assets/images/icon-increment-quantity.svg";
import decrement from "/assets/images/icon-decrement-quantity.svg";

import { ShopContext } from "../context/Shop-context";

const AddCart = ({ setOpenCart, itemId }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[itemId];
  return (
    <div className="basis-2/6 bg-[#c73a0fff] w-[116.93px] flex items-center justify-between gap-2 border border-[#c73a0fff] px-2 py-2 rounded-full relative bottom-4">
      <button
        className="rounded-full text-[#fcf9f7] border border-[#fcf9f7] p-1"
        onClick={() => cartItemAmount > 0 && removeFromCart(itemId)}
      >
        <img className="h-3 w-3" src={decrement} alt="" />
      </button>
      {cartItemAmount > 0 && (
        <span className="text-[#fcf9f7]">{cartItemAmount}</span>
      )}
      <button
        className="rounded-full text-[#fcf9f7] border border-[#fcf9f7]  p-1"
        onClick={() => addToCart(itemId)}
      >
        <img className="h-3 w-3" src={increment} alt="" />
      </button>
    </div>
  );
};

export default AddCart;
