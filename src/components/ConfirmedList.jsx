import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import datas from "../data/data.json";
import ConfirmedItem from "./ConfirmedItem";

const ConfirmedList = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="flex flex-col gap-3">
      {datas.map((data, index) => {
        if (cartItems[index] !== 0) {
          return (
            <div key={index}>
              {" "}
              <ConfirmedItem
                {...data}
                itemId={index}
                cartItems={cartItems}
              />{" "}
            </div>
          );
        }
      })}
    </div>
  );
};

export default ConfirmedList;
