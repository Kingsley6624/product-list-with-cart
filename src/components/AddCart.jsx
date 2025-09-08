import React from "react";
import { useState } from "react";
import increment from "/assets/images/icon-increment-quantity.svg";
import decrement from "/assets/images/icon-decrement-quantity.svg";

const AddCart = ({ openCart, setOpenCart }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="bg-[#c73a0fff] w-[116.93px] flex items-center justify-between gap-2 border border-[#c73a0fff] px-2 py-2 rounded-full relative bottom-4">
      <button
        className="rounded-full text-[#fcf9f7] border border-[#fcf9f7] p-1"
        onClick={() => {
          setCount((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else {
              setOpenCart(false);
              return prev;
            }
          });
        }}
      >
        <img className="h-3 w-3" src={decrement} alt="" />
      </button>
      <span className="text-[#fcf9f7]">{count}</span>
      <button
        className="rounded-full text-[#fcf9f7] border border-[#fcf9f7]  p-1"
        onClick={() => setCount((prev) => prev + 1)}
      >
        <img className="h-3 w-3" src={increment} alt="" />
      </button>
    </div>
  );
};

export default AddCart;
