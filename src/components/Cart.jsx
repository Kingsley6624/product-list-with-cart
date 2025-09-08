import React from 'react'
import cartIcon from "/assets/images/icon-add-to-cart.svg";



const Cart = () => {
  return (
    <div className="bg-[#fcf9f7] flex items-center gap-2 border border-[#87635aff] px-2 py-2 rounded-full relative bottom-4">
          <img src={cartIcon} alt="" />
          <span className="font-semibold">Add to Cart</span>
        </div>
  )
}

export default Cart