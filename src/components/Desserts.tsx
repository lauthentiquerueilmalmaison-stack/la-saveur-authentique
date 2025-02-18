import dessert from "../../public/plat8.jpg";
import { Dessert } from "../../sanity.types";
import Category from "./Category";

interface DessertProps {
  desserts: Dessert[];
}
const Desserts = ({ desserts }: DessertProps) => {
  return <Category category={desserts} image={dessert} />;
};

export default Desserts;
