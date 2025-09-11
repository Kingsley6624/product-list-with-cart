import React from "react";
import data from "../data/data.json";
import DessertsCard from "./DessertsCard";
import CartCard from "./CartCard";

const Dessserts = ({setModal}) => {
  return (
    <section className="bg-[#f4edebff] font-RedHatText">
      <div className="px-[5%] py-12 flex flex-col md:flex-row gap-4">
        <div className="basis-[70%] flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Desserts</h1>
          <div className="grid md:grid-cols-3 gap-4 justify-between">
            {data.map((items, index) => (
              <DessertsCard key={index} index={index} {...items} />
            ))}
          </div>
        </div>
        <CartCard setModal={setModal} />
      </div>
    </section>
  );
};

export default Dessserts;
