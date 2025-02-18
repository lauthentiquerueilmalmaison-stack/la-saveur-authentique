import React from "react";
import { Formule } from "../../sanity.types";
import Option from "./Option";
import OptionCard from "./OptionCard";

interface OptionsProps {
  options: Formule[];
}
const Options = ({ options }: OptionsProps) => {
  return (
    <OptionCard>
      <div className="flex flex-col items-center">
        <h3 className="text-[25px] lg:text-[35px] font-semibold">
          Formules midi
        </h3>
        <span className="text-sm lg:text-[16px] italic text-center">
          Offre valable uniquement le midi, du lundi au vendredi, hors week-ends
          et jours fériés
        </span>
      </div>
      <div>
        {options.map((option, index) => {
          return <Option option={option} index={index} />;
        })}
      </div>
    </OptionCard>
  );
};

export default Options;
