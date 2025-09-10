import React from "react";

const CartItem = ({ name, price, itemId, cartItems }) => {
  const numberOfTimes = cartItems[itemId];
  const sumOfItem = numberOfTimes * price;
  return (
    <div>
      <h4>{name}</h4>
      <div>
        <div className="flex gap-2">
          <span>{numberOfTimes}X</span>
          <span>@{price.toFixed(2)}</span>
          <span>${sumOfItem.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
