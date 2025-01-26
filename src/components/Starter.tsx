import React from "react";
import { Entree } from "../../sanity.types";
import Image from "next/image";
import starter from "../../public/starter.jpg";

interface StarterProps {
  starters: Entree[];
}
const Starter = ({ starters }: StarterProps) => {
  return (
    <div className="w-full h-full flex py-5 lg:space-x-5">
      <div className="hidden lg:flex lg:w-[40vw] lg:h-[70vh] relative rounded-lg overflow-x-hidden bg-black opacity-65">
        <Image
          src={starter}
          alt="plat"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="flex-1">
        {starters.map((starter) => {
          return (
            <div
              key={starter._id}
              className="flex flex-nowrap items-center justify-between text-[20px] lg:text-[30px] py-3 border-b-[1px] "
            >
              <span className="inline-block">{starter.nom}</span>
              <span className="inline-block">{starter.prix}&euro;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Starter;
