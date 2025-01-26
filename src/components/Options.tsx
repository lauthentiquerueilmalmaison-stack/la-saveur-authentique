import React from "react";
import { Formule } from "../../sanity.types";

interface OptionsProps {
  options: Formule[];
}
const Options = ({ options }: OptionsProps) => {
  return (
    <div className="w-[90%] mx-auto text-[18px]  lg:text-[25px] flex justify-center mb-5">
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <h2 className="font-semibold">
          Formule midi (du Lundi au Vendredi) hors jours fériérs
        </h2>
        {options.map((option) => {
          return (
            <div
              key={option._id}
              className="flex w-full justify-between text-[15px] lg:text-[20px]"
            >
              <span>{option.nom}</span>
              <span>{option.prix}&euro;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
