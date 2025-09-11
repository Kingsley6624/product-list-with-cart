import React from "react";

const ConfirmedItem = ({ name, image, price, cartItems, itemId }) => {
  const numberOfTimes = cartItems[itemId];
  const sumOfItem = numberOfTimes * price;
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img className="rounded-md" src={image.thumbnail} alt="" />
        <div className="flex flex-col">
          <p>{name}</p>
          <div className="flex gap-2 text-[#ad8985ff]">
            <p className="text-[#c73a0fff] font-semibold">{numberOfTimes}x</p>
            <p>@ {price.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <span>${sumOfItem.toFixed(2)}</span>
    </div>
  );
};

export default ConfirmedItem;
