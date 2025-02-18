import dish from "../../public/plat5.jpg";
import { Plat } from "../../sanity.types";
import Category from "./Category";

interface DishProps {
  dishs: Plat[];
}

const Dish = ({ dishs }: DishProps) => {
  return <Category category={dishs} image={dish} />;
};

export default Dish;
