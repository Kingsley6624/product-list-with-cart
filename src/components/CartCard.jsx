import React, { useContext, useState } from "react";
import emptyCart from "/assets/images/illustration-empty-cart.svg";
import { ShopContext } from "../context/Shop-context";
import CartList from "./CartList";
import carbon from "/assets/images/icon-carbon-neutral.svg";

const CartCard = ({setModal}) => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const numberOfItems = Object.values(cartItems).reduce(
    (sum, value) => sum + value,
    0
  );

  const sumTotal = getTotalCartAmount();
 

  return (
    <div className="bg-[#fcf9f7] h-fit p-5 rounded-lg flex flex-col gap-3 mx-auto w-full basis-[30%]">
      <h3 className="font-semibold text-[#c73a0fff] text-xl">
        You Cart ({numberOfItems})
      </h3>
      {numberOfItems === 0 ? (
        <div className="flex flex-col items-center gap-3">
          <img src={emptyCart} alt="" />
          <p className="text-[#87635aff]">Your added items will appear here</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <CartList />

          <div className="flex justify-between text-[#260f08ff]">
            <p>Order Total:</p>
            <span className="font-bold">${sumTotal}</span>
          </div>

          <div className="flex justify-center w-full p-3 bg-[#f4edebff] rounded-md">
            <img src={carbon} alt="carbon-tree" />
            <p className="text-[#260f08ff]">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>

          <button
          onClick={()=>setModal(true)}
            type="submit"
            className="w-full bg-[#c73a0fff] text-[#fcf9f7ff] px-3 py-2 rounded-full self-center"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartCard;
