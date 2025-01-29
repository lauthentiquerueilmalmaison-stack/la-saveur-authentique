import React from "react";
import { Formule } from "../../sanity.types";
import Category from "./Category";
import salade from "../../public/salade.jpg";

interface OptionsProps {
  options: Formule[];
}
const Options = ({ options }: OptionsProps) => {
  return (
    <Category category={options} image={salade}>
      <h2 className="text-[20px] lg:text-[30px] font-semibold">
        Formule midi (du Lundi au Vendredi) hors jours fériérs
      </h2>
    </Category>
  );
};

export default Options;
