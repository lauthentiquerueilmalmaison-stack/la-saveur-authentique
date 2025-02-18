import React from "react";
import { Glace } from "../../sanity.types";
import Category from "./Category";
import dessert from "../../public/plat8.jpg";
interface IceCreamProps {
  icecreams: Glace[];
}
const IceCream = ({ icecreams }: IceCreamProps) => {
  return <Category category={icecreams} image={dessert} />;
};

export default IceCream;
