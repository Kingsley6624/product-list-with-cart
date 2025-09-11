import React from "react";

const CartItem = ({ name, price, itemId, cartItems }) => {
  const numberOfTimes = cartItems[itemId];
  const sumOfItem = numberOfTimes * price;
  return (
    <div className="flex flex-col gap-3">
      <h4>{name}</h4>
      <div>
        <div className="flex gap-2 text-[#ad8985ff]">
          <span className="text-[#c73a0fff] font-semibold">{numberOfTimes}X</span>
          <span>@ {price.toFixed(2)}</span>
          <span className="font-medium">${sumOfItem.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
