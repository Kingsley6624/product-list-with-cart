import React from "react";
import ConfirmedList from "./ConfirmedList";
import confirm from "/assets/images/icon-order-confirmed.svg";

const RecieptModal = ({ setModal }) => {
  return (
    <div className="fixed inset-0 bg-[#f4edebff]/50 flex justify-center items-center z-40">
      <div className="bg-[#fcf9f7ff] w-[95%] md:w-[35%] z-50 p-4 rounded-md shadow-md">
        <div className="flex flex-col gap-6">
          <img className="w-8 h-8" src={confirm} alt="" />
          <div>
            <h2 className="font-bold text-4xl text-[#260f08ff]">Order Confirmed</h2>
            <p className="text-[#87635aff]">we hope you enjoyed your food!</p>
          </div>

          <ConfirmedList />
          <button
            onClick={() => setModal(false)}
            className="w-full bg-[#c73a0fff] text-[#fcf9f7ff] px-3 py-2 rounded-full self-center"
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecieptModal;
